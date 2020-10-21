// dep-resolution.js

// Original author: https://gist.github.com/shinout/1232505/f16308bc14966c8d003c2686b1c258ec41303c1f
// This version: https://gist.github.com/RubyTuesdayDONO/5006455
function resolve(graph) {
  var sorted = [], // sorted list of IDs ( returned value )
    visited = {}; // hash: id of already visited node => true

  // 2. topological sort
  Object.keys(graph).forEach(function visit(name, ancestors) {
    if (!Array.isArray(ancestors)) ancestors = [];
    ancestors.push(name);
    visited[name] = true;

    graph[name].forEach(function (dep) {
      if (ancestors.indexOf(dep) >= 0)
        // if already in ancestors, a closed chain exists.
        throw new Error(
          'Circular dependency "' +
            dep +
            '" is required by "' +
            name +
            '": ' +
            ancestors.join(" -> ")
        );

      // if already exists, do nothing
      if (visited[dep]) return;
      visit(dep, ancestors.slice(0)); // recursive call
    });

    if (sorted.indexOf(name) < 0) sorted.push(name);
  });

  return sorted;
}

// var subscribers = {
//   html: ["foo"],
//   value: ["options", "html"],
//   foo: ["options"],
//   bar: ["options", "html"],
//   options: [],
//   css: ["value"],
//   elements: ["css", "html", "options"]
// };

/*
Expected:
options
foo
html
value
bar
css
elements
*/

// var execution_order = resolve(subscribers);
// var execution_order = resolve(subscribers);
// execution_order.forEach(function (name) {
//   console.log(name);
// });

// export default (g) => {
//   return "resolved() output...";
// };
export default resolve;
