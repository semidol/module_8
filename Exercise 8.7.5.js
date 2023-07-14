// Задание 8.7.5

function uniqueSort(arr) {
  let uniqueSet = new Set(arr);
  let uniqueArr = Array.from(uniqueSet);
  uniqueArr.sort((a, b) => a - b);
  return uniqueArr
}

let result = uniqueSort([1, 2, 2, 10, -1, 0, 0, 5]);

console.log(result)