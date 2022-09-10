function max(list) {
  if (list.length == 2) {
    return list[0] > list[1] ? list[0] : list[1];
  }
  subMax = max(list.slice(1));
  return list[0] > subMax ? list[0] : subMax;
}

console.log(max([3, 9, 7, 2, 4]));
