graph = {};
graph['you'] = ['alice', 'bob', 'claire'];
graph['bob'] = ['anuj', 'peggy'];
graph['alice'] = ['peggy'];
graph['claire'] = ['thom', 'jonny'];
graph['anuj'] = [];
graph['peggy'] = [];
graph['thom'] = [];
graph['jonny'] = [];

function personIsSeller(name) {
  return name.endsWith('m');
}

function search(name) {
  const searchQueue = [];
  const searched = new Set();
  searchQueue.push(...graph['you']);
  while (searchQueue.length) {
    const person = searchQueue.shift();
    if (searched.has(name)) {
      continue;
    }
    if (personIsSeller(person)) {
      console.log(`${person} is a mango seller!`);
      return true;
    }
    searchQueue.push(...graph[person]);
    searched.add(person);
  }
  return false;
}

search('you');
