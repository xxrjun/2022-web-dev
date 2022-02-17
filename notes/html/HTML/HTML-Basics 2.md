**HTML-Basics 2**
# 1. Form 表單
### 1.1  表單**會與後端 database 做連結**
- action: 資料要傳到的目的地
- method - GET and POST
### 1.2  `form` tags
| input | 有設定 name=””  才有辦法交出去 |
| --- | --- |
| label | label 的 for 對應 input 的 id="" |
| select |  |
| button |  |
### 1.3  Simple Example
預設的 `method` 是 `GET` 
```html
<form action="" method="GET">
    <label for="myname">姓名</label>
    <input id="myname" type="text" name="InputName"/>
    <label for="mytele">電話</label>
    <input id="mytele" type="text" name="InputTele"/>

    <button type="submit">提交表單</button>
</form>
```
當按下 `button` 後可以看到輸入的 `InputName` and `InputTele`  
```html
myForm.html?InputName=Panda&InputTele=0000
```
# 2. `input` tag
### 2.1  Types
- `**checkbox**`
    - value 可預設值，會傳送
        
        `name=value`
        
    - 若要預設已勾選可以加入 `checked`
```html
<input id="subscription" 
	type="checkbox" 
	name="Subscription" 
	value="subscribed" 
	checked>
<label for="subscription">訂閱電子報</label>`
```
- `**email**`
    - `required` 代表一定要填
    - `placeholder` 提示作用

```html
<label for="email">信箱</label>
<input id="email"
       type="email"
       name="Email"
			 placeholder="請輸入真實姓名"
       required />
```
- `**number**`
    - `min`, `max` 設定允許範圍
    - `step` 設定一次增減量
```html
<label for="age">年齡</label>
<input id="age"
       type="number"
       name="Age"
       value="18"
       min="1"
       max="150"
			 step="1"
       required />
```
- `**password**`
    - 不想顯示密碼在網址上，因此 `name=””` 跟 `value=""`
    - `minlength` 跟 `maxlength` 設定長度範圍
```html
<label for="password">密碼</label>
<input id="password"
	     type="password"
	     name=""
	     value=""
	     minlength="8"
	     maxlength="20"
	     required />
```
- `**radio**`
    - 只能選擇選項中的其中一個
```html
<input id="male"
       type="radio"
       name="gender"
       value="male"
       required />
<label for="male">男性</label>

<input id="female"
       type="radio"
       name="gender"
       value="female" />
<label for="female">女性</label>

<input id="others"
       type="radio"
       name="gender"
       value="others" />
<label for="others">其他</label>
```
- `**range**`
    - 拉桿
```html
0<input type="range"
	       step="10"
	       min="0"
	       max="100"
	       name=""
	       value="">100
```
### 2.2  Attributes
| checked | 預設勾選 |
| --- | --- |
| max & min | 數字上下限 |
| maxlength & minlength | 字串長度上下限 |
| placeholder | 提醒 |
| required | 必填 |
| value | 一定要: radio 、 range...
不一定要： text... |
# 3. `select` tag
- `select` 中有 `option`
- 第一行加入 `<option></option>` 避免預設
```html
<label for="gender">Gender</label>
<select name="gender" id="gender" required>
    <option></option>
    <option value="male">男性</option>
    <option value="female">女性</option>
    <option value="others">其他</option>
</select>
```
# 4. `datalist` and `textarea`
### 4.1 `datalist`
`input` 中的 `list` 屬性對應 `datalist` 的 `id`
```html
<label for="area">地區：</label>
<input type="text" 
			 list="areaList" 
			 id="area" 
		   name="area">
<datalist id="areaList">
       <option value="台北市">台北</option>
       <option value="台中市">台中</option>
       <option value="高雄市">高雄</option>
