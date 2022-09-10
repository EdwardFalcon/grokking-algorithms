function binarySearch(list, item) {
  let low = 0;
  let high = list.length;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    guess = list[mid];
    if (guess === item) {
      return mid;
    }
    if (guess > item) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
}

const myList = [1, 3, 5, 7, 9];

console.log(binarySearch(myList, 3)); // => 1
console.log(binarySearch(myList, -1)); // => undefined
