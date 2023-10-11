import type { RequestHandler } from "@sveltejs/kit";
import { redirect } from "@sveltejs/kit";

// not restful
export const GET: RequestHandler = async ({ locals: { supabase, getSession }, url }) => {
  const credentialId = url.searchParams.get("credId")
  
  const session = await getSession()

  const userId = session?.user.id

  const { error } = await supabase.from("credentials").delete().eq("user_id", userId).eq("id", credentialId)
  
  if (error) console.error(error)
  
  throw redirect(302, "/dashboard")
}