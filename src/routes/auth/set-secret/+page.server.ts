import bcrypt from "bcrypt"
import crypto from "crypto"
import { initVector } from "$lib/server/crypto"
import { fail, redirect } from "@sveltejs/kit"
import type { Actions } from "@sveltejs/kit"

// So UI guys I know deadline is literally tomorrow but here is the deal,
// basically what we should do is make it so that the user CANNOT create any passwords
// until he sets a master password on this page. Now you may be asking yourself but why?
// well since we need to ensure that the user sets this for the symmetric encryption
// encryption process we should do it this way.

// Only after the user sets the master will he be able to create passwords and what not
// the user should be noticed of the importance of this, so im sorry this is late but
// I hope we can do this.

const derivedKey = (key: string) => {
  const salt = Buffer.from("Hessel_is_gae")
  const keyLength = 32

  // Derive the AES encryption key using PBKDF2
  const derived = crypto.pbkdf2Sync(key, salt, 100000, keyLength, "sha256");
  return derived.toString("hex")
}

export const actions: Actions = {
  default: async ({ request, locals: { supabase, getSession } }) => {
    // secret is very important frontend team should ensure that the user knows this
    // it will be "master" we had planned
    const formData = await request.formData()
    const secret = formData.get("secret") as string
    const verifySecret = formData.get("verify_secret") as string

    let uppercase: Boolean = false
    let number: Boolean = false
    for (let i = 0; i < secret.length; i++) {
        if(secret[i] === " ") return fail(400, { message: "Master password cannot contain spaces" })

        if (secret[i] === secret[i].toUpperCase()) {
            uppercase = true;
        }
        if (!isNaN(parseInt(secret[i]))) {
            number = true;
        }
    }

    if (!uppercase) return fail(400, { message: "Master password must contain at least one uppercase character", success: false, error: "password" });
    if (!number) return fail(400, { message: "Master password must contain at least one number", success: false, error: "password" });
    if (secret.length < 8) return fail(400, { message: "Master password must be at least 8 characters long", success: false, error: "password" });
    if (secret !== verifySecret) return fail(400, { message: "Master passwords do not match", success: false, error: "matching_passwords" } )
    const salt = 12

    const secretHash = bcrypt.hashSync(secret, salt)

    const session = await getSession()
    const userId = session!.user.id

    const { error } = await supabase.from("user_master").insert({
      password: derivedKey(secretHash), iv: initVector(), user_id: userId
    })

    if (error) {
      console.log(error.code)
      // 42501 is RLS (row level security) error code
      if (error.code == "42501") return fail(400, { message: "Failed creating master password. Try again later!", success: false, error: "supabase" }  )

      return fail(400, { message: error.message, success: false, error: "supabase" }  )
    }
    
    throw redirect(303, "/dashboard")

  }
}
