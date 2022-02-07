// 1
function mySort(arr, low, high) {
  if (low >= high) {
    console.log(arr);
    return; 
  }
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
    console.log(arr[low] + " " + arr[high]);
    [arr[low], arr[l_cur]] = [arr[l_cur], arr[low]];
    mySort(arr, low, l_cur - 1);
    mySort(arr, l_cur + 1, high);
  }
}
// mySort([17, 0, -3, 2, 1, 0.5], 0, 5) // returns [-3, 0, 0.5, 1, 2, 17]


// 2
function isPrime(n) {
  if (n == 1 || n == 0) return false;
  for (let i = 2; i < n; i++){
    if (n % i == 0) return false;
  }
  return true;
}
// console.log(isPrime(1));
// console.log(isPrime(5));
// console.log(isPrime(91));
// console.log(isPrime(1000000));


// 3
function confirmEnding(str1, str2) {
  let k = str1.length - 1;
  for (let i = str2.length - 1; i >= 0 && k >= 0; i--){
    if (str2[i] == str1[k]) k--;
    else {
      console.log(false);
      return false;
    }
  }

  console.log(true);
  return true;
}
// confirmEnding("Bastian", "n"); // true
// confirmEnding("Connor", "n"); // false
// confirmEnding("Open sesame", "same"); // true



// 4
function findDuplicate(arr) {
  if (arr.length <= 1) return false;
  for (let i = 0; i < arr.length - 1; i++){
    for (let j = i; j < arr.length - 1; j++){
      if (arr[i] == arr[j]) return true;
    }
  }
  
  return false;
}
// console.log(findDuplicate([1, 3, 5, 7, 9, 3]));// returns true
// console.log(findDuplicate([]));// returns false
// console.log(findDuplicate([3, 4, 5, 6, 7, 10000, 0]));// returns false 


// 5
function palindrome(str) {
  for (let i = 0; i < str.length / 2; i++){
    if (str[i].toLowerCase() != str[str.length - 1 - i].toLowerCase()) return false;
  }
  return true;
}
// console.log(palindrome("bearaeb")); // true
// console.log(palindrome("Whatever revetahw"));  // true
// console.log(palindrome("Aloha, how are you today?")); // false


// 7
function pyramid(n) {
  for (let i = 1; i <= n; i++){
    console.log(drawRow(n - i, i * 2 - 1));
  }
  
}
function drawRow(space, stars) {
  let result = "";
  for (let i = 0; i < space; i++) result += " ";
  for (let i = 0; i < stars; i++) result += "*";
  return result;
}
// pyramid(1);
// //*
// pyramid(2);
// //  *
// // ***
// pyramid(4);
// //    *
// //   ***
// //  *****
// // *******


// 7
function inversePyramid(n) {
  for (let i = n; i >= 1; i--){
    console.log(drawRow(n - i, i * 2 - 1));
  }
}
inversePyramid(4);
// *******
//  *****
//   ***
//    *