function findSmallest(arr) {
  let smallest = arr[0];
  let smallestIndex = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
      smallestIndex = i;
    }
  }
  return smallestIndex;
}

function selectionSort(arr) {
  const newArr = [];
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    const smallest = findSmallest(arr);
    newArr.push(arr[smallest]);
    arr.splice(smallest, 1);
  }
  return newArr;
}

console.log(selectionSort([5, 3, 6, 2, 10]));
