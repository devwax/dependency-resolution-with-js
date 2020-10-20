import resolve from "./dep-resolution";
import "./styles.css";
const $before = document.querySelector("#before .dependency-list");
const $after = document.querySelector("#after .dependency-list");

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
const execution_order = resolve(subscribers);
// execution_order.forEach(function (name) {
//   console.log(name);
// });
// });

$before.innerHTML = `
<pre>${JSON.stringify(subscribers, null, 2)}</pre>
`;

$after.innerHTML = `
<pre>${JSON.stringify(execution_order, null, 2)}</pre>
`;

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
