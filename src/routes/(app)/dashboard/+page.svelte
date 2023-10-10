<script lang="ts">
    import { enhance } from "$app/forms";
</script>

<div class="container mx-auto mt-[5.5rem]">
    <div class="mx-auto">
       
        <div class="mt-12 relative h-max overflow-auto">
            <table class="w-full table-auto text-sm text-left">
                <thead class="text-[#34495E] text-opacity-50 font-medium border-b">
                    <tr>
                        <th class="py-3 pr-6">WEBSITE NAME</th>
                        <th class="py-3 pr-6">PASSWORD</th>
                        <th class="py-3 pr-6">LAST USED</th>
                        <th class="py-3 pr-6">CATEGORY</th>
                    </tr>
                </thead>
                <tbody class="divide-y">
                    <tr>
                        <td class="pr-6 py-4 whitespace-nowrap">
                            <div class="flex flex-col items-left">
                                <span class="text-primary font-bold text-lg">discord.com</span>
                                <span class="text-[#34495E] text-opacity-60">johndoe@gmail.com</span>
                            </div>
                        </td>
                        <td class="text-[#34495E] text-opacity-60 pr-6 py-4 whitespace-nowrap text-md">
                            <div class="flex flex-row items-center">
                                <input disabled type="password" value="••••••••••" class="text-primary bg-transparent outline-none ring-0 text-lg rounded-md w-24">
                                <svg width="18" height="18" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.606 15.5377C4.50155 15.8228 4.29003 16.056 4.01639 16.1877C3.74274 16.3194 3.42853 16.3392 3.14053 16.2428C2.85252 16.1465 2.61342 15.9417 2.47402 15.6719C2.33462 15.4021 2.30591 15.0886 2.394 14.798C2.43549 14.6695 2.48378 14.541 2.53867 14.4177C2.632 14.196 2.76967 13.8903 2.95867 13.5287C3.34367 12.8053 3.94333 11.8417 4.82767 10.878C6.61267 8.92967 9.53633 7 14 7C18.4637 7 21.3873 8.92967 23.1723 10.878C24.1251 11.9233 24.8978 13.1194 25.459 14.4177L25.5663 14.6813C25.5733 14.7 25.5967 14.8213 25.62 14.938L25.6667 15.1667C25.6667 15.1667 25.8627 15.9437 24.8687 16.2727C24.5759 16.3704 24.2564 16.3482 23.98 16.2109C23.7036 16.0736 23.4929 15.8323 23.394 15.54V15.533L23.38 15.4957C23.2628 15.1959 23.1288 14.903 22.9787 14.6183C22.5638 13.8355 22.051 13.1087 21.4527 12.4553C20.0293 10.9037 17.703 9.33333 14 9.33333C10.297 9.33333 7.97067 10.9037 6.54733 12.4553C5.77673 13.3002 5.15006 14.2658 4.69233 15.3137C4.66785 15.3739 4.64452 15.4346 4.62233 15.4957L4.606 15.5377ZM9.33333 16.3333C9.33333 15.0957 9.825 13.9087 10.7002 13.0335C11.5753 12.1583 12.7623 11.6667 14 11.6667C15.2377 11.6667 16.4247 12.1583 17.2998 13.0335C18.175 13.9087 18.6667 15.0957 18.6667 16.3333C18.6667 17.571 18.175 18.758 17.2998 19.6332C16.4247 20.5083 15.2377 21 14 21C12.7623 21 11.5753 20.5083 10.7002 19.6332C9.825 18.758 9.33333 17.571 9.33333 16.3333Z" fill="#34495E"/>
                                </svg>
                            </div>
                        </td>
                        <td class="text-[#34495E] text-opacity-60 pr-6 py-4 whitespace-nowrap text-md">
                            3 millenia ago
                        </td>
                        <td class="pr-6 py-4 whitespace-nowrap">
                            <span class="bg-[#E8F0FF] text-primary py-2 px-2 rounded-md">Social Media</span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
