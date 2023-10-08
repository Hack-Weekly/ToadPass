<script lang="ts">
  import { enhance } from "$app/forms";
</script>

<form method="POST" use:enhance>
    <input class="bg-yellow-500 text-red" type="password" name="secret" id="secret" placeholder="secret">
    <button type="submit" class="bg-green-500 text-white text-xl">SUBMIT</button>
</form>
