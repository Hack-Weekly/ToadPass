import { fail } from "@sveltejs/kit";
import type { Actions } from "./$types";

export const actions: Actions = {
  default: async ({ locals: { supabase }, request, url }) => {

    // returns a transformed object which expects
    // each key, value to be a string. Hence Record<string, string> with the "as" keyword we are telling the compiler
    // that we know that each key + value will be a string
    const { email, password } = Object.fromEntries(await request.formData()) as Record<string, string>
    console.log(email, password)
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${url.origin}/auth/callback`,
      }
    })

    if (error) {
      return fail(error.status as number, { message: error.message, success: false, email })
    }
    console.log("Success")
    return { message: "Successfuly signed up! Please verify your email and click on the magic link to confirm account creation", success: true }
  }
}
