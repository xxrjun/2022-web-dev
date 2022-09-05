# EJS

# What is EJS ?

- EJS stands for Embedded JavaScript.
- EJS is a **simple templating language** that lets you generate HTML markup with plain JavaScript.
- It’s a module in npm.

# Related Links

- [npm - ejs](https://www.npmjs.com/package/ejs)
- [EJS Docs](https://ejs.co/#docs)
- VSSode 裡面有 ejs language support 的 extension

# I**nstallation**

```bash
$ npm install ejs
```

# **Features**

- Control flow with `<% %>`
- Escaped output with `<%= %>` (escape function configurable)
- Unescaped raw output with `<%- %>`
- Newline-trim mode ('newline slurping') with `%>` ending tag
- Whitespace-trim mode (slurp all whitespace) for control flow with `<%_ _%>`
- Custom delimiters (e.g. `[? ?]` instead of `<% %>`)
- Includes
- Client-side support
- Static caching of intermediate JavaScript
- Static caching of templates
- Complies with the [Express](http://expressjs.com/) view system

# **Example**

```html
<% if (user) { %>
<h2><%= user.name %></h2>
<% } %>
```

Try EJS online at: [https://ionicabizau.github.io/ejs-playground/](https://ionicabizau.github.io/ejs-playground/).

# **Basic usage**

要 render 的 ejs 文件要放在 **views** folder 並取名為 **index.ejs**

```jsx
let template = ejs.compile(str, options);
template(data);
// => Rendered HTML string

ejs.render(str, data, options);
// => Rendered HTML string

ejs.renderFile(filename, data, options, function (err, str) {
  // str => Rendered HTML string
});
```

It is also possible to use `ejs.render(dataAndOptions);` where you pass everything in a single object. In that case, you'll end up with local variables for all the passed options. However, be aware that your code could break if we add an option with the same name as one of your data object's properties. Therefore, we do not recommend using this shortcut.
