import { error } from "@sveltejs/kit";
import type { RequestHandler } from "@sveltejs/kit";

export const GET: RequestHandler = async ({ locals: { supabase, getSession } }) => {
  const session = await getSession()

  const userId = session!.user.id
  const credentials = await supabase.from("credentials").select("*").eq("user_id", userId)
  
  if (!credentials) throw error(500, { message: "Something went wrong retrieving your credentials!" })
  
  // So now ripper with the retrieved credentials run the decryption process, below i will
  // pull the master key that you can use to accomplish this.

  const secret = await supabase.from("user_master").select("password").eq("user_id", userId)
  


  return new Response("Return credentials here in json format")
}
