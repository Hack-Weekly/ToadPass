import { aes256Encrypt } from "../crypto";
import { fail, error, redirect } from "@sveltejs/kit";
import type { Actions } from "@sveltejs/kit";

export const actions: Actions = {
  default: async ({ request, locals: { supabase, getSession } }) => {
    
    
    // on success redirect the user from form, back to his dashboard

    throw redirect(302, "/dashboard")
  }
}
