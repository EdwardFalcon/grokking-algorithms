const graph = {
  start: {
    a: 6,
    b: 2,
  },
  a: {
    fin: 1,
  },
  b: {
    a: 3,
    fin: 5,
  },
  fin: {},
};

const costs = {
  a: 6,
  b: 2,
  fin: Infinity,
};

const parents = {
  a: 'start',
  b: 'start',
  fin: undefined,
};

const processed = [];

const finLowestCostNode = (costs) => {
  let lowestCost = Infinity;
  let lowestCostNode = null;
  for (let node in costs) {
    cost = costs[node];
    if (cost < lowestCost && !processed[node]) {
      lowestCost = cost;
      lowestCostNode = node;
    }
  }
  return lowestCostNode;
};

let node = finLowestCostNode(costs);
while (node) {
  let cost = costs[node];
  let neighbors = graph[node];
  for (let n in neighbors) {
    const newCost = cost + neighbors[n];
    if (costs[n] > newCost) {
      costs[n] = newCost;
      parents[n] = node;
    }
  }
  processed[node] = true;
  node = finLowestCostNode(costs);
}

console.log(parents, costs);
