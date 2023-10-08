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
