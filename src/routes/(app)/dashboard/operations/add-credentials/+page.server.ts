import { aes256Encrypt } from "../crypto";
import { fail, error, redirect } from "@sveltejs/kit";
import type { Actions } from "@sveltejs/kit";

export const actions: Actions = {
  default: async ({ request, locals: { supabase, getSession } }) => {
    // email and password are to be encrypted
    const { email, password, personal_note, website, category } = Object.fromEntries(await request.formData()) as Record<string, string>
    
    const session = await getSession()

    const userId = session!.user.id
    
    // password encryption here Ripper
    const secret = await supabase.from("user_master").select("password").eq("user_id", userId)

    // we know for a fact that there is a secret or else the hooks would trigger a redirect so no need to add any
    // conditions for that here.
    //

    // secret = symmetric key so idk but do your thing here
    //
    // encrypted should be the now encrypted password

    const key = secret!.data![0].password
    console.log(key)
    const encryptedPassword = aes256Encrypt(Buffer.from(key, "hex"), password)
    const encryptedEmail = aes256Encrypt(Buffer.from(key, "hex"), email)

    const { error } = await supabase.from("credentials")
                  .insert({ user_id: userId, email: encryptedEmail, password: encryptedPassword, personal_note, website, category: "09501080-113a-4641-9cfb-7ec9679e2656" })
    
    if (error) {
      console.error(error.code, error)
      return fail(400, { message: error.message, success: false, error: "supabase" })
    }
    
    // on success redirect the user from form, back to his dashboard

    throw redirect(302, "/dashboard")
  }
}
