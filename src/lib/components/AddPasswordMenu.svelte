<script lang="ts">
    import { page } from "$app/stores";
    import { createEventDispatcher } from 'svelte'
    export let showRightMenu: Boolean
    export let categories: Array<string>
    const dispatch = createEventDispatcher()
    function close () {
        dispatch('close')
    }
</script>
<aside id="separator-sidebar" class="{showRightMenu ? 'fixed top-0 right-0 z-50 w-96 h-screen border-l border-gray-50 transition-transform -translate-x-full sm:translate-x-0' : 'hidden w-0'}" aria-label="Sidebar">    
    <div class="h-full py-4 overflow-y-auto shadow-lg bg-white/90">
           
        
        <form method="POST" action="?/password" class="ml-6 mt-12 space-y-3">   
            <input type="hidden" name="type" value="type_password"/>
            <div class="flex flex-col gap-2 pr-2">
                <label for="website" class="text-md font-semibold text-primary">Website</label>
                <input type="text" name="website" id="default-search" class="bg-white text-primary text-md w-[90%] py-2.5 px-3 rounded-lg border border-gray-300 outline-none focus:ring-0" placeholder="Enter an URL">
                {#if $page.form?.error == 'website'}
                    <small class="text-red-500 text-sm ml-1">{$page.form?.message}</small>
                {/if}
            </div>
            <div class="flex flex-col gap-2">
                <label for="email" class="text-md font-semibold text-primary">Email</label>
                <input type="text" name="email" id="email" class="bg-white text-primary text-md w-[90%] py-2.5 px-3 rounded-lg border border-gray-300 outline-none focus:ring-0" placeholder="Enter your email">
                {#if $page.form?.error == 'email'}
                    <small class="text-red-500 text-sm ml-1">{$page.form?.message}</small>
                {/if}
            </div>
            <div class="flex flex-col gap-2">
                <label for="password" class="text-md font-semibold text-primary">Password</label>
                <input type="password" name="password" id="password" class="bg-white text-primary text-md w-[90%] py-2.5 px-3 rounded-lg border border-gray-300 outline-none focus:ring-0" placeholder="Enter your password">
                {#if $page.form?.error == 'password'}
                    <small class="text-red-500 text-sm ml-1">{$page.form?.message}</small>
                {/if}
            </div>
            <div class="flex flex-col gap-2">
                <label for="category" class="text-md font-semibold text-primary">Category</label>
                <select name="category" id="category" class="bg-white text-primary text-md w-[90%] py-2.5 px-3 rounded-lg border border-gray-300 outline-none focus:ring-0">
                    {#if categories.length === 0}
                        <option disabled selected value="No categories">You don't have any categories</option>
                    {:else}
                        <option disabled value="No categories">Select a category</option>
                        {#each categories as category}
                            <option value={category.name}>{category.name}</option>
                        {/each}
                    {/if}
                </select>
                {#if $page.form?.error == 'category'}
                    <small class="text-red-500 text-sm ml-1">{$page.form?.message}</small>
                {/if}
            </div>
            <div class="flex flex-col gap-2">
                <label for="personal_note" class="text-md font-semibold text-primary">Personal note</label>
                <input type="text" name="personal_note" id="personal_note" class="bg-white text-primary text-md w-[90%] py-2.5 px-3 rounded-lg border border-gray-300 outline-none focus:ring-0" placeholder="Enter a personal note">
            </div>
            <div class="px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 mr-3">
                <button type="submit" class="inline-flex w-full justify-center rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-opacity-90 transition ease-in-out duration-150 sm:ml-3 sm:w-auto">Create</button>
                <button on:click={() => close()} type="button" class="mt-3 inline-flex w-full justify-center rounded-md bg-[#E8F0FF] px-3 py-2 text-sm font-semibold text-primary shadow-sm hover:bg-opacity-90 transition ease-in-out duration-150 sm:mt-0 sm:w-auto">Cancel</button>
            </div>
        </form> 
    </div>
 </aside>