# CSS-Basics 2

# 1. CSS Box Model

---

[CSS Box Model](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model)

## 1.1  重點觀念：All html elements are boxes

with `width`, `height`, `padding`, `content`, `border`, `margin`

![css-box-model.png](CSS-Basics%202%206658a332ca5846b8b05a29a6620cbd6e/css-box-model.png)

## 1.2 Padding and  Margin 設定

**Syntax :** 四**種設定方式**

1. (上右下左) : `0.5rem`
2. (上右 下左) : `0.5rem 0.75rem`
3. (上 右 下 左) : `0.5rem 0.75rem 1rem 1.25rem`
4. (上 左右 下) : `5rem  10rem`

```css
/* 1. Apply to all four sides */
padding: 1em;
margin: 1em;

/* 2. vertical | horizontal */
padding: 5% 10%;
margin: 5% auto;

/* 3. top | right | bottom | left */
padding: 5px 1em 0 2em;
margin: 2px 1em 0 auto;

/* 4. top | horizontal | bottom */
padding: 1em 2em 2em;
margin: 1em auto 2em;
```

## 1.3  Border 設定

Syntax

```css
/* style */
border: solid;

/* width | style */
border: 2px dotted;

/* style | color */
border: outset #f33;

/* width | style | color */
border: medium dashed green;
```

## 1.4  Width and Height

**Syntax**

```css
/* <length> values */
width: 300px;
width: 25em;

height: 120px;
height: 10em;

/* <percentage> value */
width: 75%;

height: 75%;

/* Keyword values */
width: max-content;
width: min-content;
width: fit-content(20em);
width: auto;

height: max-content;
height: min-content;
height: fit-content(20em);
height: auto;
```

## 1.5  Relative Units

| % | width, height  (相對於 parent element 的 width and height) |
| --- | --- |
| vw | viewport width (相對於視窗大小的 width) |
| vh | viewport height (相對於視窗大小 height) |

# 2. Elements Attributes

---

## 2.1  Display Types

1. **inline** : width by default is decided by content. 不能設定 width, height.
2. **block :** width by default is 100%
3. **inline-block** (背)
    1. 在網頁排版設定上 ⇒ inline element
    2. 在 width, height 設定上 ⇒ block element
    
    五個 Inline-block element
    
    `<select>` 、 `<input>`、 `<img>` 、 `<input>`、 `<textarea>`
    

*註 : [https://www.w3.org/TR/CSS2/box.html#margin-properties](https://www.w3.org/TR/CSS2/box.html#margin-properties) 中提到 These properties apply to all elements, but vertical margins will not have any effect on non-replaced inline elements

## 2.2  統整圖表

![block+and+inline.png](CSS-Basics%202%206658a332ca5846b8b05a29a6620cbd6e/blockandinline.png)

# 3. CSS [Position](https://developer.mozilla.org/en-US/docs/Web/CSS/position)

---

## 3.1  Syntax

```css
position: static;
position: relative;
position: absolute;
position: fixed;
position: sticky;

/* Global values */
position: inherit;
position: initial;
position: revert;
position: unset;
```

## 3.2  Values

### static

- default
- the element is positioned according to **normal flow of the document.**
- No Stacking context

### relative

- relative to itself based on the values of top, right, bottom, and left.
- [Stacking context](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context) !  (e.g. `z-index`)

### absolute

- The element is **removed from the normal document flow**, and no space is created for the element in the page layout.
- It is positioned relative to its closest positioned **ancestor (parent element)**, if any; 
otherwise, it is placed relative to the **initial [containing block](https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block)**. Its final position is determined by the values of `top`, `right`, `bottom`, and `left`.
- [Stacking context](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context) !  (e.g. `z-index`)

### fixed

- The element is **removed from the normal document flow**, and no space is created for the element in the page layout.
- It is positioned relative to the **initial [containing block](https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block)** established by the [**viewport**](https://developer.mozilla.org/en-US/docs/Glossary/Viewport), 
except when one of its ancestors has a `transform`, `perspective`, or `filter` property set to something other than `none`
- [Stacking context](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context) !  (e.g. `z-index`)

### sticky

- the element is positioned **according to normal** flow of the document.
- [Stacking context](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context) !  (e.g. `z-index`)