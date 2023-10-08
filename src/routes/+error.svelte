<script lang="ts">
    import { page } from "$app/stores";
    import Error from "$lib/assets/error.png"
</script>

<div class="h-screen w-screen bg-gray-100 flex items-center">
	<div class="container mx-auto flex flex-col md:flex-row items-center justify-center px-5 text-gray-700">
        
   		<div class="max-w-full">
      		<div class="text-[9rem] font-bold text-[#2E2E2E]">{$page.status}</div>
            <p
              class="text-5xl font-light leading-normal"
            >{$page.error?.message}</p>
            {#if $page.status === 404}
                <p class="mb-8">But dont worry, you can find plenty of other things on our homepage.</p>
            {:else}
                <p class="mb-8">Whoops... it seems like something unexpected happened on our end.</p>
            {/if}
          
          <a href="/" class="px-4 inline py-2 text-md font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none bg-primary hover:bg-opacity-90">back to homepage</a>
    </div>
    <div class="w-full">
        <img src={Error} alt="404" title="https://storyset.com/people" class="max-w-2xl object-cover float-right" />
    </div>
    
  </div>
</div>