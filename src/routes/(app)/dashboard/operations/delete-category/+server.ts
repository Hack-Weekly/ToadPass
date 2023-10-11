import type { RequestHandler } from "@sveltejs/kit";
import { redirect } from "@sveltejs/kit";

// not restful

export const GET: RequestHandler = async ({ locals: { supabase, getSession }, url }) => {
  const categoryId = url.searchParams.get("catId")
  const session = await getSession()

  const userId = session?.user.id
  const { error } = await supabase.from("category").delete().eq("user_id", userId).eq("id", categoryId)
  
  if (error) console.error(error)
  
  throw redirect(302, "/dashboard")
}