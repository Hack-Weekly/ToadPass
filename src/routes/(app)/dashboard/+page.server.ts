import { fail, redirect } from "@sveltejs/kit"
import { aes256Encrypt } from "$lib/server/crypto";
import type { Actions } from "@sveltejs/kit"
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ url, fetch }) => {
  let categoryId = url.searchParams.get("cat")


  const response = await fetch(`/dashboard/operations/get-credentials?cat=${ categoryId || "none" }`)

  const data = await response.json()

  return data
}

export const actions: Actions = {
    "category": async ({ request, locals: { supabase, getSession } }) => {
        const formData = await request.formData()
        
        const name = formData.get("category") as string
        if (!name) return fail(400, { message: "Please provide a name for the category", success: false, error: "category" })
        const session = await getSession()
        const userId = session!.user.id

        const { error } = await supabase.from("category").insert({ user_id: userId, name })

        if (error) {
            console.log(error)
            // Column 'category' of relation 'category' does not exist
            if(error.code == "PGRST204") return fail(400, { message: "Failed creating category. Try again later!", success: false, error: "supabase" })
            
            return fail(400, { message: error.message, success: false, error: "supabase" })
        }

        return { message: "Category created successfully", success: true }
             
    },

    "password": async ({ request, locals: { supabase, getSession } }) => {
        // email and password are to be encrypted
        const { email, password, personal_note, website, category } = Object.fromEntries(await request.formData()) as Record<string, string>
        
        if (!website)  return fail(400, { message: "Website url is required", success: false, error: "website" })
        if (!email)    return fail(400, { message: "Email is required", success: false, error: "email" })
        if (!password) return fail(400, { message: "Password is required", success: false, error: "password" })
        if (!category) return fail(400, { message: "Category is required", success: false, error: "category" })

        const session = await getSession()

        const userId = session!.user.id
        
        const categoryId = await supabase.from("category").select("id").eq("user_id", userId).eq("name", category)

        // password encryption here Ripper
        const secret = await supabase.from("user_master").select("password, iv").eq("user_id", userId)

        // we know for a fact that there is a secret or else the hooks would trigger a redirect so no need to add any
        // conditions for that here.
        //

        // secret = symmetric key so idk but do your thing here
        //
        // encrypted should be the now encrypted password

        const key = secret!.data![0].password
        const iv = secret!.data![0].iv

        const encryptedPassword = aes256Encrypt(Buffer.from(key, "hex"), Buffer.from(iv, "base64"), password)
        const encryptedEmail = aes256Encrypt(Buffer.from(key, "hex"), Buffer.from(iv, "base64"), email)

        const { error } = await supabase.from("credentials")
                    .insert({ user_id: userId, email: encryptedEmail, password: encryptedPassword, personal_note, website, category: categoryId.data![0].id })
        
        if (error) {
            console.error(error.code, error)
            return fail(400, { message: error.message, success: false, error: "supabase" })
        }

        return { message: "Successfuly created credential!", success: true }
    }
}