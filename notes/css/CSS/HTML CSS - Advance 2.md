# HTML / CSS - Advance 2

前情提要：本章節內容較為分散，偏向經驗談！

# 1. User Snippet

---

- snippet
- trigger

### 1.1  **Steps**

VSCode user snippet → `html.json` → 貼上用 snippet generator 轉好的 snippet

**snippet generator** → [https://snippet-generator.app/](https://snippet-generator.app/)

### 1.2  範例

在 `html.json` 中新增

```css
"bookmark": {
		"prefix": "icon",
		"body": [
			"<!-- head icon of the page -->",
			"  <link rel=\"shortcut icon\" href=\"./src/taiwanIcon.png\" />",
			"  <link rel=\"bookmark\" href=\"./src/taiwanIcon.png\" />"
		],
		"description": "bookmark"
	}
```

那麼只要打 `icon` 選擇 `bookmark` 這個 trigger 就可以跑出

```css
<!-- head icon of the page -->
    <link rel="shortcut icon" href="./src/taiwanIcon.png" />
    <link rel="bookmark" href="./src/taiwanIcon.png" />
```

# 2. Free Pictures

---

- unsplash
    
    [Beautiful Free Images & Pictures | Unsplash](https://unsplash.com/)
    
- pixels
    
    [](https://www.pexels.com/?locale=en-us)
    

# 3. Free Icons

---

要注意好版權問題，是否全免費、可否商用、是否要標明出處等

下載 `.svg` 向量檔可以丟進 figma 編輯。向量檔就算放大畫質也不會變差。

- **Icons8**
    
    [Free Icons, Clipart Illustrations, Photos, and Music](https://icons8.com/)
    
- **Font Awesome**
    
    [Font Awesome](https://fontawesome.com/)
    
- **TW Icon Fonts**
    
    [https://www.twicon.page/](https://www.twicon.page/)
    

# 4. Free Animation and SVG

---

- **unDraw** (全免費)
    
    [https://undraw.co/illustrations](https://undraw.co/illustrations)
    
- **freepik** (要標明出處)
    
    [https://www.freepik.com/search?author=13755764&authorSlug=stories&format=author](https://www.freepik.com/search?author=13755764&authorSlug=stories&format=author)
    

# 5. HTML Bookmark and Scroll Behavior

---

## 5.1  HTML Bookmark

- 將 `href` 的值設為 `#id`
    
    ```html
    <a href="#id"></a>
    ```
    
- 目錄範例
    
    ```html
    <h2>目錄</h2>
        <ol>
            <li><a href="#protect">保護熊貓</a></li>
            <li><a href="#knowlegde">熊貓保護知識</a></li>
            <li><a href="#recent">近年發展</a></li>
            <li><a href="#links">Links</a></li>
            <li><a href="#pics">熊貓照片</a></li>
    
        </ol>
    ```
    

不想直接跳，想要有滾動效果？ Scroll Behavior !

## 5.2  Scroll Behavior

在 CSS 文件中加入

```css
html{
  scroll-behavior: smooth;
}
```

# 6. Local Font

---

**字體三種方式**

1. CSS safe fonts
2. Google fonts
3. **Local fonts：直接內建在網頁裡**

**步驟示範**

1. 下載想要用的字體 (要注意版權問題)
2. 到 CSS 文件中設定 `@font-face` 並用選擇器更改字體
    
    ```css
    @font-face{
      font-family: 'fontName';
      src:url(./JasonHandwriting5.ttf)
    }
    
    *{
      font-family:'fontName', "JasonHandwriting5";
    }
    ```
    

# 7. SASS

---

VSCode 下載 **Live Sass Compiler**

### 7.1  **步驟範例**

1. 創建 `styles` folder 並創建 `style.scss` 
2. 在 `style.scss` 中輸入我們要的 css 內容
3. 按下右下角 Watch Sass，編譯成功後會有兩個按 `style.css` 、 `style.css.map`

比較 `style.scss` 跟編譯後產生的 `style.css` 的差異

```scss
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

```

```css
* {
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
```

多了 `-webkit-box-sizing: border-box;` ，讓我們的網頁到不同排版引擎也不受影響

### 7.2  總結：**使用 Live Sass Compiler 可以使我們的 `.css` 檔案更能應對不同環境**

### 7.3  scss 好用特性

1. **nested CSS syntax**

Example

```scss
/* In .scss */
header  {
  h1 {
    color: green;
  }
}
```

會編譯成

```css

header h1 {
  color: green;
}
```

1. **variables**

Example

變數前要加 `$`

```scss
/* In .scss */
$themeColor: yellow;

header  {
  h1 {
    color: $themeColor;
  }
}
```

會編譯成

```css
header h1 {
  color: yellow;
}
```

1. **self &**
    - 要加 `&` 代表指向自己，符合 nested CSS  的精神

Example

```css
/* In .scss */
header {
  &:hover{
    background-color: green;
  }
}
```

會編譯成

```css
header:hover {
  background-color: green;
}
```

1. **import**
    - 將要分類包裝的 code 丟進創建的 `.scss` 檔案
    - 在要使用時導入已達到重複使用

Example

創建 `_header.scss` 並放入 code

```scss
/* In _header.scss */
header  {
  h1 {
    color: $themeColor;
  }
  &:hover {
    background-color: green;
  }
}
```

在 `style.scss` 內 import

```css
@import "./header";
```

1. **mixin**
    - `.scss` 中的 function
    - `@mixin` 命名設定函數
    - `@include` 使用函數

Example

```scss
/* In .scss */
@mixin flexbox($direction) {
  display: flex;
  flex-direction: $direction;
}

div.link1 {
  @include flexbox(column);
}
```

# 8. Object-fit

---

The **`object-fit`** CSS property sets how the content of a [replaced element](https://developer.mozilla.org/en-US/docs/Web/CSS/Replaced_element), such as an `img` or `video`, should be resized to fit its container.

**Syntax**

```css
/* Values */
object-fit: contain;
object-fit: cover;
object-fit: fill;
object-fit: none;
object-fit: scale-down;
```