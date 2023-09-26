<script lang="ts">
import type { ActionData } from "./$types";
import { enhance } from "$app/forms";

export let form: ActionData
/*//////////////
PLACEHOLDER CONTENT, REMOVE LATER
*//////////

console.log(form)

console.log("213")
</script>

<!-- <form method="POST" use:enhance>
    <input class="bg-black text-white" placeholder="email" type="email" name="email" id="email">
    <input class="bg-black text-white" placeholder="password" type="password" name="password" id="password">
    <button type="submit" class="bg-green-500 text-white">SUBMIT</button>
</form> -->
<section class="bg-white overflow-hidden">
    <div class="flex flex-wrap">
        <div class="hidden md:flex flex-col justify-between w-full md:w-5/12 bg-gray-300">
            <a class="flex flex-row gap-1.5 items-center ml-12 lg:ml-24 mt-12" href="/">
                <svg class="h-5 w-5 text-primary" stroke="currentColor" stroke-width="0" viewBox="0 0 20 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.40744 22.5554L2.44191 10.7009L16.8451 10.7428L16.8107 22.5973L2.40744 22.5554ZM2.4488 8.32999C1.81214 8.32814 1.20083 8.57615 0.749343 9.01948C0.297862 9.4628 0.0431955 10.0651 0.0413672 10.6939L0.0068986 22.5484C0.00507027 23.1772 0.25623 23.781 0.705125 24.227C1.15402 24.6729 1.76388 24.9245 2.40054 24.9263L16.8038 24.9682C17.4404 24.97 18.0518 24.722 18.5032 24.2787C18.9547 23.8354 19.2094 23.2331 19.2112 22.6043L19.2457 10.7498C19.2495 9.4339 18.1843 8.37574 16.852 8.37187L15.6518 8.36838L15.6587 5.99748C15.6632 4.42547 15.0353 2.91601 13.9131 1.80116C12.7909 0.686312 11.2662 0.0573969 9.67455 0.0527689C8.88644 0.0504774 8.1056 0.201521 7.37662 0.497277C6.64763 0.793032 5.98478 1.22771 5.4259 1.77648C4.86703 2.32526 4.42307 2.97739 4.11938 3.69564C3.8157 4.41389 3.65823 5.1842 3.65596 5.96258L3.64907 8.33348L2.4488 8.32999ZM9.66765 2.42367C10.6226 2.42645 11.5374 2.8038 12.2108 3.47271C12.8841 4.14162 13.2609 5.04729 13.2581 5.9905L13.2512 8.3614L6.04961 8.34046L6.0565 5.96956C6.05924 5.02635 6.44124 4.12288 7.11847 3.4579C7.79569 2.79292 8.71266 2.4209 9.66765 2.42367Z" fill="#34495E"/>
                    <g clip-path="url(#clip0_61_48)">
                        <path d="M10.5718 16.9535V19.0264C10.5721 19.2962 10.4672 19.5555 10.2793 19.7491C10.0914 19.9428 9.83548 20.0555 9.5658 20.0634C9.29613 20.0714 9.03399 19.9738 8.8351 19.7915C8.6362 19.6092 8.51623 19.3566 8.50066 19.0872L8.49893 19.0264V16.9881L9.53539 15.5716L10.5718 16.9535ZM7.08245 16.9535C6.91722 16.9535 6.75807 16.8912 6.63678 16.779C6.51549 16.6668 6.44097 16.513 6.4281 16.3482L6.42603 16.2971C6.42603 14.5617 7.81729 13.1532 9.53539 13.1532C11.2535 13.1532 12.6447 14.5617 12.6447 16.2971C12.6447 16.4623 12.5824 16.6215 12.4702 16.7428C12.358 16.8641 12.2042 16.9386 12.0395 16.9515L11.9883 16.9535H7.08245Z" fill="#34495E"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_61_48">
                            <rect width="8.29163" height="8.29163" fill="white" transform="translate(5.38956 12.4622)"/>
                        </clipPath>
                    </defs>
                </svg>          
                <span class="text-2xl lg:text-[1.75rem] font-semibold text-primary">ToadPass</span>    
            </a>
            <div>
                <h1 class="text-3xl text-primary font-bold">Welcome to ToadPass!</h1>
                <svg class="h-96 lg:h-full w-full" width="820" height="1015" viewBox="0 0 820 1015" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M-223.827 880.214L-2.61467 441.227L530.755 709.999L309.543 1148.99L-223.827 880.214ZM41.6277 353.429C18.0513 341.549 -9.22065 339.405 -34.1887 347.469C-59.1568 355.534 -79.7757 373.146 -91.5095 396.431L-312.722 835.418C-324.455 858.703 -326.343 885.755 -317.969 910.621C-309.595 935.487 -291.646 956.131 -268.069 968.011L265.3 1236.78C288.876 1248.66 316.148 1250.81 341.117 1242.74C366.085 1234.68 386.704 1217.07 398.437 1193.78L619.649 754.795C644.204 706.067 624.334 647.063 574.997 622.202L530.55 599.804L574.792 512.007C604.126 453.793 608.845 386.166 587.91 324.001C566.976 261.836 522.102 210.226 463.161 180.525C433.976 165.818 402.216 156.933 369.695 154.376C337.173 151.82 304.527 155.642 273.62 165.625C242.712 175.608 214.149 191.555 189.561 212.558C164.974 233.56 144.843 259.205 130.318 288.03L86.0752 375.827L41.6277 353.429ZM418.918 268.322C454.283 286.143 481.207 317.109 493.768 354.408C506.329 391.707 503.498 432.283 485.897 467.211L441.655 555.009L174.97 420.622L219.212 332.825C236.813 297.897 267.742 271.479 305.194 259.382C342.646 247.286 383.554 250.501 418.918 268.322Z" fill="#34495E" fill-opacity="0.05"/>
                    <g clip-path="url(#clip0_43_84)">
                        <path d="M182.879 823.937L144.421 900.811C139.425 910.821 130.723 918.489 120.164 922.185C109.604 925.881 98.0202 925.314 87.8724 920.604C77.7246 915.894 69.8131 907.414 65.819 896.963C61.8249 886.513 62.063 874.918 66.4827 864.64L67.5467 862.353L105.364 786.76L170.081 753.459L182.879 823.937ZM53.4742 759.199C47.3471 756.133 42.6016 750.869 40.185 744.458C37.7685 738.047 37.8586 730.96 40.4374 724.612L41.3092 722.678C73.505 658.321 151.233 631.897 214.948 663.772C278.664 695.648 304.127 773.695 271.931 838.052C268.865 844.179 263.601 848.925 257.19 851.341C250.779 853.758 243.692 853.668 237.344 851.089L235.41 850.217L53.4742 759.199Z" fill="#34495E" fill-opacity="0.05"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_43_84">
                            <rect width="343.829" height="343.829" fill="white" transform="translate(74.0197 561.231) rotate(26.5776)"/>
                        </clipPath>
                    </defs>
                </svg>
            </div>
        </div>
        <div class="w-full md:w-6/12 text-primary">
            <div class="px-8 py-24 lg:pt-32 lg:pb-36 max-w-lg mx-auto h-full lg:mt-24">
                <div class="md:max-w-xl">
                    <h2 class="font-heading mb-4 text-4xl tracking-tighter font-bold">Secure with ToadPass</h2>
                </div>
                <form class="flex flex-wrap mt-4 -m-2 mb-0" method="POST" use:enhance>
                    <div class="w-full p-2">
                        <label class="block">
                            <span class="inline-block mb-2 font-bold tracking-tight">Email:</span>
                            <input
                                class="p-4 w-full tracking-tight bg-white placeholder-primary placeholder-opacity-70 outline-none border border-gray-300 rounded-lg focus:border-primary transition duration-200"
                                id="email"
                                type="email"
                                name="email"
                                placeholder="johndoe@gmail.com"
                            />
                        </label>
                    </div>
                    <div class="w-full p-2">
                        <label class="block">
                            <span class="inline-block mb-2 font-bold tracking-tight">Password:</span>
                            <input
                                class="p-4 w-full tracking-tight bg-white placeholder-gray-500 outline-none border border-gray-300 rounded-lg focus:border-primary transition duration-200"
                                id="password"
                                type="password"
                                name="password"
                                placeholder="******************"
                            />
                        </label>
                    </div>
                    <div class="w-full p-2">
                        <label class="block">
                            <span class="inline-block mb-2 font-bold tracking-tight">Repeat password:</span>
                            <input
                                class="p-4 w-full tracking-tight bg-white placeholder-gray-500 outline-none border border-gray-300 rounded-lg focus:border-primary transition duration-200"
                                id="confirm_password"
                                type="password"
                                name="confirm_password"
                                placeholder="Password"
                            />
                        </label>
                    </div>
                    <div class="flex items-center justify-between w-full p-2">
                        <a href="/auth/sign-in" class="flex items-center font-bold gap-1 text-primary hover:text-hover transition duration-200">
                            <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.28292 10.94C3.00202 11.2212 2.84424 11.6025 2.84424 12C2.84424 12.3975 3.00202 12.7787 3.28292 13.06L8.93892 18.719C9.22031 19.0004 9.60197 19.1585 9.99992 19.1585C10.3979 19.1585 10.7795 19.0004 11.0609 18.719C11.3423 18.4376 11.5004 18.0559 11.5004 17.658C11.5004 17.26 11.3423 16.8784 11.0609 16.597L7.96492 13.5H19.4999C19.8977 13.5 20.2793 13.342 20.5606 13.0607C20.8419 12.7794 20.9999 12.3978 20.9999 12C20.9999 11.6022 20.8419 11.2206 20.5606 10.9393C20.2793 10.658 19.8977 10.5 19.4999 10.5H7.96492L11.0609 7.404C11.2003 7.26466 11.3108 7.09925 11.3862 6.91721C11.4616 6.73516 11.5004 6.54004 11.5004 6.343C11.5004 6.14595 11.4616 5.95084 11.3862 5.76879C11.3108 5.58674 11.2003 5.42133 11.0609 5.282C10.9216 5.14266 10.7562 5.03214 10.5741 4.95673C10.3921 4.88133 10.197 4.84252 9.99992 4.84252C9.80287 4.84252 9.60776 4.88133 9.42571 4.95673C9.24366 5.03214 9.07825 5.14266 8.93892 5.282L3.28292 10.94Z" fill="#34495E"/>
                            </svg>   
                            Back to login
                        </a>
                        <button type="submit" class="inline-block mb-3 px-5 py-2.5 w-full lg:w-3/6 text-white text-center font-semibold tracking-tight bg-primary hover:bg-opacity-90 rounded-lg focus:ring-4 focus:ring-indigo-300 transition duration-200" href="#">
                            Create my account
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</section>



