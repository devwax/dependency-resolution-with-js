<script>
  import resolve from "./dep-resolution";
  import { resolution } from "./store.js";
  import DependencyList from "./DependencyList.svelte";
  import ExecutionOrder from "./ExecutionOrder.svelte";
  import "./styles.css";
  const before_container = document.querySelector("#before .dependency-list");
  const after_container = document.querySelector("#after .dependency-list");

  // ________________________________
  // Before resolution
  const subscribers = {
    html: ["foo"],
    value: ["options", "html"],
    foo: ["options"],
    bar: ["options", "html"],
    options: [],
    css: ["value"],
    elements: ["css", "html", "options"]
  };

  // if (document.readyState !== "loading") {
  //   alert("DOM ALREADY READY");
  // } else {
  //   document.addEventListener("DOMContentLoaded", function () {
  //     alert("document was not ready, place code here");
  //     alert("DOM READY");
  //   });
  // }

  // After resolution
  // const execution_order = resolve(subscribers);
  // const resolution = resolve(subscribers);
  // execution_order.forEach(function (name) {
  //   console.log(name);
  // });
  // });

  // before_container.innerHTML = `
  //                 <pre>${JSON.stringify(subscribers, null, 2)}</pre>
  //                 `;

  // after_container.innerHTML = `
  //                 <pre>${JSON.stringify(execution_order, null, 2)}</pre>
  //                 `;

  /**
   * - Create nested LI that supports infinite levels of nesting
   *    for the subscribers.
   *
   * - Color code the dependencies so they can be easily inspected
   *    in before and after columns.
   *
   * - Hoverable dependancies that show their location in the opposing column.
   *
   * - Revise language... 'before', 'after', 'subscribers', etc.
   *
   * - Make interactive so user can enter arbitrary dependency list
   *    and get resolution in real-time.
   *
   * - Make the raw object / array available to copy beneath each column.
   *
   * - Toggle real-time mode.
   *
   * - Undo/redo changes
   *
   */
</script>


<h1 style="text-align: center;">Resolve Dependencies w/ JavaScript</h1>
<div id="app">
  <div id="before">
    <h2>Before</h2>
    <p>
      <small
        >The properties are each subject of dependency (subscribers) and
        their values are their dependencies, a la npm package manager, et.
        al.</small
      >
    </p>
    <div class="dependency-list"></div>
    <DependencyList />
  </div>

  <div id="after">
    <h2>After</h2>
    <p>
      <small
        >The fully resolved dependency chain (execution order) derived from
        the the dependency definitions in the <em>Before</em> column.</small
      >
    </p>
    <div class="dependency-list"></div>
    <ExecutionOrder/>
  </div>
</div>
