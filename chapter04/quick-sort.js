function quickSort(array) {
  if (array.length < 2) {
    return array;
  }
  const pivot = array[0];
  const less = [];
  const greater = [];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < pivot) {
      less.push(array[i]);
    } else {
      greater.push(array[i]);
    }
  }
  return [...quickSort(less), pivot, ...quickSort(greater)];
}

console.log(quickSort([3, 5, 2, 1, 4]));
