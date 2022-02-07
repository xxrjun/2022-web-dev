// 11
function stars(n) {
  for (let i = 0; i < n; i++){
    for (let j = 0; j < i + 1; j++){
      process.stdout.write("*");
    }
    console.log();
  }
}
// stars(1);
// // *
// stars(4);
// // *
// // **
// // ***
// // ****


// 13
function stars2(n) {
  for (let i = 0; i < n; i++){
    for (let j = 0; j < i + 1; j++){
      process.stdout.write("*");
    }
    console.log();
  }
  for (let i = n - 1; i >= 0; i--){
    for (let j = 0; j < i; j++){
      process.stdout.write("*");
    }
    console.log();
  }
}
// stars2(4);
// // *
// // **
// // ***
// // ****
// // ***
// // **
// // *


// 14 
function table(n) {
  for (let i = 1; i <= 9; i++){
    console.log(n + " x " + i + " = " + (n * i));
  }
}
// table(3);


// 15
function table9to9() {
  for (let i = 1; i <= 9; i++){
    for (let j = 1; j <= 9; j++){
      console.log(i + " x " + j + " = " + (i * j));
    }
  }
}
// table9to9();


// 16
function fib(n) {
  if (n == 0)
    return 0;
  else if (n == 1)
    return 1;
  else
    return fib(n - 1) + fib(n - 2);
}
// console.log(fib(0));
// console.log(fib(1));
// console.log(fib(2));
// console.log(fib(3));
// console.log(fib(8));


// 17
function reverse(str) {
  let res = "";
  for (let i = 0; i < str.length; i++){
    res += str[str.length - i - 1];
  }
  console.log(res);
}
// reverse("abcd"); // returns "dcba"
// reverse("I am a good guy."); // returns ".yug doog a am I"

// 18
function swap(str) {
  let res = "";
  for (let i = 0; i < str.length; i++){
    if (str[i] == str[i].toUpperCase())
      res += str[i].toLowerCase();
    else
      res += str[i].toUpperCase();
  }

  console.log(res);
}
// swap("Aloha"); // returns "aLOHA"
// swap("Love you."); // returns "lOVE YOU."


// 19
function findMin(arr) {
  let minNum = arr[0];
  for (let i = 1; i < arr.length; i++){
    if (arr[i] < minNum)
      minNum = arr[i];
  }
  console.log(minNum);
}
// findMin([1, 2, 5, 6, 99, 4, 5]); // returns 1
// findMin([]); // returns undefined
// findMin([1, 6, 0, 33, 44, 88, -10]); // returns -10


// 20
function findNthMin(arr, num) {
  // 1 sort: using quik sort
  quickSort(arr, 0, arr.length - 1);
  
  // 2 return index: num - 1
  return arr[num - 1];
}
function quickSort(arr, low, high) {
  if (low >= high)
    return;
  else {
    let l_cur = low;
    let r_cur = high;
    let pivot = arr[l_cur];
    while (l_cur != r_cur) {
      // 先從 r_cur 動。把小的丟左邊，大的丟右邊
      while (l_cur < r_cur && arr[r_cur] > pivot) // 遇小停
        r_cur--;
      while (l_cur < r_cur && arr[l_cur] <= pivot) // 遇大停
        l_cur++;
      
      if (l_cur < r_cur) {
        [arr[l_cur], arr[r_cur]] = [arr[r_cur], arr[l_cur]];
      }
    }

    [arr[low], arr[l_cur]] = [arr[l_cur], arr[low]];
    quickSort(arr, low, l_cur - 1);
    quickSort(arr, l_cur + 1, high);
  }
}
console.log(findNthMin([1, 2, 3, 4, 5], 1)); // returns 1
console.log(findNthMin([1, 3, 5, 7, 9], 3)); // returns 5




