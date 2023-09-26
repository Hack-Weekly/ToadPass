import { fail, redirect } from "@sveltejs/kit";
import type { Actions } from "./$types";

export const actions: Actions = {
  default: async ({ locals: { supabase }, request }) => {
    const { email, password } = Object.fromEntries(await request.formData()) as Record<string, string>

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password
    })

    if (error) {
      return fail(error.status as number, { message: error.message, success: false, email })
    }

    console.log("Signed In User!")


    throw redirect(303, "/dashboard")
  }
}
