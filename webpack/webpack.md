#### entry

- 用法

  `entry: string | Array<string>`

  ```javascript
  module.exports = {
    entry: './main.js'
  }
  module.exports = {
    entry: ['.main.js', './app.js']
  }
  module.exports = {
    entry: {
      main: './main.js',
      app: './app.js'
    }
  }
  ```

#### output

- 用法

  `filename`：编译文件的文件名，推荐：`main.js||bundle.js||index.js`

  `path`：对应一个绝对路径，打包的目录

  ```javascript
  module.exports = {
    output: {
      filename: 'bundle.js',
      path: '/home/project/public'
    }
  }
  ```

- 选项

  `chunkFilename`

  - `[id]`:被`chunk`的`id`替换

  - `[name]`:被`chunk`的`name`替换(没有`name`时使用`id`替换)

  - `[hash]`:被`compilation`生命周期的`hash`替换

  - `[chunkhash]`:被`chunk`的`hash`替换

    ```javascript
    module.exports = {
      output: {
        path: '/home/project/public',
        filename: '[name].js'
      }
    }
    ```

  `crossOriginLoading`

  - `false`:禁用跨域加载(默认值)
  - `anonymous`:启用跨域加载,发送不带凭据(credential)的请求
  - `use-credentials`:启用跨域加载,发送带凭据(credential)的请求

  `sourceMapFilename`

  - 默认值是:`[file].map`


  - `[file]`:被`JavaScript`文件的文件名替换
  - `[id]`:被`chunk`的`id`替换
  - `[hash]`:被`compilation`生命周期的`hash`替换

#### module

- `rules`:模块规则(配置加载器、解析器等选项)

  ```javascript
  module.export = {
    ...
    rules: [
    //这里是匹配条件，每个选项都接收一个正则表达式或字符串
    //test和include具有相同的作用，都是必须匹配选项
    //exclude是必须不匹配选项(优先级高于test和include)
    //最佳实践:
    //- 只在test和文件名匹配中使用正则表达式
    //- 在include和exclude中使用绝对路径数组
    //- 尽量避免exclude，更倾向于使用include
      {
        test: /\.js$/,
   	  include: [
          path.resolve(__dirname, 'app')
   	  ],
        exclude:[
          path.resolve(__dirname, 'app/node_module')
        ],
        //issuer:被请求资源(requested the resource)的模块文件的绝对路径。是导入时的位置。
        issuer: { test, include, exclude}
        
         loader: 'babel-loader',
         options: {
           presets: ['es2015']
         }
      },
      {
        test: '\.html$',
        use: [
          //应用多个loader和选项
          'htmllint-loader',//loader的简写方式
          {
            loader: 'html-loader',
            options: {
              ...
            }
          }
        ]  
      }  
    ]
  }
  ```

  ​

#### plugins

- 用法

  `plugin`可以携带参数/选项，必须在`webpack`配置中，向`plugins`属性传入`new`实例

  ```javascript
  module.exports = {
    ...
    plugins: [
      new webpack.optimize.UglifyJsPlugin()
    ]
  }
  ```

  ​