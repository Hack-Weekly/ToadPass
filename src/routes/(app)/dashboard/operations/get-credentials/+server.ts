import { aes256Decrypt } from "$lib/server/crypto";
import { error, json } from "@sveltejs/kit";
import type { RequestHandler } from "@sveltejs/kit";

const iterateOverSelected = (key: string, iv: string, values: any): any => {
  for (const credential of values) {
    const plainTextEmail = aes256Decrypt(Buffer.from(key, "hex"), Buffer.from(iv, "base64"), credential.email)
    const plainTextPassword = aes256Decrypt(Buffer.from(key, "hex"), Buffer.from(iv, "base64"), credential.password)

    credential.email = plainTextEmail
    credential.password = plainTextPassword
  }

  return values
}

export const GET: RequestHandler = async ({ locals: { supabase, getSession }, url }) => {
  const session = await getSession()

  const userId = session!.user.id
  const credentials = await supabase.from("credentials").select("*").eq("user_id", userId)
  
  if (!credentials) throw error(500, { message: "Something went wrong retrieving your credentials!" })
  
  // So now ripper with the retrieved credentials run the decryption process, below i will
  // pull the master key that you can use to accomplish this.

  const secret = await supabase.from("user_master").select("password, iv").eq("user_id", userId)
  const key = secret!.data![0].password
  const iv = secret!.data![0].iv
  const categoryId = url.searchParams.get("cat")

  if (categoryId && categoryId !== "none") {
    const { error: err, data: values } = await supabase.from("credentials").select("*").eq("user_id", userId).eq("category", categoryId)

    if (err) return json({ error: err.message })

    const data = iterateOverSelected(key, iv, values)
    return json({ data })
  }

  // --- > if category is not specified

  const { error: err, data: values } = await supabase.from("credentials").select("*").eq("user_id", userId)

    if (err) return json({ error: err.message })

    const data = iterateOverSelected(key, iv, values)
    return json({ data })
}
