css中选择器

1. 上下文选择符

   ```css
   /*
   标签1 标签2{声明}:在标签2的祖先元素是标签1时,才会被选中。
   */

   ```

2. 特出的上下文选择符

   1. 子选择符：标签1>标签2

      标签1必须是标签2的父元素

   2. 紧邻同胞选择符：标签1+标签2

      标签2必须**紧**跟在其**同胞**标签1的后面

   3. 一般同胞选择符：标签1~标签2

      标签2必须跟(不一定紧跟)在其同胞标签1后面

   4. 通用选择符：*

      通用选择符*是一个通配符，匹配任何元素

3. ID和类选择符

   1. 类属性：.

      HTML元素中的class属性

   2. ID属性：# 

4. 属性选择符

   1. 属性名选择符：标签名[属性名]
      img[title]{border:2px solid blue;}
   2. 属性值选择符：标签名[属性名="属性值"]
      img[title="red"]{border:4px solid green;}:在图片的title属性值为red的情况下，为图片添加边框。

伪类

1. UI伪类

   1. 链接伪类

      - link:链接等待用户点击
      - visited:用户此前点击过这个链接
      - hover:鼠标指针正悬停在链接上
      - active:链接正在被点击(鼠标在元素上按下，还没有释放)

   2. element:focus

      ```css
      input:focus{border:1px solid blue;}/*光标选中input时，增加蓝色边框*/
      ```

   3. :target伪类
      如果用户点击一个指向页面中其他元素的链接，则那个元素就是target,可以用:target伪类选中它

2. 结构化伪类

   1. :first-child和:last-child
      :first-child代表一组**同胞元素**中的第一个元素，:last-child代表最后一个

   2. :nth-child
      element:nth-child(n)

      ````css
      li:nth-child(3)/*选择一组列表项中的每个第三项*/
      ````

伪元素

1. ::first-letter伪元素
   element::first-letter

   ```css
   p::first-letter{font-size:300%;}/*p元素内容的第一个字母大小是300%*/
   ```

2. ::first-line伪元素
   element::first-line:可以选中文本段落的第一行

3. ::before和::after伪元素
   elment::before和elment::after：用于在特定元素前面或后面添加特殊内容

   ```css
   p::before{content:"Age:"}
   p::after{content:" years."}
   /*
   <p>25</p>
   Age:25 years.
   */
   ```


定位元素

1. margin叠加外边距
   ps:只有**垂直**外边距会叠加，**水平**外边距不会叠加。

   ```css
   p{margin-top:50px;margin-bottom:30px;}
   /*
   <p id="p1">111</p>
   <p id="p2">111</p>
   p1和p2之间外边距不是50+30=80px,而是50px,较宽的外边距决定两个元素最终离多远.
   */
   ```

2. 盒模型

   - 没有宽度的盒子
     没有(就是没有设置width的)宽度的元素始终会扩展到填满其父元素的宽度为止。添加水平边框、内边距和外边距，会导致内容宽度减少，减少量等于水平边框、内边距和外边距的和。
   - 有宽度的盒子
     为设定了宽度的盒子添加边框、内边距和外边距，会导致盒子扩展得更宽。实际上，盒子的width属性设定的只是盒子**内容区的宽度**，而非盒子要占据的水平宽度。

3. 浮动与清除

   1. 浮动float
      浮动元素脱离了文档流，其父元素也看不到它，因而而不会包围它。
      浮动非图片元素时，**必须给它设定宽度**，否则后果难以预料。图片无所谓，因为它本身有默认的宽度。
   2. 围住浮动元素的三种方法
      - 为父元素添加overflow:hidden
        `overflow:hidden`声明的真正用途是防止包含元素被超大内容撑大。应用`overflow:hidden`之后，**包含元素**依然**保持其设定的宽度**,而超大的字内容则会被容器剪切掉。除此之外，`overflow:hidden`还有一个作用，即它能可靠地迫使父元素包含其浮动的子元素。
      - 同时浮动父元素
        浮动父元素后，不管其子元素是否浮动，它都会紧紧地包围(也称收缩包裹)住它的子元素。因此，需要使用`width:100%`再让父元素与浏览器同宽。
      - 添加非浮动的清除元素
        给父元素的最后添加一个非浮动的子元素，然后清除该子元素。

