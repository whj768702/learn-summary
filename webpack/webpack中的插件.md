- [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin) 生成html文件
  1. `title`:生成文件的title
  2. `filename`:生成文件的名字,默认`index.html`
  3. `template`:模板文件
  4. `inject`:true|'head'(head中插入)|'body'(body底部插入)|false,插入的资源文件
  5. 'favicon':标签处图标
  6. minify:{...}|false [html-minifier](https://github.com/kangax/html-minifier#options-quick-reference)的`options'
  7. `hash`:true|false scripts和css文件中添加hash值
  8. `cache`:true(default)|false 文件变动时才发表
  9. `showErrors`:true(default)|false 在HTML页面写入错误详情
  10. `chunks`:允许增加一些块文件
  11. `chunksSortMode`:none|auto(default)|dependency|manual|{function} 加入的块如何排序
  12. `excludeChunks`:排除一些块
  13. `xhtml`:true|false(default) xhtml兼容
- [uglifyjs-webpack-plugin](https://doc.webpack-china.org/plugins/uglifyjs-webpack-plugin/) 压缩js
- [DefinePlugin](https://doc.webpack-china.org/plugins/define-plugin/)允许创建一个再编译时可以配置的全局常量