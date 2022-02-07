# JavaScript - Practice

# 下載 Code Runner and Node.js

---

Download the `Code Runner` extension from VS Code. This extension allows you to run JavaScript code with only one click.

Also, download `Node.js` from [https://nodejs.org/en/](https://nodejs.org/en/)
and choose the LTS version so that the code runner can run JavaScript code.

# Practice

---

## 31 題

[https://yuhsien.notion.site/JS-Practice-a692c4dc450c476a8a7d9f8fe997deda#a5cc55bd734345ff84d8b2c3d8fc914b](https://www.notion.so/JS-Practice-a692c4dc450c476a8a7d9f8fe997deda)

## 我覺得有趣的

### JS swap

```jsx
const a = ['a', 'b', 'c', 'e', 'd'];

[a[3], a[4]] = [a[4], a[3]]
```

### flatten

```jsx
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
```

### quick sort

```jsx
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
```