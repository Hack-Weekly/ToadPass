import bcrypt from "bcrypt"
import { fail } from "@sveltejs/kit"
import type { Actions } from "@sveltejs/kit"

// So UI guys I know deadline is literally tomorrow but here is the deal,
// basically what we should do is make it so that the user CANNOT create any passwords
// until he sets a master password on this page. Now you may be asking yourself but why?
// well since we need to ensure that the user sets this for the symmetric encryption
// encryption process we should do it this way.

// Only after the user sets the master will he be able to create passwords and what not
// the user should be noticed of the importance of this, so im sorry this is late but
// I hope we can do this.

export const actions: Actions = {
  default: async ({ request, locals: { supabase, getSession } }) => {
    // secret is very important frontend team should ensure that the user knows this
    // it will be "master" we had planned
    const formData = await request.formData()
    const secret = formData.get("secret") as string

    const salt = 12

    const secretHash = bcrypt.hashSync(secret, salt)

    const session = await getSession()
    const userId = session!.user.id

    const { error } = await supabase.from("user_master").insert({
      password: secretHash, user_id: userId
    })

    if (error) {
      console.log(error.code)
      return fail(400, { message: error.message, success: false, error: "supabase" }  )
    }
  }
}
