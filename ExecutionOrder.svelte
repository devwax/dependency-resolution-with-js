<script>
  import { resolution } from "./store.js";
  console.log("$resolution 2", $resolution);
</script>

<ul>
{#each $resolution as item }
  <li>{item}</li>
{/each}
</ul>