4. 定位
   `position:static|relative|absolute|fixed.`默认是static

   1. 静态定位
      默认情况是static
   2. 相对定位
      相对它原来在文档流中的位置(或者默认位置)，可以使用top、right、bottom和left等属性来改变它的位置。这个元素原来占据的空间没有动，其他元素也没动。
   3. 绝对定位
      把元素彻底从文档流中拿出来。绝对定位元素默认的定位上下文是body元素，通过top、right、bottom、left设定的偏移值，决定了元素相对于body元素的位置。
      绝对定位元素默认的定位上下文是body，这是因为body是标记中所有元素唯一的祖先元素，而实际上，**绝对定位元素的任何祖先元素都可以成为它的定位上下文，只要把相应祖先元素的position设定为relative即可**。
   4. 固定定位
      把元素彻底从文档流中拿出来，它的定位上下文是视口(浏览器窗口或手持设备的屏幕)，因此它不会随页面滚动儿滚动。

背景

1. 相关属性

   ```css
   background-color|background-image|background-repeart|background-position|background-size|background-attachment|background-clip|background-origin|background-break
   ```

2. 背景图片background-image

3. 背景重复background-repeat
   `background-repeat:repeat|repeat-x|repeat-y|no-repeat`
   `background-repeat:round`:确保图片不会被剪切，通过调整图片大小来适应背景区域.
   `background-repeat:space`:确保图片不被剪切，通过图片间添加空白来适应背景区域.

4. 背景位置background-position
   `background-position:top|left|bottom|right|center`,任意两个组合合起来都可以作为该属性的值.
   背景位置的值：关键字、百分比、绝对火相对单位的数值。可以使用两个值分别设定水平和垂直位置。

5. 背景尺寸background-size
   `background-size:百分比|数值|cover|contain`

   1. 50%:缩放图片，使其填充背景区的一半。
   2. 100px 50px:把图片调整到100px宽，50px高。
   3. cover:拉大图片，使其完全填满背景区，保持宽高比。
   4. contain:缩放图片，使其恰好适合背景区，保持宽高比。

布局

1. 三栏-固定宽度布局

   ```html
   <style>
     #wrapper{width:960px;margin:0 auto;border:1px solid;}
     nav{width:150px;background:#dcd9c0;}
     nav li{list-style-type:none;}
     article{width:600px;float:left;background:#ffed53;}
     aside{width:210px;float:left;background:#3f7ccf;}
     header{background:#foo;}
     footer{text-align:center;clear:left;}
   </style>
   <body>
     <div id="wrapper">
       <header>a fiexd-width layout</header>
   	<nav>
         <ul>
           <li>111</li>
           <li>222</li>
           <li>333</li>
         </ul>	
       </nav>
       <article>some article</article>
   	<aside>some aside</aside>
       <footer>footer is here</footer>
     </div>
   </body>
   ```

   增加间距导致右边栏下移问题

   ```css
   /*增加padding,导致article总宽度变成640px,把aside挤到下面*/
   article{width:600px;float:left;background:#ffed53;padding:10px 20px;}
   ```

   ​

   1. 重宽度以抵消内边距和边框

      ```css
      article{width:560px;float:left;background:#ffed53;padding:10px 20px;}
      ```

   2. 给容器内部元素应用内边距和边框

      ```html
      <style>
        article{width:600px;float:left;background:#ffed53;}
        article .inner{padding:10px 20px;}
      </style>
      <article>
        <div class="inner">some article</div>
      </article>
      ```

   3. 使用`box-sizing:border-box`

      ```css
      nav{width:150px;background:#dcd9c0;}
      nav li{list-style-type:none;}
      article{width:600px;float:left;background:#ffed53;padding:10px 20px;box-sizing:border-box;}
      aside{width:210px;float:left;background:#3f7ccf;}
      ```

2. 三栏-中栏流动布局

   ```html
   <div id="main_wrapper">
     <header>a fiexd-width layout</header>
     <div id="threecolwrap">
       <div id="twocolwrap">
         <nav>
           <ul>
             <li>111</li>
             <li>222</li>
             <li>333</li>
           </ul>
         </nav>
         <article>here is article</article>
       </div>
       <aside>here is aside</aside>
     </div>
     <footer>footer</footer>
   </div>
   ```

   1. 使用负外边距实现

      ```css
      div#main_wrapper{min-width:600px;max-width:1100px;}
      div#threecolwrap{float:left;width:100%;}
      div#twocolwrap{float:left;width:100%;margin-right:-210px;}
      nav{width:150px;float:left;}
      article{width:auto;margin-left:15px;margin-right:210px;}
      aside{width:210px;float:left;}
      ```

   2. 使用CSS3单元格实现

      ```html
      <style>
        nav{
          display: table-cell;
          width:150px;
          padding:10px;
          background:#ded9c0;
        }
        na > li{list-style-type:none;}
        article{
          display: table-cell;
          padding:10px 20px;
          background: #ffed53;
        }
        aside{
          display: table-cell;
          width:210px;
          padding:10px;
          background: #3f7ccf;
        }
      </style>

      <nav>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </nav>
      <article>here is article</article>
      <aside>here is aside</aside>
      	
      ```

      ​