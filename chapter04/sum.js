function sum(list) {
  if (!list.length) {
    return 0;
  }
  return list[0] + sum(list.slice(1));
}

console.log(sum([1, 2, 3, 4]));
