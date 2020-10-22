<script>
  // import { onMount } from "svelte";
  import resolve from "./dep-resolution";
  import { resolution } from "./store.js";
  // export let subscribers;
  let json_validator = {};

  function handleChange(e) {
    try {
      $resolution = resolve(JSON.parse(e.target.value));
      console.log("Valid json");
    } catch {
      console.log("Invalid json");
      return;
    }
  }

  let textareavalue = `
    {
        "html": [
          "foo"
        ],
        "value": [
          "options",
          "html"
        ],
        "foo": [
          "options"
        ],
        "bar": [
          "options",
          "html"
        ],
        "options": [],
        "css": [
          "value"
        ],
        "elements": [
          "css",
          "html",
          "options"
        ]
    }`;

  $resolution = resolve(JSON.parse(textareavalue));
</script>

<textarea rows="20"  cols="40" bind:value={textareavalue} on:keyup={handleChange}></textarea>

<!-- <pre>{JSON.stringify({subscribers}, null, 2)}</pre> -->