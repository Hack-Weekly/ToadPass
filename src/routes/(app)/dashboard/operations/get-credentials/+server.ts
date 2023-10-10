import { aes256Decrypt } from "../crypto";
import { error, json } from "@sveltejs/kit";
import type { RequestHandler } from "@sveltejs/kit";

export const GET: RequestHandler = async ({ locals: { supabase, getSession } }) => {
  const session = await getSession()

  const userId = session!.user.id
  const credentials = await supabase.from("credentials").select("*").eq("user_id", userId)
  
  if (!credentials) throw error(500, { message: "Something went wrong retrieving your credentials!" })
  
  // So now ripper with the retrieved credentials run the decryption process, below i will
  // pull the master key that you can use to accomplish this.

  const secret = await supabase.from("user_master").select("password").eq("user_id", userId)
  const key = secret!.data![0].password

  const values = await supabase.from("credentials").select("*").eq("user_id", userId)  

  if (values.data) {
    for (const credential of values.data) {
      const plainTextEmail = aes256Decrypt(Buffer.from(key, "hex"), credential.email)
      const plainTextPassword = aes256Decrypt(Buffer.from(key, "hex"), credential.password)

      credential.email = plainTextEmail
      credential.password = plainTextPassword
    }
    return json({ data: values.data})
  }
  console.log(values)

  return new Response(null)
}
