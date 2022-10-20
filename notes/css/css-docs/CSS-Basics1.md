# CSS-Basics 1

- [CSS-Basics 1](#css-basics-1)
  - [1. CSS (Cascading Style Sheets)](#1-css-cascading-style-sheets)
  - [2. CSS 程式碼放置位置](#2-css-程式碼放置位置)
    - [2.1 Inline Styling](#21-inline-styling)
    - [2.2 Internal Styling](#22-internal-styling)
    - [2.3 External Styling](#23-external-styling)
  - [3. Optional：電腦儲存顏色的方式](#3-optional電腦儲存顏色的方式)
  - [4. CSS Selectors](#4-css-selectors)
    - [Review : HTML Tag’s Attributes](#review--html-tags-attributes)
    - [4.1 Basic Selectors](#41-basic-selectors)
      - [Universal selector](#universal-selector)
      - [Type selector](#type-selector)
      - [ID selector](#id-selector)
      - [Class selector](#class-selector)
      - [Attribute selector](#attribute-selector)
    - [4.2 Grouping selectors](#42-grouping-selectors)
    - [4.3 Combinators](#43-combinators)
      - [Descendant combinator](#descendant-combinator)
    - [4.4 Pseudo](#44-pseudo)
      - [Pseudo class](#pseudo-class)
      - [Pseudo element](#pseudo-element)
  - [5. CSS Styling Rules](#5-css-styling-rules)
    - [Rule 1 : Cascade 下覆蓋上](#rule-1--cascade-下覆蓋上)
    - [Rule 2 : Specificity 特定度](#rule-2--specificity-特定度)
    - [Rule 3 : Inheritance](#rule-3--inheritance)
    - [Summary - 牢記！](#summary---牢記)
  - [6. Text Styling](#6-text-styling)
  - [7. Background](#7-background)

## 1. CSS (Cascading Style Sheets)

- 沒必要認識全部的 CSS 屬性，實在太多了，認識常用以及實用的屬性就好，其餘的可以等有需要時在搜尋。

- CSS Syntax 如下
  ```css
  h1 {
    color: green;
  }
  ```

## 2. CSS 程式碼放置位置

### 2.1 Inline Styling

在 `tag` 中更改

```html
<h1 style="color:green">近年發展</h1>
```

### 2.2 Internal Styling

放在 `head` 裡

```html
<style>
  h1 {
    color: green;
  }
</style>
```

### 2.3 External Styling

最常見，當網頁很多時就不用一直複製貼上！可以使用同一個 `style.css` 檔案讓許多網頁都用有同樣的 CSS style。

create a `style.css` and write CSS code

```css
h1 {
  color: green;
}
```

在 `index.html` 的 `head` 內導入 `style.css` 才會有作用

```html
<link rel="stylesheet" href="./style.css" />
```

## 3. Optional：電腦儲存顏色的方式

電腦儲存資料是以 **Binary Digit** ( bit = 0, 1)  
1 byte = 8 bits  
**R** = 1 byte ; **G** = 1 byte ; **B** = 1 byte  
每個都 = 8 bits， 也就有 2^8^3 = **256^3** 種顏色

- reserved color
  - 140 種
- rgb
  - 256^3 = 1677216 種
  - `(255, 255, 255)`
- rgba
  - 最後一格可以調透明度的 rgb，範圍 [0, 1]
  - `(255, 255, 255, 0.8)`
- hex
  - 十六進制： 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F
- hsl
  Colors : [https://coloors86.netlify.app/](https://coloors86.netlify.app/)  
  HTML Color Names : [https://www.w3schools.com/tags/ref_colornames.asp](https://www.w3schools.com/tags/ref_colornames.asp)

## 4. CSS Selectors

MND - CSS selectors : [https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors)

### Review : HTML Tag’s Attributes

1. `id` : 一個 tag 只能有一個 id， 且獨一無二
2. `class` : 類別，一個 tag 可以多個 class

### 4.1 Basic Selectors

#### Universal selector

Select all elements

- **Syntax :** `*`
- **Example** :
  ```css
  * {
    color: green;
  }
  ```

#### Type selector

Selects all elements that have the given node name

- **Syntax** : `elementname`
- **Example** :
  ```css
  h1 {
    color: red;
  }
  ```

#### ID selector

Selects an element based on the value of its `id` attribute. There should be only one element with a given ID in a document

- **Syntax** : `#idname`
- **Example :**
  1. In Html
  ```html
  <h1 id="redH1">近年發展</h1>
  ```
  2. In CSS
  ```css
  #redH1 {
    color: red;
  }
  ```

#### Class selector

Selects all elements that have the given `class` attribute

- **Syntax** : `.classname`
- **Example** :
  1. In Html
  ```html
  <h1 class="greenText">Some links</h1>
  ```
  2. In CSS
  ```css
  .greenText {
    color: chartreuse;
  }
  ```

#### Attribute selector

Selects all elements that have the given attribute

- **Syntax** : `.classname`
- **Example :** 更改 `input` 中所有 `type=”text”` 的 `color`
  ```css
  /* Attribute selector */
  input[type="text"] {
    color: green;
  }
  ```

### 4.2 Grouping selectors

一次選取多個 Group 設定 CSS style

```css
h1,
h2,
h3,
p {
  color: green;
}
```

### 4.3 Combinators

#### Descendant combinator

1. In Html
   ```html
   <div class="link1">
     <a href="https://www.foodpanda.com.tw/">Foodpanda</a>
     <a href="https://www.google.com/">Google</a>
   </div>
   <div class="link2">
     <a href="./myForm.html">熊貓問卷調查</a>
   </div>
   ```
2. In CSS
   ```css
   /* descendants selector */
   div.link1 a {
     color: red;
   }
   ```
   這樣只改到 `div.link1` 裡的 `<a>` 標籤，不會改到 `div.link2` 裡面的 anchor tag.

### 4.4 Pseudo

#### Pseudo class

1. Syntax:

   ```css
   selector:pseudo-class {
     property: value;
   }
   ```

2. Example : `hover` 、 `active`

   ```css
   /* 滑鼠移到時變綠色 */
   button:hover {
     color: green;
   }

   /* 按住變紅色 */
   input[type="text"]:active {
     color: red;
   }
   ```

3. **More pseudo classes** →[MDN Pseudo Classes](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes#alphabetical_index)

#### Pseudo element

1. Syntax
   ```css
   selector::pseudo-element {
     property: value;
   }
   ```
2. Example : `before` 、 `selection` 、 `after`

   ```css
   p::before {
     content: ">>";
     color: red;
   }

   *::selection {
     background: lightgreen;
   }

   h1::after {
     content: "↓";
     color: red;
   }
   ```

3. **More pseudo-elements** →[MDN Pseudo elements](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements#index)

## 5. CSS Styling Rules

### Rule 1 : Cascade 下覆蓋上

因為程式讀取是由上往下，因此越新讀取到的程式碼會覆蓋前面讀取到的程式碼。

### Rule 2 : Specificity 特定度

數字越大越前面特定度越高，高覆蓋低

1. `id` - specificity(1, 0, 0)
2. `class` - specificity(0, 1, 0)
3. `tag` - specificity(0, 0, 1)

### Rule 3 : Inheritance

CSS 屬性分成

1. Inherited form parent
2. Non-inherited (by default)

### Summary - 牢記！

`inline styling` > `id` > `class` > `element selector` > `inheritance`

## 6. Text Styling

- `font-size:` (units in CSS)
  - 瀏覽器預設 `16px`
  - relative : `rem` ← 現在多用這個，會因應瀏覽器字體大小做調整
  - absolute : `px`
- `text-align:`
  - `center` 、 `left` 、 `right`
- `font-decoration:`
  - `underline` 、 `line-through` 、 `none`
- `line-height:`
  - [MDN line-height](https://developer.mozilla.org/en-US/docs/Web/CSS/line-height)
- `letter-spacing:`
  - [MDN letter-spacing](https://developer.mozilla.org/en-US/docs/Web/CSS/letter-spacing)
- `font-family:`
  - CSS font stack：[https://www.cssfontstack.com/](https://www.cssfontstack.com/)
  - Google fonts : [https://fonts.google.com/](https://fonts.google.com/)
- `font-weight:`
  - 預設 `400px`
- `text-indent:`

## 7. Background

- `background:` 為以下兩個的簡寫

  - `background-color:`
  - `background-image:`

    ```css
    background-image: url(./src/pand_backgroud.jpg);
    ```

- `background-size:` : `cover` 、 `contain` ...
- `background-position:` ： `center` 、 `top` 、 `bottom` ...
- Example : In CSS

  ```css
  body {
    background-image: url(./src/pand_backgroud.jpg);
    background-size: cover;
    background-position: center;
    color: white;
  }
  ```
