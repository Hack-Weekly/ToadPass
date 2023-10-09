import { fail, redirect } from "@sveltejs/kit"
import type { Actions } from "@sveltejs/kit"

export const actions: Actions = {
    default: async ({ request, locals: { supabase, getSession } }) => {
        const formData = await request.formData()
        const type = formData.get("type") as string
        
        // Since layout and page both use the same endpoint, we need to check what is being submitted (done by hidden input)
        if (type == "type_category") {
            const category = formData.get("category") as string
            if (!category) return fail(400, { message: "Please provide a name for the category", success: false, error: "category" })
            const session = await getSession()
            const userId = session!.user.id

            const { error } = await supabase.from("category").insert({ user_id: userId, category })

            if (error) {
                console.log(error)
                // Column 'category' of relation 'category' does not exist
                if(error.code == "PGRST204") return fail(400, { message: "Failed creating category. Try again later!", success: false, error: "supabase" })
                return fail(400, { message: error.message, success: false, error: "supabase" })
            }

            return { message: "Category created successfully", success: true }
        }

        if (type == "type_password") {
            // insert password and details here
        }
        
    }
}