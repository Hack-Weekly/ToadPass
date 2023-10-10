import crypto from "node:crypto"
import { fail, error, redirect } from "@sveltejs/kit";
import type { Actions } from "@sveltejs/kit";

const derivedKey = (key: string) => {
  const salt = Buffer.from("Hessel_is_gae")
  const keyLength = 32

  // Derive the AES encryption key using PBKDF2
  const derived = crypto.pbkdf2Sync(key, salt, 100000, keyLength, "sha256");
  return derived
}

const aes256Encrypt = (key: Buffer, plainText: string) => {
  console.log(plainText)
  const intializationVector = crypto.randomBytes(16)
  const cipher = crypto.createCipheriv("aes-256-cbc", key, intializationVector)
  let encrypted = cipher.update(plainText, "utf-8", "hex")

  encrypted += cipher.final("hex")

  console.log(encrypted)

  return encrypted
}

export const actions: Actions = {
  default: async ({ request, locals: { supabase, getSession } }) => {
    // email and password are to be encrypted
    const { email, password, personal_note, website, category } = Object.fromEntries(await request.formData()) as Record<string, string>
    
    const session = await getSession()

    const userId = session!.user.id
    
    // password encryption here Ripper
    const secret = await supabase.from("user_master").select("password").eq("user_id", userId)

    // we know for a fact that there is a secret or else the hooks would trigger a redirect so no need to add any
    // conditions for that here.
    //

    // secret = symmetric key so idk but do your thing here
    //
    // encrypted should be the now encrypted password

    const secretData = secret!.data![0].password
    const key = derivedKey(secretData)
    const encryptedPassword = aes256Encrypt(key, password)
    const encryptedEmail = aes256Encrypt(key, email)

    const { error } = await supabase.from("credentials")
                  .insert({ user_id: userId, email: encryptedEmail, password: encryptedPassword, personal_note, website, category: "Social" })
    
    if (error) {
      console.error(error.code, error)
      return fail(400, { message: error.message, success: false, error: "supabase" })
    }
    
    // on success redirect the user from form, back to his dashboard

    throw redirect(302, "/dashboard")
  }
}
