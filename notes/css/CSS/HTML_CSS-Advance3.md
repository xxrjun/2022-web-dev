# HTML / CSS - Advance 3

## 1. Accessibility

`f12` → `accessibility`

### 1.1 Contrast

[Color contrast - MDN](https://developer.mozilla.org/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable/Color_contrast)

選取適合的對比度

| Type of content                                                                 | Minimum ratio (AA rating) | Enhanced ratio (AAA rating) |
| ------------------------------------------------------------------------------- | ------------------------- | --------------------------- |
| Body text                                                                       | 4.5 : 1                   | 7 : 1                       |
| Large-scale text (120-150% larger than body text)                               | 3 : 1                     | 4.5 : 1                     |
| Active user interface components and graphical objects such as icons and graphs | 3 : 1                     | Not defined                 |

### 1.2 Keyboard

如果沒有滑鼠也能操作

### 1.3 Text Label

舉例： `img` 標籤沒有加上 `alt`

#### Optional : title attribute

不是放在 `head` 裡的 `title` 標籤，而是 tag 中的屬性

將滑鼠移到物件上就會顯示 `title=` 的內容

## 2. Sticky Header

可以到 [\*\*CSS Tricks](https://css-tricks.com/)\*\* 找到很多酷技巧

例如我們要 sticky header 有 shadow 效果，這樣在滾滾輪時區隔會比較明顯

**Example**

```css
header {
  position: sticky;
  z-index: 5;
  top: 0;
  background-color: white;
  box-shadow: 0 5px 3px -3px black;
}
```

## 3. Scrollbar

客製化 scrollbar → [https://www.w3schools.com/howto/howto_css_custom_scrollbar.asp](https://www.w3schools.com/howto/howto_css_custom_scrollbar.asp)

**Note:** Custom scrollbars are not supported in Firefox or in Edge, prior version 79.

**Example**

```css
/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
```

## 4. Height with percentage

**Problem**

[Why doesn't height: 100% work to expand divs to the screen height?](https://stackoverflow.com/questions/7049875/why-doesnt-height-100-work-to-expand-divs-to-the-screen-height)

**Answer**

In order for a percentage value to work for height, the parent's height must be determined. The only exception is the **root** element `<html>`, which can be a percentage height.

So we should add this

```css
html {
  height: 100%;
}
```

⇒ 要先設定祖先的高度才可以用 `%` 的方式成功表示

## 5. Scale Image Effect

先把 `img` 放入一個 container

```html
<div class="image-container">
  <img src="./src/Pictures/braden-jarvis-prSogOoFmkw-unsplash.jpg" alt="picture" />
</div>
```

在 `.scss` 檔案中加入

```scss
div.image-container {
  overflow: hidden; // 有這行照片才不會超過原本的範圍
  width: 15vw;
  height: 15vw;
  border-radius: 50%;
  img {
    width: 15vw;
    height: 15vw;
    border-radius: 50%;
  }
  img:hover {
    transform: scale(1.2);
  }
}
```

就可以有酷酷的效果了