</datalist>
```
### 4.2  `textarea`
 可以用 `rows` and `cols` 設定長寬
```html
<label for="suggestion">給網站提供建議:</label>
<br />
<textarea id="suggestion" 
				  name="suggestion"
					rows="10" 
				  cols="30" 
					placeholder="謝謝您提供建議！">
</textarea>
```
# 5. Other HTML Ideas
- **comment**
    - 在 html 中的註解 `<!-- -->`
- **block、inline**
    - **block** : `width:100%` ，寬度等於 Device width (裝置寬度)
    - **inline** : 寬度視內容寬度而定
- **br、hr**
    - `br` : 斷行
    - `hr` : 水平線
- **div、 span**
    - `div` : Generic block-level container
    - `span` : Generic inline container
- **Entity codes**
    - HTML Symbols → [https://www.htmlsymbols.xyz/](https://www.htmlsymbols.xyz/)
- **index.html**
    - 一個網頁中最重要的檔案
- **Icon**
    - 網頁書籤圖
    - 要放在 `head` 裡
    
    ```html
    <link rel="shortcut icon" href="/src/pandaIcon.png"/>
    <link rel="bookmark" href="/src/pandaIcon.png"/>
    ```   
- **Self-Closing Tags**
    - Self-closing tags represent **void elements.**
    Void elements like `br` or `img` cannot contain any contents.
# 熊貓問卷調查 Code
```html
<!DOCTYPE html>
<html lang="en">

<head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>熊貓問卷調查</title>

       <!-- 網頁 bookmark -->
       <link rel="shortcut icon" href="/src/pandaIcon.png" />
       <link rel="bookmark" href="/src/pandaIcon.png" />
</head>

<body>
       <!-- 表單 -->
       <form action="" method="GET">
              <!-- 姓名 : text -->
              <label for="myname">姓名</label>
              <input id="myname" type="text" name="InputName" placeholder="請輸入真實姓名" required />
              <br />

              <!-- 性別 : select -->
              <label for="gender">Gender</label>
              <select name="gender" id="gender" required>
                     <option></option>
                     <option value="male">男性</option>
                     <option value="female">女性</option>
                     <option value="others">其他</option>
              </select>
              <br />

              <!-- 電話 : input text-->
              <label for="mytele">電話</label>
              <input id="mytele" type="text" name="InputTele" placeholder="請輸入電話" required />
              <br />

              <!-- 信箱 : input emal -->
              <label for="email">信箱</label>
              <input id="email" type="email" name="Email" placeholder="請輸入信箱" required />
              <br />

              <!-- 年齡、身高 : input number -->
              <label for="age">年齡</label>
              <input id="age" type="number" name="Age" value="18" min="1" max="150" step="1" required />
              <br />
              <label for="height">身高</label>
              <input id="height" type="number" name="Height" min="30" max="240" step="0.1" />
              <br />

              <!-- 地區 : input text, list ; datalist-->
              <label for="area">地區：</label>
              <input type="text" list="areaList" id="area" name="area">
              <datalist id="areaList">
                     <option value="台北市">台北</option>
                     <option value="台中市">台中</option>
                     <option value="高雄市">高雄</option>
              </datalist>
              <br />

              <!-- 建議 : textarea-->
              <label for="suggestion">給網站提供建議:</label>
              <br />
              <textarea id="suggestion" name="suggestion" rows="10" cols="30" placeholder="謝謝您提供建議！">
              </textarea>
              <br />

              <!-- 訂閱 : input checked box -->
              <input id="subscription" type="checkbox" name="Subscription" value="subscribed" checked>
              <label for="subscription">訂閱熊貓電子報</label>
              <br />

              <!-- 密碼 : input password -->
              <label for="password">密碼</label>
              <input id="password" type="password" name="" value="" minlength="8" maxlength="20" required />
              <br />

              <!-- 拉桿 : input range -->
              0<input type="range" step="10" min="0" max="100" name="" value="">100
              <br />

              <!-- 提交表單 button submit-->
              <button type="submit">提交表單</button>
       </form>
</body>

</html>
```
