# CSS-Basics 3

- [CSS-Basics 3](#css-basics-3)
  - [1. Styling](#1-styling)
    - [1.1 CSS Default Styling](#11-css-default-styling)
    - [1.2 List Styling](#12-list-styling)
    - [1.3 Table Styling](#13-table-styling)
  - [2. Opacity and Cursor Pointer](#2-opacity-and-cursor-pointer)
    - [2.1 Opacity](#21-opacity)
    - [2.2 Cursor](#22-cursor)
  - [3. Transition](#3-transition)
    - [3.1 Transition Constituent Properties](#31-transition-constituent-properties)
    - [3.2 Transition Constituent Syntax](#32-transition-constituent-syntax)
    - [3.3 2D Transform](#33-2d-transform)
    - [3.4 3D Transform](#34-3d-transform)
  - [4. Animation](#4-animation)
    - [4.1 Animation Attributes](#41-animation-attributes)
    - [4.2 自製動畫 Example](#42-自製動畫-example)
  - [5. Other Topics in CSS](#5-other-topics-in-css)
    - [5.1 border-radius](#51-border-radius)
    - [5.2 overflow](#52-overflow)
    - [5.3 float and clear](#53-float-and-clear)

## 1. Styling

### 1.1 CSS Default Styling

如何查看 CSS Default Style?

1. [W3School CSS Default Values Reference](https://www.w3schools.com/csSref/css_default_values.asp)
2. 按 F12 直接看

### 1.2 List Styling

[MDN list-style](https://developer.mozilla.org/en-US/docs/Web/CSS/list-style)

Constituent properties

- `list-style-image`
- `list-style-position`
- `list-style-type`
  ```css
  /* Partial list of types */
  list-style-type: disc;
  list-style-type: circle;
  list-style-type: square;
  list-style-type: decimal;
  list-style-type: georgian;
  list-style-type: trad-chinese-informal;
  list-style-type: kannada;
  ```

### 1.3 Table Styling

[MDN Styling Tables](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Styling_tables)

- `border-collapse`
- `border`
- `padding`
- `width`
- `height`

## 2. Opacity and Cursor Pointer

### 2.1 Opacity

透明度 0 - 1

### 2.2 Cursor

[MDN Cursor](https://developer.mozilla.org/en-US/docs/Web/CSS/cursor)

Keyword Values

```css
/* Keyword value */
cursor: auto;
cursor: pointer;
cursor: help;
cursor: wait;
cursor: grab;

...

cursor: zoom-out;
```

## 3. Transition

CSS [transitions](https://developer.mozilla.org/en-US/docs/Web/CSS/transition#constituent_properties) provide a way to control animation speed when changing CSS properties.

### 3.1 Transition Constituent Properties

- `transition-property`
- `transition-duration`
- `transition-delay`
- `transition-timing-function`

### 3.2 Transition Constituent Syntax

```css
/* Apply to 1 property */
/* property name | duration */
transition: margin-right 4s;

/* property name | duration | delay */
transition: margin-right 4s 1s;

/* property name | duration | easing function */
transition: margin-right 4s ease-in-out;

/* property name | duration | easing function | delay */
transition: margin-right 4s ease-in-out 1s;

/* Apply to 2 properties */
transition: margin-right 4s, color 1s;

/* Apply to all changed properties */
transition: all 0.5s ease-out;
```

### 3.3 2D Transform

translate: 移動位置

```css
transform: translate(-50%, -50%);
```

rotate: 旋轉

```css
transform: rotate(30deg);
```

scale: 縮放

```css
transform: scale(3);
```

### 3.4 3D Transform

rotateX: 依 x 軸轉動

```css
transform: rotateX(30deg);
```

rotateY: 依 y 軸轉動

```css
transform: rotateY(30deg);
```

rotateZ: 依 z 軸轉動

```css
transform: rotateZ(30deg);
```

## 4. Animation

[Animation](https://developer.mozilla.org/en-US/docs/Web/CSS/animation)

### 4.1 Animation Attributes

- `@keyframes`
- `animation-name`
- `animation-duration`
- `animation-fill-mode`
  - sets how a CSS animation applies styles to its target before and after its execution.
- `animation-delay`
- `animation-iteration-count`
- `animation-direction`: `normal` 、 `reverse` 、 `alternate`
- `animation-timing-function`

**以上可以簡化成**
`animation: name duration timing-function delay iteration-count direction fill-mode`

### 4.2 自製動畫 Example

Animation - cross

```css
@keyframes cross {
  from {
    top: 0px;
    left: 0px;
  }
  to {
    background-color: red;
    top: 400px;
    left: 400px;
  }
}
```

Using

```css
/* @keyframes name | duration | timing-function | iteration-count | direction */
animation: cross 1s ease-in infinite alternate;
```

## 5. Other Topics in CSS

### 5.1 border-radius

[MDN border-radius](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius)

- The radius applies to the whole [`background`](https://developer.mozilla.org/en-US/docs/Web/CSS/background), even if the element has no border
- 跟 margin、padding 一樣有多種寫法，有分上下左右
- `border-radius:50%` 就可以變圓形

Example

```css
border-radius: 1em / 5em;

/* ... is equivalent to: */
border-top-left-radius: 1em 5em;
border-top-right-radius: 1em 5em;
border-bottom-right-radius: 1em 5em;
border-bottom-left-radius: 1em 5em;
```

### 5.2 overflow

[MDN overflow](https://developer.mozilla.org/en-US/docs/Web/CSS/overflow)

- 圖形超出頁面
- Constituent properties
  - `overflow-x`
  - `overflow-y`
- Syntax
  ```css
  /* Keyword values */
  overflow: visible;
  overflow: hidden;
  overflow: clip;
  overflow: scroll;
  overflow: auto;
  overflow: hidden visible;
  ```

### 5.3 float and clear

舊的排版方式，現在大都用 **flexbox**
