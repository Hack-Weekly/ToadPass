// src/hooks.server.ts
import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY } from '$env/static/public'
import { createSupabaseServerClient } from '@supabase/auth-helpers-sveltekit'
import { redirect, type Handle } from '@sveltejs/kit'

export const handle: Handle = async ({ event, resolve }) => {
  event.locals.supabase = createSupabaseServerClient({
    supabaseUrl: PUBLIC_SUPABASE_URL,
    supabaseKey: PUBLIC_SUPABASE_ANON_KEY,
    event,
  })

  /**
   * a little helper that is written for convenience so that instead
   * of calling `const { data: { session } } = await supabase.auth.getSession()`
   * you just call this `await getSession()`
   */

  /**
   * a little helper that is written for convenience so that instead
   * of calling `const { data: { session } } = await supabase.auth.getSession()`
   * you just call this `await getSession()`
   */
  event.locals.getSession = async () => {
    const {
      data: { session },
    } = await event.locals.supabase.auth.getSession()
    return session
  }

  // route protection logic
  if (event.url.pathname.startsWith("/auth/sign-up") || event.url.pathname.startsWith("/auth/sign-in")) {
    const session = await event.locals.getSession()
    if (session) throw redirect (303, "/dashboard")
  }
  
  /// protected routes here
  if (event.url.pathname.startsWith("/auth/set-secret")) {
    const session = await event.locals.getSession()
    if (!session) throw redirect(303, "/auth/sign-up")

    const userId = session.user.id
    const { data: secret } = await event.locals.supabase.from("user_master").select("password").eq("user_id", userId)
    if (secret instanceof Array && secret[0]) throw redirect(303, "/dashboard")
  }

  // logic for dashboard

  if (event.url.pathname.startsWith("/dashboard")) {
    const session = await event.locals.getSession()
    if (!session) throw redirect(303, "/auth/sign-up")

    const userId = session.user.id
    const { data: secret } = await event.locals.supabase.from("user_master").select("password").eq("user_id", userId)
    // checking if user has a secret set before we allow him to perform operations within the
    // dashboard
    //
    
    if (secret instanceof Array && !secret[0]) throw redirect(303, "/auth/set-secret")
  }

  /// ----> END

  return resolve(event, {
    filterSerializedResponseHeaders(name) {
      return name === 'content-range'
    },
  })
}
