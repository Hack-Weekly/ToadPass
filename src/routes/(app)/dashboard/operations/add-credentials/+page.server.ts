import { fail, error } from "@sveltejs/kit";
import type { Actions } from "@sveltejs/kit";

export const actions: Actions = {
  default: async ({ request, locals: { supabase, getSession } }) => {
    // email and password are to be encrypted
    const { email, password, personal_note, website } = Object.fromEntries(await request.formData()) as Record<string, string>
    
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
    const encryptedPassword = ""
    const encryptedEmail = ""

    const { error } = await supabase.from("credentials")
                  .insert({ user_id: userId, email: encryptedEmail, password: encryptedPassword, personal_note, website })
    
    if (error) {
      console.error(error.code, error.details)
      throw fail(400, { message: error.message, success: false, error: "supabase" })
    }

  }
}
