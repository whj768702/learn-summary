- delete数组中的某个元素，不能真正移除一个元素，只是将其设定为undefined。数组的长度不会受影响。

  ```javascript
  var a = [1, 2, 3];
  delete a[0];
  a.length;//3
  ```

- 在检查变量是否纯在(更准确的是变量是否的值是否为undefined，可能存在已经声明但未赋值的情况)时，更好的选择是使用typeof

  ```javascript
  >>> var result = '';
  >>> if(somevar){result = 'yes';}
  somevar is not defined
  //使用typeof
  >>> if(typeof somevar !== 'undefined'){result = 'yes';}
  ```

- JavaScript中循环主要有以下四种类型：

  1. while循环
  2. do-while循环
  3. for循环
  4. for-in循环(往往被用来遍历某个数组或者对象)

- URI的编码与反编码

  1. URL(Uniform Resource Locator,统一资源定位符)或URI(Uniform Resource Identifier,统一资源标识符)
  2. URL或URI中有一些字符有特殊含义，如果想转义这些字符，可以调用encodeURI()或encodeURIComponent().对应的反转函数:decodeURI()和decodeURIComponent().

- 闭包问题

  1. ```javascript
     function f(){
       var a = [];
       var i;
       for(i = 0; i < 3; i++){
         a[i] = function(){
           return i;
         }
       }
       return a;
     }
     >>>var a = f();
     >>>a[0]()
     3
     >>>a[1]()
     3
     >>>a[2]()
     3
     //并没有预期的 1,2,3, 在这里创建三个闭包，它们都指向了一个共同的局部变量i，但是，闭包并不会记录它们的值，它们所拥有的的只是一个i的连接(即引用)，因此只能返回i的当前值。由于循环结束时i的值都为3，所以这三个函数都指向了这一共同值。
     ```

  2. ```javascript
     //改进版。在这里，不直接创建一个返回i的函数，而是将i传递给了一个自调函数。在改函数中，i被赋值给局部变量x，这样一来，每次迭代中的x就会拥有各自不同的值。
     function f(){
       var a = [];
       var i;
       for(i = 0; i < 3; i++){
         a[i] = (function(x){
           return function(){
             return x;
           }
         })(i);
       }
       return a;
     }
     ```

- 数组文本标识法：[]。对象文本标识法：{}

- Function对象中也有一个length属性，用于记录该函数所拥有的的参数数量

  ```javascript
  function myFunc(a,b,c){}
  myFunc.length//3
  ```

  ​