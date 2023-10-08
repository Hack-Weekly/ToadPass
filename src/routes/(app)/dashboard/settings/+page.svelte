<script lang="ts">
    import { page } from "$app/stores";
    import { enhance } from "$app/forms";

    import type { IUser } from '$lib/types/user.d.ts'

    export let data;
    let user: IUser;
    if (data.user) {
        // @ts-ignore
        user = data.user;
    }

</script>
<div class="container mx-auto mt-[5.5rem]">
    <div class="mx-auto">
        <form class="flex flex-wrap mt-6 -m-2 mb-0" method="POST" use:enhance>
            <div class="w-full p-2">
                <label class="block">
                    <span class="inline-block mb-2 font-bold">Email:</span>
                    <input
                        class="p-4 w-full bg-white placeholder-primary placeholder-opacity-70 outline-none border border-gray-300 rounded-lg focus:border-primary transition duration-200"
                        id="email"
                        type="email"
                        name="email"
                        value="{user.email}"
                        placeholder="johndoe@gmail.com"
                    />
                </label>
            </div>
            <div class="w-full p-2">
                <label class="block">
                    <span class="inline-block mb-2 font-bold">Username:</span>
                    <input
                        class="p-4 w-full bg-white placeholder-primary placeholder-opacity-70 outline-none border border-gray-300 rounded-lg focus:border-primary transition duration-200"
                        id="username"
                        type="text"
                        name="username"
                        value="{user.username}"
                        placeholder="johndoe"
                    />
                </label>
            </div>
            <div class="w-full p-2">
                <label class="block">
                    <span class="inline-block mb-2 font-bold">Password:</span>
                    <input
                        class="p-4 w-full bg-white placeholder-gray-500 outline-none border border-gray-300 rounded-lg focus:border-primary transition duration-200"
                        id="password"
                        type="password"
                        name="password"
                        placeholder="******************"
                    />
                </label>
            </div>
            <div class="w-full p-2">
                <label class="block">
                    <span class="inline-block mb-2 font-bold">Repeat password:</span>
                    <input
                        class="p-4 w-full bg-white placeholder-gray-500 outline-none border border-gray-300 rounded-lg focus:border-primary transition duration-200"
                        id="confirm_password"
                        type="password"
                        name="confirm_password"
                        placeholder="Password"
                    />
                </label>
            </div>
            
            <div class="flex items-center justify-end w-full lg:w-1/3 p-2">
                <button
                    type="button"
                    class="tracking-widest inline-block mb-3 px-5 py-2.5 lg:w-3/6 text-white text-center font-semibold bg-red-500 hover:bg-opacity-90 rounded-lg focus:ring-0 transition duration-200">
                    Delete
                </button>
                <button
                    type="submit"
                    class="tracking-widest inline-block mb-3 px-5 py-2.5 lg:w-3/6 text-white text-center font-semibold bg-primary hover:bg-opacity-90 rounded-lg focus:ring-0 transition duration-200"
                >
                    Update
                </button>
                
            </div>
        </form>
    </div>
</div>  