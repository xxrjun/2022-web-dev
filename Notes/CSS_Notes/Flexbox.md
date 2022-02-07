# Flexbox

**[A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)**

# 1. Flex Direction

---

- `display: flex;`
- `flex-direction:`
    - `row` (default)、 `column` 、 `row-reverse` 、 `column-reverse`

# 2. Flex 設定重點整理

---

## Flex container

- `width` 、 `height`
- `display: flex;`
- `flex-wrap:` 設定要不要要固定寬度

## Flex height

- no setting 的話寬度由 `content` 決定
- unit setting 會是 fixed 的

## Flex width

- no setting 的話寬度由 `content` 決定
- unit setting 設定的會是 max  width
- `flex-grow` 設定放大倍率
- `flex-shrink` 設定縮小倍率
- `flex-basis` 設定 min width
- 上面三兄弟簡化
    
    ```css
    
    /* grow shrink basis */
    flex: 1 1 200px;
    
    /* same as */
    /flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 1; 
    ```
    

# 3. Positions in Flex

---

## justify-content

跟 **direction 平行** 的位置

**Syntax**

```css
/* Positional alignment */
justify-content: center;     /* Pack items around the center */
justify-content: start;      /* Pack items from the start */
justify-content: end;        /* Pack items from the end */
justify-content: flex-start; /* Pack flex items from the start */
justify-content: flex-end;   /* Pack flex items from the end */
justify-content: left;       /* Pack items from the left */
justify-content: right;      /* Pack items from the right */
```

## align-items

跟 **direction 垂直**的位置

**Syntax**

```css
/* Basic keywords */
align-items: normal;
align-items: stretch;  /* flex item 高度沒設定的話預設是這個 */

/* Positional alignment */
/* align-items does not take left and right values */
align-items: center; /* Pack items around the center */
align-items: start; /* Pack items from the start */
align-items: end; /* Pack items from the end */
align-items: flex-start; /* Pack flex items from the start */
align-items: flex-end; /* Pack flex items from the end */
```

# 4. Flex grow 計算

---

- 假設今天有一個 `width=1000px` 的 container
    
    裡面有兩個 boxes
    
    1. box1  : `flex: 3 1 100px;`
    2. box2 : `flex: 1 1 100px;`
- 兩個 box 的 total width 會是多少 ?
    
    **寬度先減去兩個 flex-basis**
    
    1000 - 100px - 100px = 800px
    
    |  | flex-basis | flex-grow | remain part | total width |
    | --- | --- | --- | --- | --- |
    | box1 | 100px | 3 | 800px * (3 / 4) = 600px | 100px + 600px = 700px |
    | box2 | 100px | 1 | 800px * (1 / 4) = 200px | 100px + 200px = 300px |