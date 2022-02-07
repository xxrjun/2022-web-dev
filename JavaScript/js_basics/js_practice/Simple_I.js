// 1
function printMany() {
  for (let i = 1; i <= 100; i++){
    console.log(i);
  }
}
// printMany();


// 2
function printEvery3() {
  for (let i = 1; i <= 88; i+=3){
    console.log(i);
  }
}
// printEvery3();

// 3
function stars(n) {
  for (let i = 1; i <= n; i++){
    process.stdout.write("*");
  }
  console.log();
}
// stars(10);


// 4
function isUpperCase(arr) {
  if (arr.length == 0) return false;
  return arr[0] == arr[0].toUpperCase();
}
// console.log(isUpperCase("ABCD"));
// console.log(isUpperCase(""));
// console.log(isUpperCase("aBCD"));


// 5
function isAllUpperCase(arr) {
  if (arr.length == 0) return false;
  for (let i = 0; i < arr.length; i++){
    if (arr[i] == arr[i].toLowerCase()) return false;
  }

  return true;
}
// console.log(isAllUpperCase("ABCD"));
// console.log(isAllUpperCase(""));
// console.log(isAllUpperCase("ABCDEFGHIJKLm"));


// 6
function position(arr) {
  for (let i = 0; i < arr.length; i++){
    if (arr[i] == arr[i].toUpperCase()) {
      console.log(arr[i] + " " + i);
      return;
    }
  }
  console.log(-1);
}
// position("abcd"); // prints -1
// position("AbcD"); // prints A 0
// position("abCD"); // prints C 2


// 7
function findSmallCount(arr, num) {
  let count = 0;
  for (let i = 0; i < arr.length; i++){
    if (arr[i] == num) count++;
  }

  return count;
}
// console.log(findSmallCount([1, 2, 3], 2));  // 1
// console.log(findSmallCount([1, 2, 3, 4, 5], 0));  // 0


// 8
function findSmallerTotal(arr, num) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++){
    if (arr[i] < num) sum += arr[i];
  }

  console.log(sum);
}
// findSmallerTotal([1, 2, 3], 3) // returns 3
// findSmallerTotal([1, 2, 3], 1) // returns 0
// findSmallerTotal([3, 2, 5, 8, 7], 999) // returns 25
// findSmallerTotal([3, 2, 5, 8, 7], 0) // returns 0


// 9
function findAllSmall(arr, num) {
  let res = [];
  for (let i = 0; i < arr.length; i++){
    if (arr[i] < num) res.push(arr[i]);
  }

  console.log(res);
}
// findAllSmall([1, 2, 3], 10); // returns [1, 2, 3]
// findAllSmall([1, 2, 3], 2); // returns [1]
// findAllSmall([1, 3, 5, 4, 2], 4); // returns [1, 3, 2]


// 10
function sum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++){
    sum += arr[i];
  }
  console.log(sum);
}
sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); // returns 55
sum([]); // return 0
sum([-10, -20, -30]); // return -60