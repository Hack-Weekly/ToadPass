import { fail, error } from "@sveltejs/kit";
import type { Actions } from "./$types";

export const actions: Actions = {
  default: async ({ locals: { supabase }, request, url }) => {

    // returns a transformed object which expects
    // each key, value to be a string. Hence Record<string, string> with the "as" keyword we are telling the compiler
    // that we know that each key + value will be a string
    const { email, password, confirm_password } = Object.fromEntries(await request.formData()) as Record<string, string>
    if (!email) return fail(400, { message: 'Email is required', error: 'email' });
    if (!password) return fail(400, { message: "Password is required", error: "password" })
    if (!confirm_password) return fail(400, { message: "Password must be confirmed", error: "confirm_password" })

    let uppercase: Boolean = false
    let number: Boolean = false
    for(let i = 0; i < password.length; i++) {
        if(password[i] === " ") return fail(400, { message: "Password cannot contain spaces" })

        if (password[i] === password[i].toUpperCase()) {
            uppercase = true;
        }
        if (!isNaN(parseInt(password[i]))) {
            number = true;
        }
    }
    if (!uppercase) return fail(400, { message: "Password must contain at least one uppercase character", error: "password" });
    if (!number) return fail(400, { message: "Password must contain at least one number", error: "password" });
    if (password.length < 8) return fail(400, { message: "Password must be at least 8 characters long", error: "password" });
    if (password !== confirm_password) return fail(400, { message: "Passwords do not match", error: "confirm_password" })

    const { error: err } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${url.origin}/auth/callback`,
      }
    })
    if (err) {
      return fail(err.status as number, { message: err.message, success: false, email, error: "supabase" })
    }
    console.log("Success")
    return { message: "Successfuly signed up! Please verify your email and click on the magic link to confirm account creation", success: true }
  }
}