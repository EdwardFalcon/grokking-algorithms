function count(list) {
  if (!list.length) {
    return 0;
  }
  return 1 + count(list.slice(1));
}

console.log(count([1, 2, 3, 4, 5]));
