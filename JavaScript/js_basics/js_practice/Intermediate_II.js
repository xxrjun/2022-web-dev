// 1
function factorPrime(n) {
  if (n == 0) return "";
  else if (n == 1) return "1";
  else {
    let num = n;
    let list = [];
    for (let i = 2; i < n; i++){
      while (num % i == 0) {
        list.push(i);
        num /= i;
      }
    }
    let res = "";
    for (let i = 0; i < list.length - 1; i++){
      res += list[i] + " x ";
    }
    res += list[list.length - 1];
    return res;
  }
}
// console.log(factorPrime(120)); // returns "2 x 2 x 2 x 3 x 5"



// 2
function intersection(arr1, arr2) {
  const mySet1 = new Set();
  let res = [];
  for (let i = 0; i < arr1.length; i++){
    mySet1.add(arr1[i]);
  }
  for (let i = 0; i < arr2.length; i++){
    if (mySet1.has(arr2[i])) res.push(arr2[i]);
  }
  console.log(res);
  return res;
}
// intersection([1, 3, 4, 6, 10], [5, 11, 4, 3, 100, 144, 0]); // returns [3, 4]


// 3
function flatten(arr) {
  let res = [];
  helper(arr);
  console.log(res);
  return res;

  function helper(element) {
    for (let i = 0; i < element.length; i++) {
      if (Array.isArray(element[i])) helper(element[i]);
      else res.push(element[i]);
    }
  }
}

flatten([1, [[], 2, [0, [1]], [3]], [1, 3, [3], [4, [1]], [2]]]);
// returns [1, 2, 0, 1, 3, 1, 3, 3, 4, 1, 2]