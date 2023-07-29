/* Example of Quick sort algorithm in javascript */

function quicksort(arr) {
  // condtion to get out of recursion
  if (arr.length <= 1) return arr;

  let pivot = arr[arr.length - 1];
  let leftArr = [];
  let rightArr = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (pivot > arr[i]) {
      leftArr.push(arr[i]);
    } else {
      rightArr.push(arr[i]);
    }
  }

  // recursion Calls and handling
  if (leftArr.length > 0 && rightArr.length > 0) {
    return [...quicksort(leftArr), pivot, ...quicksort(rightArr)];
  } else if (leftArr.length > 0) {
    return [...quicksort(leftArr), pivot];
  } else {
    return [pivot, ...quicksort(rightArr)];
  }
}

console.log(quicksort([1, 3, 8, 2, 7, 9, 56, 22, 34, 21]));
