import { redirect } from '@sveltejs/kit'
import type { RequestHandler } from '@sveltejs/kit'

export const GET: RequestHandler = async ({ locals: { supabase, getSession } }) => {
  const session = await getSession()
  
  // check wether the user has an active session before triggering a supabase method
  if (session) {
    const { error } = await supabase.auth.signOut()
    if (!error) {
      console.log("Successfully Signed Out User!")
      throw redirect(303, "/")
    }
    // if there is an error log it
    console.error(`Sign out error: ${error}`)
  }

  throw redirect(303, "/")
}

