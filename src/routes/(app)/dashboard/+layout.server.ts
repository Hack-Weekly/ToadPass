import { redirect } from "@sveltejs/kit"
import type { LayoutServerLoad } from './$types';


export const load: LayoutServerLoad = async ({ locals: { supabase, getSession } }) => {
    const session = await getSession()
    

    if (!session) {
        throw redirect(303, '/')
    }

    const { data } = await supabase.from('profiles').select('user_id, username, avatar').eq('user_id', session.user.id)
    let user;
    if (data) {
        user = {
            email: session.user.email,
            user_id: session.user.id,
            username: data[0].username,
            avatar: data[0].avatar
        }
    }
    const { data: categories } = await supabase.from('category').select('id, user_id, name').eq('user_id', session.user.id)

    return { user, categories }
}
