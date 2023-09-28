<script lang="ts">
    import { enhance } from "$app/forms";
    import { page } from '$app/stores';
</script>

<section class="min-w-full min-h-screen flex bg-white">
    <div class="hidden md:block w-2/4 h-screen bg-gray-300 tracking-widest">
        <div class="w-full h-full relative overflow-hidden">
            <div class="absolute">
                <svg width="820" height="1015" viewBox="0 0 820 1015" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M-223.827 880.214L-2.61467 441.227L530.755 709.999L309.543 1148.99L-223.827 880.214ZM41.6277 353.429C18.0513 341.549 -9.22065 339.405 -34.1887 347.469C-59.1568 355.534 -79.7757 373.146 -91.5095 396.431L-312.722 835.418C-324.455 858.703 -326.343 885.755 -317.969 910.621C-309.595 935.487 -291.646 956.131 -268.069 968.011L265.3 1236.78C288.876 1248.66 316.148 1250.81 341.117 1242.74C366.085 1234.68 386.704 1217.07 398.437 1193.78L619.649 754.795C644.204 706.067 624.334 647.063 574.997 622.202L530.55 599.804L574.792 512.007C604.126 453.793 608.845 386.166 587.91 324.001C566.976 261.836 522.102 210.226 463.161 180.525C433.976 165.818 402.216 156.933 369.695 154.376C337.173 151.82 304.527 155.642 273.62 165.625C242.712 175.608 214.149 191.555 189.561 212.558C164.974 233.56 144.843 259.205 130.318 288.03L86.0752 375.827L41.6277 353.429ZM418.918 268.322C454.283 286.143 481.207 317.109 493.768 354.408C506.329 391.707 503.498 432.283 485.897 467.211L441.655 555.009L174.97 420.622L219.212 332.825C236.813 297.897 267.742 271.479 305.194 259.382C342.646 247.286 383.554 250.501 418.918 268.322Z"
                        fill="#34495E"
                        fill-opacity="0.05"
                    />
                    <g clip-path="url(#clip0_43_84)">
                        <path
                            d="M182.879 823.937L144.421 900.811C139.425 910.821 130.723 918.489 120.164 922.185C109.604 925.881 98.0202 925.314 87.8724 920.604C77.7246 915.894 69.8131 907.414 65.819 896.963C61.8249 886.513 62.063 874.918 66.4827 864.64L67.5467 862.353L105.364 786.76L170.081 753.459L182.879 823.937ZM53.4742 759.199C47.3471 756.133 42.6016 750.869 40.185 744.458C37.7685 738.047 37.8586 730.96 40.4374 724.612L41.3092 722.678C73.505 658.321 151.233 631.897 214.948 663.772C278.664 695.648 304.127 773.695 271.931 838.052C268.865 844.179 263.601 848.925 257.19 851.341C250.779 853.758 243.692 853.668 237.344 851.089L235.41 850.217L53.4742 759.199Z"
                            fill="#34495E"
                            fill-opacity="0.05"
                        />
                    </g>
                    <defs>
                        <clipPath id="clip0_43_84">
                            <rect width="343.829" height="343.829" fill="white" transform="translate(74.0197 561.231) rotate(26.5776)" />
                        </clipPath>
                    </defs>
                </svg>
            </div>
            <div class="ml-12 p-20 text-primary flex flex-col gap-y-20">
                <div class="w-full">
                    <h2 class="text-2xl lg:text-[1.75rem] font-semibold">ToadPass</h2>
                </div>
                <div class="text-5xl xl:text-7xl font-bold mt-28">
                    Welcome to
                    <p>ToadPass</p>
                    <p class="text-2xl xl:text-3xl font-light mt-3 pt-4">Save your information securely</p>
                </div>
            </div>
        </div>
    </div>
    <div class="relative w-full md:w-6/12 text-primary">
        <div class="px-8 py-24 lg:pt-28 lg:pb-36 max-w-xl mx-auto h-full lg:mt-24 tracking-widest">
            <div class="md:max-w-xl">
                <h2 style="word-spacing: 2px;" class=" mb-4 text-4xl font-bold text-[#2E2E2E]">Secure with ToadPass</h2>
            </div>
            {#if $page.form?.error}
            <div role="alert" class="rounded border-s-4 border-red-500 bg-red-50 p-4">
                <strong class="block font-medium text-red-800"> Something went wrong </strong>
              
                <p class="mt-2 text-sm text-red-700">
                    {$page.form.message}
                </p>
            </div>
            {/if}
            <form class="flex flex-wrap mt-6 -m-2 mb-0" method="POST" use:enhance>
                <div class="w-full p-2">
                    <label class="block">
                        <span class="inline-block mb-2 font-bold">Email:</span>
                        <input
                            class="p-4 w-full bg-white placeholder-primary placeholder-opacity-70 outline-none border border-gray-300 rounded-lg focus:border-primary transition duration-200"
                            id="email"
                            type="email"
                            name="email"
                            placeholder="johndoe@gmail.com"
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
                <div class="flex items-center justify-between w-full p-2">
                    <div class="flex items-center gap-1">
                        <input type="checkbox" id="remember" class="mr-2" />
                        <a href="/auth/sign-in" class="text-primary hover:text-hover transition duration-200 font-bold">Remember me</a>
                    </div>
                    <a href="/auth/forgot-password" class="text-primary hover:text-hover transition duration-200 font-bold">Forgot password?</a>
                </div>
                
                <button type="submit" class="tracking-widest mt-3 px-6 py-2.5 text-white text-center font-semibold bg-primary hover:bg-opacity-90 rounded-lg focus:ring-0 transition duration-200 ml-auto">
                    Sign in
                </button>
                <div class="flex flex-row w-full p-2 mt-3 gap-1 justify-end">
                    <span>Not a member?</span>
                    <a href="/auth/sign-up" class="text-primary hover:text-hover transition duration-200 font-bold">Sign up</a>
                </div>
            </form>
        </div>
    </div>
</section>
