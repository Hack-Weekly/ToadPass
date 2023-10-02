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
  if (event.url.pathname.startsWith("/dashboard")) {
    const session = await event.locals.getSession()
    // it should be 404 I feel like, but I cannot use 404 so this will do
    console.log(session)
    if (!session) throw redirect(303, "/auth/sign-up")
  }

  /// ----> END

  return resolve(event, {
    filterSerializedResponseHeaders(name) {
      return name === 'content-range'
    },
  })
}
