// Build Order: You are given a list of projects and a list of dependencies (which is a list of pairs of
// projects, where the second project is dependent on the first project). All of a project's dependencies
// must be built before the project is. Find a build order that will allow the projects to be built. If there
// is no valid build order, return an error.
// EXAMPLE
// Input:
// projects: a, b, c, d, e, f
// dependencies: (a, d), (f, b), (b, d), (f, a), (d, c)
// Output: f, e, a, b, d, c

type AdjList = { [key: string]: { neighbors: string[]; incoming: number; outgoing: number } };

const getBuildOrder = (projects: string[], dependencies: [string, string][]) => {
  const adjList = projects.reduce<AdjList>((acc, el) => {
    acc[el] = { neighbors: [], incoming: 0, outgoing: 0 };
    return acc;
  }, {});

  for (let i = 0; i < dependencies.length; i++) {
    const [a, b] = dependencies[i];

    adjList[a].neighbors.push(b);
    adjList[a].outgoing++;
    adjList[b].incoming++;
  }

  const [stranded, outgoingOnly] = projects.reduce<[string[], string[]]>(
    ([stranded, outgoingOnly], el) => {
      const project = adjList[el];
      if (project.incoming === 0 && project.outgoing === 0) {
        stranded.push(el);
      } else if (project.incoming === 0) {
        outgoingOnly.push(el);
      }

      return [stranded, outgoingOnly];
    },
    [[], []]
  );

  const order = [...stranded];

  const queue = [...outgoingOnly];
  const visited = new Set();

  while (queue.length !== 0) {
    const size = queue.length;

    for (let i = 0; i < size; i++) {
      const projectKey = queue.shift()!;

      if (visited.has(projectKey)) continue;

      visited.add(projectKey);
      const node = adjList[projectKey];

      order.push(projectKey);

      node.neighbors.forEach((el) => {
        queue.push(el);
      });
    }
  }

  return order;
};

console.log(
  getBuildOrder(
    ["a", "b", "c", "d", "e", "f", "g", "h"],
    [
      ["a", "d"],
      ["f", "b"],
      ["b", "d"],
      ["f", "a"],
      ["d", "c"],
    ]
  )
);

/*

a: [d]
b: [d]
c: []
d: [c]
e: []
f: [b,a]

1) Build directed adjacency list
2) Find nodes with no incoming or outgoing (these can be built first)
3) Find nodes with no incoming
*/
