# JavaScript - Practice

## 下載 Code Runner and Node.js

Download the `Code Runner` extension from VS Code. This extension allows you to run JavaScript code with only one click.

Also, download `Node.js` from [Node](https://nodejs.org/en/)
and choose the _LTS_ version so that the code runner can run JavaScript code.

Node.js 可以讓 JavaScript 在瀏覽器(Browser)外的環境運行，例如你的本地環境。

## Practice

### 31 題

[JS Practice - Notion](https://www.notion.so/JS-Practice-a692c4dc450c476a8a7d9f8fe997deda)

## 我覺得有趣的

### JS swap

JavaScript 跟 Python 的 swap 都有內建語法，蠻方便的。

```jsx
const a = ["a", "b", "c", "e", "d"];

[a[3], a[4]] = [a[4], a[3]];
```

### flatten

平坦化陣列，對於多維陣列的資料比較好做儲存。

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

時間複雜度最好的排序法之一。

```jsx
function quickSort(arr, low, high) {
  if (low >= high) return;
  else {
    let l_cur = low;
    let r_cur = high;
    let pivot = arr[l_cur];
    while (l_cur != r_cur) {
      // 先從 r_cur 動。把小的丟左邊，大的丟右邊
      while (l_cur < r_cur && arr[r_cur] > pivot)
        // 遇小停
        r_cur--;
      while (l_cur < r_cur && arr[l_cur] <= pivot)
        // 遇大停
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
