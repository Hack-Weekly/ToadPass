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

<form method="POST" use:enhance>
    <input class="bg-black text-white" placeholder="email" type="email" name="email" id="email">
    <input class="bg-black text-white" placeholder="password" type="password" name="password" id="password">
    <button type="submit" class="bg-green-500 text-white">SUBMIT</button>
</form>

