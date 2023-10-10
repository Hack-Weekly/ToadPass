import crypto from "crypto"
import { error } from "@sveltejs/kit";
import type { RequestHandler } from "@sveltejs/kit";

const derivedKey = (key: string) => {
  const salt = Buffer.from("Hessel_is_gae")
  const keyLength = 32

  const derived = crypto.pbkdf2Sync(key, salt, 100000, keyLength, "sha256");
  return derived
}

const aes256Decrypt = (key: Buffer, cipherText: string) => {
  const initializationVector = crypto.randomBytes(16)
  const decipher = crypto.createDecipheriv("aes-256-cbc", key, initializationVector)

  let decrypted = decipher.update(cipherText, "hex", "utf-8")

  decrypted += decipher.final("utf-8")

  console.log(decrypted)
}

export const GET: RequestHandler = async ({ locals: { supabase, getSession } }) => {
  const session = await getSession()

  const userId = session!.user.id
  const credentials = await supabase.from("credentials").select("*").eq("user_id", userId)
  
  if (!credentials) throw error(500, { message: "Something went wrong retrieving your credentials!" })
  
  // So now ripper with the retrieved credentials run the decryption process, below i will
  // pull the master key that you can use to accomplish this.

  const secret = await supabase.from("user_master").select("password").eq("user_id", userId)
  const secretData = secret!.data![0].password

  const key = derivedKey(secretData)

  await supabase.from("credentials").select("*").eq("user_id", userId)  

  return new Response("Return credentials here in json format")
}
