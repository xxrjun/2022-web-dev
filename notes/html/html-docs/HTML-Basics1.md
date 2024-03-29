# HTML-Basics 1

- [HTML-Basics 1](#html-basics-1)
  - [1. In HTML, All Tags are Objects](#1-in-html-all-tags-are-objects)
  - [2. VSCode Extensions](#2-vscode-extensions)
  - [3. HTML Skeleton](#3-html-skeleton)
    - [`head` tag : 網頁背後設定與編碼](#head-tag--網頁背後設定與編碼)
      - [一些 head 屬性](#一些-head-屬性)
    - [`body` tag : 網頁呈現內容 - 所有 html 文件都需要 head and body](#body-tag--網頁呈現內容---所有-html-文件都需要-head-and-body)
  - [4. HTML Common Tags](#4-html-common-tags)
    - [Common Tags](#common-tags)
    - [可以放置連結的 Anchor Tag](#可以放置連結的-anchor-tag)
    - [Img Tag](#img-tag)
    - [List Tag](#list-tag)
  - [5. Table 表格](#5-table-表格)
    - [`table` Tags](#table-tags)
    - [Table Example Code](#table-example-code)

## 1. In HTML, All Tags are Objects

Objects = Attributes + Methods

## 2. VSCode Extensions

| Extension                                                                                                          | Description                              |
| ------------------------------------------------------------------------------------------------------------------ | ---------------------------------------- |
| [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)                           | 存檔自動重整網頁，不用每次都要按 F5 重整 |
| [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)               | 自動重新命名 HTML/XML tag                |
| [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)            | 程式碼自動對齊排版                       |
| [Bracket Pair Colorizer 2](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer-2) | 增加程式碼分層可讀性                     |
| [HTML Snippets](https://marketplace.visualstudio.com/items?itemName=abusaidm.html-snippets)                        | 新增快捷語                               |
| [Live Sass Compiler](https://marketplace.visualstudio.com/items?itemName=ritwickdey.live-sass)                     | sass 檔案存檔會自動重整網頁              |

## 3. HTML Skeleton

### `head` tag : 網頁背後設定與編碼

這邊可以放置網頁的 metadata、編碼、作者、簡介以及 CSS 設定等等

#### 一些 head 屬性

| robots      | 讓 google 找得到 |
| ----------- | ---------------- |
| description | 網頁簡介         |
| author      | 網頁作者         |

```html
<meta name="robots" content="index, follow" />
<meta name="description" content="教導熊貓基本知識與保育." />
<meta name="author" content="rjun" />
```

其他 head 屬性可以參考 [https://htmlhead.dev/](https://htmlhead.dev/)

### `body` tag : 網頁呈現內容 - 所有 html 文件都需要 head and body

```html
<!DOCTYPE html>
<html lang="zh-Hant">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>rjun's page</title>
  </head>
  <body></body>
</html>
```

很難記住全部？ 輸入 `!` 按第一個就會全部跑出來

## 4. HTML Common Tags

### Common Tags

| tag syntax   | name          |
| ------------ | ------------- |
| `h1` ~ `h6`  | Heading Tag   |
| `p`          | Paragraph Tag |
| `a`          | Anchor Tag    |
| `img`        | Img Tag       |
| `ul` 、 `ol` | List Tag      |

### 可以放置連結的 Anchor Tag

加入超連結，在 `head` 中 `base` tag 要加入 `href` 或 `target`

```html
<a href="https://www.foodpanda.com.tw/">Foodpanda</a>
<a href="https://zh-yue.wikipedia.org/wiki/%E7%86%8A%E8%B2%93"> 熊貓維基百科</a>
```

- `_blank` : 網頁以新分頁開啟 ；`_self` ： 以當前頁開啟
  ```html
  <base target="_blank" />
  ```

### Img Tag

- `alt` 代表當今天讀取不到 `src` 資料時所顯示的東西

```html
<img src="./src/panda.jpg" height="300" alt="panda" />
```

### List Tag

- `ol` (ordered list) ：數字為列表頭
- `ul` (unordered list)：圓點為列表頭

```html
<ol>
  <li>2008：團團圓圓到台灣</li>
  <li>2013：圓仔出生</li>
</ol>
```

## 5. Table 表格

### `table` Tags

| tag syntax             | tag name      |
| ---------------------- | ------------- |
| `th`                   | table heading |
| `tr`                   | table row     |
| `td`                   | table data    |
| `colspan` or `rowspan` | 製作擴展框框  |

### Table Example Code

使用 `thead`、 `tbody` 、 `tfoot` 可以方便閱讀程式碼

```html
<table>
  <thead>
    <tr>
      <th colspan="3">熊貓國家表格</th>
    </tr>
    <tr>
      <th>國家</th>
      <th>年份</th>
      <th>熊貓</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>墨西哥</td>
      <td>1975</td>
      <td>迎迎、貝貝</td>
    </tr>
    <tr>
      <td>台灣</td>
      <td>2008</td>
      <td>團團、圓圓</td>
    </tr>
  </tbody>
</table>
```
