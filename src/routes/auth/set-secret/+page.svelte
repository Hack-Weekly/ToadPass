<script lang="ts">
    import { enhance } from "$app/forms";
    import { page } from '$app/stores';
    import Password from "$lib/assets/password.svg";
</script>

<section class="container mx-auto max-w-full lg:max-w-[90rem]">
    <div class="flex justify-between items-center gap-12 lg:gap-24 mt-12 min-w-full px-6 lg:px-0">
        <img src={Password} alt="password_illustration" class="hidden lg:block w-full lg:w-1/3 h-auto object-cover">
        <div class="flex flex-col justify-start items-center my-24">
            <h1 class="text-primary font-bold text-5xl mr-auto">Create a Master Password</h1>
            <p class="font-semibold text-[#D97700] text-lg w-3/4 text-left mr-auto mt-6">
                For an additional layer of security, we ask you to enter a Master Password. 
                This will be the primary key to access your saved passwords. 
                Be sure to choose a strong password and store it in a secure place.
            </p>
            {#if $page.form?.error}
            <div role="alert" class="rounded border-s-4 border-red-500 bg-red-50 p-4 mr-auto mt-6 w-full">
                <strong class="block font-medium text-red-800 text-lg"> Something went wrong </strong>
                <p class="mt-2 text-sm text-red-700 text-md">
                    {$page.form.message}
                </p>
            </div>
            {/if}
            <form method="POST" use:enhance class="flex flex-col justify-start items-center w-full mt-8 space-y-6">
                <div class="flex flex-col w-full gap-y-3">
                    <label class="text-primary font-semibold text-xl mr-auto" for="secret">Master Password</label>
                    <input class="bg-white text-primary text-xl w-full p-4 rounded-lg border border-gray-300 outline-none focus:ring-0 mr-auto" type="password" name="secret" id="secret" placeholder="Enter master password">
                </div>
                <div class="flex flex-col w-full gap-y-3">
                    <label class="text-primary font-semibold text-xl mr-auto" for="secret">Repeat Master Password</label>
                    <input class="bg-white text-primary text-xl w-full p-4 rounded-lg border border-gray-300 outline-none focus:ring-0 mr-auto" type="password" name="verify_secret" id="verify_secret" placeholder="Repeat master password">
                </div>
                <button type="submit" class="bg-primary text-white text-xl mt-6 px-8 py-4 rounded-lg ml-auto">Save</button>
            </form>
        </div>
    </div>
</section>