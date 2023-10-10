<script lang="ts">
    import { page } from "$app/stores";
    import { enhance } from "$app/forms";
    import type { IUser } from '$lib/types/user.d.ts'
    import type { LayoutData } from './$types';
    import AddPasswordMenu from "$lib/components/AddPasswordMenu.svelte";
    export let data: LayoutData;
    let user: IUser;
    let categories: Array<string>;
    if (data.user) {
        // @ts-ignore
        user = data.user;
    }
    if (data.categories) {
        // @ts-ignore
        categories = data.categories;
    }
    let modal = false
    let showMenu = false
    let showRightMenu = false
</script>

<button data-drawer-target="separator-sidebar" data-drawer-toggle="separator-sidebar" aria-controls="separator-sidebar" type="button" class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-primary rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200  dark:hover:bg-gray-700 dark:focus:ring-gray-600">
    <span class="sr-only">Open sidebar</span>
    <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
       <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
    </svg>
 </button>
 
 <aside id="separator-sidebar" class="fixed top-0 left-0 z-40 w-80 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
    <div class="h-full py-4 overflow-y-auto bg-light">
        <form class="ml-6">   
            <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div class="relative mt-3">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg class="w-3.5 h-3.5 text-primary" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                </div>
                <input type="search" id="default-search" class="block w-full p-4 pl-10 text-sm text-primary rounded-lg bg-transparent placeholder-[#34495E] placeholder-opacity-50 focus:ring-0 outline-none" placeholder="Search in ToadPass">
            </div>
        </form>
        <ul class="space-y-2 font-medium mt-6">
            <li class="bg-white py-1">
                <a href="/dashboard" class="flex items-center p-2 ml-6  rounded-lg group">
                    <svg width="14" height="16" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.66667 2.74999C9.246 2.74999 10.5417 4.04566 10.5417 5.625V8.5H4.79167V5.625C4.79167 4.04566 6.08733 2.74999 7.66667 2.74999ZM12.4583 8.5V5.625C12.4583 2.98766 10.304 0.833328 7.66667 0.833328C5.02933 0.833328 2.875 2.98766 2.875 5.625V8.5H1.91667C1.40833 8.5 0.920823 8.70193 0.561379 9.06137C0.201934 9.42082 0 9.90833 0 10.4167V18.0833C0 18.5917 0.201934 19.0792 0.561379 19.4386C0.920823 19.7981 1.40833 20 1.91667 20H13.4167C13.925 20 14.4125 19.7981 14.772 19.4386C15.1314 19.0792 15.3333 18.5917 15.3333 18.0833V10.4167C15.3333 9.90833 15.1314 9.42082 14.772 9.06137C14.4125 8.70193 13.925 8.5 13.4167 8.5H12.4583ZM1.91667 10.4167H13.4167V18.0833H1.91667V10.4167Z" fill="#34495E"/>
                    </svg>
                    <span class="ml-3 text-md text-primary">Passwords</span>
                </a>
            </li>
            <li class="py-1">
                <a href="/dashboard" class="flex items-center p-2 ml-6  rounded-lg group">
                    <svg width="14" height="16" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 16H6.1L12.1 10.05L9.95 7.9L4 13.85V16ZM12.8 9.35L13.85 8.25C13.95 8.15 14 8.03333 14 7.9C14 7.76667 13.95 7.65 13.85 7.55L12.45 6.15C12.35 6.05 12.2333 6 12.1 6C11.9667 6 11.85 6.05 11.75 6.15L10.65 7.2L12.8 9.35ZM2 20C1.45 20 0.979002 19.804 0.587002 19.412C0.195002 19.02 -0.000664969 18.5493 1.69779e-06 18V4C1.69779e-06 3.45 0.196002 2.979 0.588002 2.587C0.980002 2.195 1.45067 1.99933 2 2H6.2C6.41667 1.4 6.77934 0.916667 7.288 0.55C7.79667 0.183333 8.36734 0 9 0C9.63334 0 10.2043 0.183333 10.713 0.55C11.2217 0.916667 11.584 1.4 11.8 2H16C16.55 2 17.021 2.196 17.413 2.588C17.805 2.98 18.0007 3.45067 18 4V18C18 18.55 17.804 19.021 17.412 19.413C17.02 19.805 16.5493 20.0007 16 20H2ZM2 18H16V4H2V18ZM9 3.25C9.21667 3.25 9.39567 3.179 9.537 3.037C9.67834 2.895 9.74934 2.716 9.75 2.5C9.75 2.28333 9.679 2.10433 9.537 1.963C9.395 1.82167 9.216 1.75067 9 1.75C8.78334 1.75 8.60434 1.821 8.463 1.963C8.32167 2.105 8.25067 2.284 8.25 2.5C8.25 2.71667 8.321 2.89567 8.463 3.037C8.605 3.17833 8.784 3.24933 9 3.25Z" fill="#34495E"/>
                    </svg>                    
                    <span class="ml-3 text-md text-primary">Safe Notes</span>
                </a>
            </li>
            <li class="py-1">
                <a href="/dashboard" class="flex items-center p-2 ml-6  rounded-lg group">
                    <svg width="19" height="19" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 0C15.0609 0 16.0783 0.421427 16.8284 1.17157C17.5786 1.92172 18 2.93913 18 4C18 5.06087 17.5786 6.07828 16.8284 6.82843C16.0783 7.57857 15.0609 8 14 8C12.9391 8 11.9217 7.57857 11.1716 6.82843C10.4214 6.07828 10 5.06087 10 4C10 2.93913 10.4214 1.92172 11.1716 1.17157C11.9217 0.421427 12.9391 0 14 0ZM14 1.9C13.443 1.9 12.9089 2.12125 12.5151 2.51508C12.1212 2.9089 11.9 3.44305 11.9 4C11.9 4.55695 12.1212 5.0911 12.5151 5.48492C12.9089 5.87875 13.443 6.1 14 6.1C14.557 6.1 15.0911 5.87875 15.4849 5.48492C15.8788 5.0911 16.1 4.55695 16.1 4C16.1 3.44305 15.8788 2.9089 15.4849 2.51508C15.0911 2.12125 14.557 1.9 14 1.9ZM14 9C16.67 9 22 10.33 22 13V16H6V13C6 10.33 11.33 9 14 9ZM14 10.9C11 10.9 7.9 12.36 7.9 13V14.1H20.1V13C20.1 12.36 16.97 10.9 14 10.9ZM4 9.28L1.5 10.77L2.18 7.96L0 6.08L2.87 5.83L4 3.19L5.11 5.83L8 6.08L5.8 7.96L6.45 10.77L4 9.28Z" fill="#34495E"/>
                    </svg>                               
                <span class="ml-3 text-md text-primary">Personal data</span>
                </a>
            </li>
       </ul>
       <div class="flex items-center justify-between p-2 ml-6 mt-10">
            <span class="text-sm font-medium text-[#34495E] text-opacity-50">CATEGORIES</span>
            <svg on:click={() => modal = !modal} class="mr-6 cursor-pointer" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 12.998H13V17.998C13 18.2632 12.8946 18.5176 12.7071 18.7051C12.5196 18.8926 12.2652 18.998 12 18.998C11.7348 18.998 11.4804 18.8926 11.2929 18.7051C11.1054 18.5176 11 18.2632 11 17.998V12.998H6C5.73478 12.998 5.48043 12.8926 5.29289 12.7051C5.10536 12.5176 5 12.2632 5 11.998C5 11.7328 5.10536 11.4784 5.29289 11.2909C5.48043 11.1034 5.73478 10.998 6 10.998H11V5.998C11 5.73278 11.1054 5.47843 11.2929 5.29089C11.4804 5.10336 11.7348 4.998 12 4.998C12.2652 4.998 12.5196 5.10336 12.7071 5.29089C12.8946 5.47843 13 5.73278 13 5.998V10.998H18C18.2652 10.998 18.5196 11.1034 18.7071 11.2909C18.8946 11.4784 19 11.7328 19 11.998C19 12.2632 18.8946 12.5176 18.7071 12.7051C18.5196 12.8926 18.2652 12.998 18 12.998Z" fill="#34495E"/>
            </svg> 
       </div>
       <ul class="space-y-2 font-medium mt-3 text-primary">
            <li>
                <a href="#" class="flex items-center p-2 ml-6 rounded-lg group">
                    <span class="">Shopping</span>
                </a>
            </li>
            <li>
                <a href="#" class="flex items-center p-2 ml-6 rounded-lg group">
                    <span class="">Entertainment</span>
                </a>
            </li>
            <li>
                <a href="#" class="flex items-center p-2 ml-6 rounded-lg group">
                    <span class="">News</span>
                </a>
            </li>
            <li>
                <a href="#" class="flex items-center p-2 ml-6 rounded-lg group">
                    <span class="">Travels</span>
                </a>
            </li>
            <li>
                <a href="#" class="flex items-center p-2 ml-6 rounded-lg group">
                    <span class="">Social Networks</span>
                </a>
            </li>
        </ul>
    </div>
 </aside>
 <AddPasswordMenu {showRightMenu} {categories} on:close={() => showRightMenu = !showRightMenu}/>
 <div class="{modal ? 'relative z-30 block' : 'hidden'} " aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
    <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
      <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
        <form method="POST" action="?/category" class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
          <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
            <div class="">
              <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                <h3 class="text-2xl font-extrabold text-primary" id="modal-title">Create new category</h3>
                <div class="mt-3 w-full flex flex-col gap-y-3">
                    <input type="hidden" name="type" value="type_category"/>
                    <label for="category" class="font-bold text-md text-primary">Category name:</label>
                    <input type="text" class="bg-white text-primary text-md w-full py-2.5 px-3 rounded-lg border border-gray-300 outline-none focus:ring-0" name="category" id="category" placeholder="Enter a category name"/>
                    {#if $page.form?.error}<small class="text-red-500 text-md ml-1">{$page.form.message}</small>{/if}
                </div>
              </div>
            </div>
          </div>
          <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
            <button type="submit" class="inline-flex w-full justify-center rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-opacity-90 transition ease-in-out duration-150 sm:ml-3 sm:w-auto">Create</button>
            <button on:click={() => modal = !modal} type="button" class="mt-3 inline-flex w-full justify-center rounded-md bg-[#E8F0FF] px-3 py-2 text-sm font-semibold text-primary shadow-sm hover:bg-opacity-90 transition ease-in-out duration-150 sm:mt-0 sm:w-auto">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  
 <div class="p-4 sm:ml-64">
    <div class="container mx-auto px-14 mt-3">
        <div class="flex items-center justify-between">
            <button on:click={() => showRightMenu = !showRightMenu} class="bg-primary hover:bg-opacity-90 text-white font-semibold flex items-center gap-2 py-2 px-4 rounded-md transition ease-in-out duration-150">
                <svg class="-ml-1" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#FFFFFF" d="M18 12.998H13V17.998C13 18.2632 12.8946 18.5176 12.7071 18.7051C12.5196 18.8926 12.2652 18.998 12 18.998C11.7348 18.998 11.4804 18.8926 11.2929 18.7051C11.1054 18.5176 11 18.2632 11 17.998V12.998H6C5.73478 12.998 5.48043 12.8926 5.29289 12.7051C5.10536 12.5176 5 12.2632 5 11.998C5 11.7328 5.10536 11.4784 5.29289 11.2909C5.48043 11.1034 5.73478 10.998 6 10.998H11V5.998C11 5.73278 11.1054 5.47843 11.2929 5.29089C11.4804 5.10336 11.7348 4.998 12 4.998C12.2652 4.998 12.5196 5.10336 12.7071 5.29089C12.8946 5.47843 13 5.73278 13 5.998V10.998H18C18.2652 10.998 18.5196 11.1034 18.7071 11.2909C18.8946 11.4784 19 11.7328 19 11.998C19 12.2632 18.8946 12.5176 18.7071 12.7051C18.5196 12.8926 18.2652 12.998 18 12.998Z"/>
                </svg> 
                Add
            </button>
            <div class="flex items-center gap-16">
                <div class="relative flex items-center gap-2">
                    <span class="text-primary font-semibold cursor-pointer" on:click={() => showMenu = !showMenu} aria-details="my account">My account</span>
                    <svg class="cursor-pointer" on:click={() => showMenu = !showMenu} aria-roledescription="my account dropdown" width="18" height="18" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.24926 7.27787C2.50711 7.0201 2.85679 6.87529 3.22139 6.87529C3.58599 6.87529 3.93566 7.0201 4.19351 7.27787L10.9998 14.0841L17.806 7.27787C18.0653 7.0274 18.4127 6.88881 18.7732 6.89194C19.1337 6.89507 19.4786 7.03968 19.7335 7.29462C19.9884 7.54955 20.1331 7.89442 20.1362 8.25494C20.1393 8.61546 20.0007 8.96279 19.7503 9.22212L11.9719 17.0005C11.714 17.2583 11.3644 17.4031 10.9998 17.4031C10.6352 17.4031 10.2855 17.2583 10.0276 17.0005L2.24926 9.22212C1.99149 8.96427 1.84668 8.61459 1.84668 8.24999C1.84668 7.88539 1.99149 7.53572 2.24926 7.27787Z" fill="#34495E"/>
                    </svg>
                    <div class="{showMenu ? 'absolute min-h-max top-0 right-0 z-10 shadow-lg py-4 px-6 mt-6 bg-white min-w-max flex flex-col' : 'hidden h-0'}">
                        <div class="flex items-center justify-start gap-4">
                            <img class="rounded-full h-8 w-8 object-cover" src={user.avatar ? user.avatar : '' } alt="person">
                            <span class="text-primary font-bold">{user.username ? user.username : ''}</span>
                        </div>
                        <div class="flex flex-col gap-2 mt-4">
                            <span class="text-[#34495E] text-opacity-50 ">E-mail</span>
                            <span class="text-primary">{user.email ? user.email : ''}</span>
                        </div>
                        <div class="flex flex-col gap-2 mt-6">
                            <a href="/dashboard/settings" class="text-primary font-semibold">Settings</a>
                            <a href="/auth/sign-out" class="text-primary font-semibold">Logout</a>
                        </div>
                    </div> 
                </div>
                <svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.14615 2.24799C7.29556 1.8787 7.55185 1.56244 7.88217 1.33976C8.21249 1.11707 8.60178 0.998108 9.00015 0.998108C9.39852 0.998108 9.78781 1.11707 10.1181 1.33976C10.4484 1.56244 10.7047 1.8787 10.8541 2.24799C12.3329 2.65467 13.6373 3.53554 14.5669 4.75532C15.4966 5.9751 16.0001 7.46633 16.0002 8.99998V13.697L17.8322 16.445C17.9326 16.5956 17.9903 16.7706 17.9991 16.9515C18.0079 17.1323 17.9674 17.3121 17.882 17.4718C17.7966 17.6314 17.6695 17.7648 17.5142 17.8579C17.3588 17.9509 17.1812 18 17.0002 18H12.4651C12.3447 18.8331 11.9282 19.5949 11.2919 20.1459C10.6555 20.6969 9.84191 21.0002 9.00015 21.0002C8.15839 21.0002 7.34481 20.6969 6.70845 20.1459C6.07209 19.5949 5.65555 18.8331 5.53515 18H1.00015C0.819107 18 0.641453 17.9509 0.486141 17.8579C0.330829 17.7648 0.203685 17.6314 0.118276 17.4718C0.032866 17.3121 -0.00760575 17.1323 0.00117785 16.9515C0.00996145 16.7706 0.067671 16.5956 0.16815 16.445L2.00015 13.697V8.99998C2.00015 5.77598 4.18015 3.05999 7.14615 2.24799ZM7.58615 18C7.68943 18.2926 7.88093 18.546 8.13427 18.7253C8.38761 18.9045 8.69031 19.0008 9.00065 19.0008C9.31099 19.0008 9.61369 18.9045 9.86703 18.7253C10.1204 18.546 10.3119 18.2926 10.4151 18H7.58515H7.58615ZM9.00015 3.99999C7.67407 3.99999 6.4023 4.52677 5.46462 5.46445C4.52693 6.40213 4.00015 7.6739 4.00015 8.99998V14C4.00019 14.1975 3.94174 14.3906 3.83215 14.555L2.86915 16H15.1301L14.1671 14.555C14.0579 14.3905 13.9998 14.1974 14.0001 14V8.99998C14.0001 7.6739 13.4734 6.40213 12.5357 5.46445C11.598 4.52677 10.3262 3.99999 9.00015 3.99999Z" fill="#34495E"/>
                </svg>                    
            </div>
        </div>
        <slot user={user}></slot>
    </div>
 </div>
 
