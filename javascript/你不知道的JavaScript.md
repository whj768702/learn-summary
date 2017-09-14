- 变量提升

  1. 引擎会在解释JavaScript代码之前首先对其进行编译，编译阶段中的一部分工作就是找到所有的声明， 并用合适的作用域将它们关联起来。

  ```javascript
  var a=2;//这个语句包含变量a的定义声明和赋值声明,定义声明是在编译阶段进行的，赋值声明会被留在原地等待执行.

  console.log(test);//undefined,声明会提升.
  var test=10;
  ```

  2. 函数声明会被提升，但是函数表达式不会被提升。即使是具名的函数表达式名称标识符在赋值之前也无法在所在作用域中使用。

  ```javascript
  //1
  foo();//抛出VM8223:1 Uncaught TypeError: foo is not a function,var foo函数声明会被提升.
  var foo = function(){}
  //2
  fun();//VM8227:1 Uncaught ReferenceError: a is not defined//未声明抛出引用错误.
  //3
  foo();//TypeError
  bar();//ReferenceError
  var foo = function bar(){}
  ```

- apply和call

  1. apply

     ```javascript
     /*
     fun.apply(thisArg, [argsArray])
     thisArg:fun函数运行时指定的this值,非严格模式,则指定为null或undefined时自动指向全局对象,值为原始值(数字,字符串,布尔值)的this会指向该原始值的自动包装对象。
     argsArray:一个数组或者类数组对象.
     */
     //fn的函数参数(显示声明)个数对应arr数组中数据依次对应.

     //数组中数据个数>函数中显示声明个数
     const fn = function(arg1, arg2){
       console.log(arguments.length);//3
       console.log(arg1 + arg2);
     }
     const arr = [1, 1, 1];
     fn.apply(this, arr);//输出结果：2
     //数组中数据个数<函数中显示声明个数
     const fn = function(arg1,arg2,arg3,arg4){
         console.log(arguments.length);//3
         console.log(arg1+arg2+arg3+arg4);
     };
     const test = [1,1,1];
     fn.apply(this, test);//undefined(arg1,arg2,arg3,arg4:1,1,1,undefined);留疑问,浏览器中1+undefined输出：NaN;此处输出undefined.
     ```

  2. call

     ```javascript
     和apply唯一的区别就是参数形式.
     fun.call(thisArg[, arg1[, arg2[, ...]]])
     thisArg:fun函数运行时指定的this值,非严格模式,则指定为null或undefined时自动指向全局对象,值为原始值(数字,字符串,布尔值)的this会指向该原始值的自动包装对象.
     arg1,arg2,...:指定的参数列表.
     ```

- 动态作用域

  需要明确的是，事实上JavaScript并不具有动态作用域，它只有词法作用域，简单明了。但是this机制某种程度上很像动态作用域。

  主要区别：词法作用域是在写代码或者说定义时确定的，而动态作用域是运行时确定的(this也是)。词法作用域关注函数在何处声明，而动态作用域关注函数从何处调用。

  无论函数在哪里被调用，也无论它如何被调用，它的词法作用域都只由函数被声明时所处的位置决定。

  ```javascript
  function foo(){
    console.log(a);
  }
  function bar(){
    var a = 3;
    foo();
  }
  var a= 2;
  bar();//输出结果:2
  //词法作用域让foo()中的a通过RHS引用到了全局作用域中的a，因此会输出2.
  ```

- this

  关于this的误解：

  1. 指向自身

     this并不像所想的那样指向函数本身

     ```javascript
     function foo(num){
         console.log('foo: ' + num);
         this.count++;
     }
     foo.count = 0;

     for(var i=0; i<4; i++){
         foo(i);
     }
     console.log(foo.count);
     /*输出:
     foo: 0
     foo: 1
     foo: 2
     foo: 3
     0
     */
     //代码无意中创建了一个全局变量count,它的值为NaN.
     /*
     对上面代码稍作修改，增加window.count=0;console.log(window.count)输出结果就为4.
     */

     ```

  2. 它的作用域

     第二种常见的误解是，this指向函数的作用域。这个问题有点复杂，因为在某种情况下它是正确的，但是在其他情况下它却是错误的。this在任何情况下都不指向函数的词法作用域。

  this是什么：

  1. this是在运行时进行绑定的，并不是在编写时绑定，它上下文取决于函数调用时的各种条件。this的绑定和函数声明的位置没有任何关系，只取决于函数的调用方式。
  2. 当一个函数被调用时，会创建一个活动记录(有时也称为执行上下文)。这个记录会包含函数在哪里被调用(调用栈)、函数的调用方法、传入的参数等信息。this就是记录的其中一个属性，会在函数执行的过程中用到。  

  调用位置：函数在代码中被调用的位置(而不是声明的位置)

  绑定规则：

  1. 默认绑定

     不带任何修饰的函数引用进行调用

     ```javascript
     /*
     非严格模式下,此例中this绑定到全局对象
     严格模式下，this绑定到undefined.
     */
     function foo(){
       console.log(this.a);
     }
     var a = 2;
     foo();//2
     ```

  2. 隐式绑定

     调用位置是否有上下文对象，或者说是否被某个对象拥有或者包含(不严谨，会存在隐式丢失问题)

     ```javascript
     function foo(){
         console.log(this.a);
     }
     var obj = {
         a: 2,
         foo: foo
     };
     obj.foo();//2

     //隐式丢失,bar()是一个不带任何修饰的函数调用，因此应用了默认绑定
     function foo(){
         console.log(this.a);
     }
     var obj = {
         a: 2,
         foo: foo
     };
     obj.foo();//2
     var bar = obj.foo;
     var a = 1234;
     bar();//1234

     //参数传递其实就是一种隐式赋值，因此我们传入函数时也会被隐式赋值
     //把函数传入语言内置的函数而不是传入自己声明的函数，结果是一样的。
     function foo(){
         console.log(this.a);
     }
     function doFoo(fn){
         fn();
     }
     var obj = {
         a: 2,
         foo: foo
     };
     var a = 1234;
     doFoo(obj.foo);//1234
     setTimeout(obj.foo,100);//1234
     ```

  3. 显示绑定

     使用函数的call、apply方法

     ```javascript
     function foo(){
       console.log(this.a);
     }
     var obj = {
       a:2
     };
     foo.call(obj);//2
     foo.apply(obj);//2
     ```

  4. new绑定

     new来调用函数时会自动执行一下操作:

     1. 创建(或者说构造)一个全新的对象
     2. 这个新对象会被执行[[原型]]连接
     3. 这个新对象会绑定到函数调用的this
     4. 如果函数没有返回其他对象，那么new表带是中的函数调用会自动返回这个新对象

  绑定规则的优先级：

  1. 函数是否在new中调用(new绑定)?如果是的话this绑定的是新创建的对象

     ```javascript
     var bar = new foo();
     ```

  2. 函数是否通过call、apply(显式绑定)或者硬绑定调用?如果是的话,this绑定的是指定的对象

     ```javascript
     var bar = foo.call(obj2);
     ```

  3. 函数是否在某个上下文对象中调用(隐式绑定)?如果是的话,this绑定的是那个上下文对象

     ```javascript
     var bar = obj1.foo();
     ```

  4. 如果都不是的话,使用默认绑定.如果是在严格模式下,就绑定到undefined,否则绑定到全局对象

     ```javascript
     var bar = foo();
     ```

  绑定例外

  1. 被忽略的this

     如果把null或undefined作为this的绑定对象传入call、apply或bind，这些值调用时会被忽略，实际应用的是默认绑定规则

  2. 间接引用

     ```javascript
     function foo(){
       console.log(this.a);
     }
     var a = 2;
     var o = {
       a: 3,
       foo: foo
     };
     var p = { a: 4};
     o.foo();//3
     (p.foo = o.foo)();//2 p.foo=o.foo的返回值是目标函数的引用，因此调用位置是foo()而不是p.foo()或者o.foo()
     ```

  3. 软绑定

  this词法

  1. ES6中的箭头函数不使用this的四种标准规则，而是根据外层(函数或全局)作用域来决定this.

     ```javascript
     /*
     foo()内部创建的箭头函数会捕获调用时foo()的this，由于foo()的this绑定到obj1，bar(引用箭头函数)的this也会绑定到obj1，箭头函数的绑定无法被修改(new也不行).
     */
     function foo(){
         return (a)=>{
             console.log(this.a);
         };
     }
     var obj1 = {a:1};
     var obj2 = {a:2};

     var bar = foo.call(obj1);
     bar.call(obj2);//1
     ```

- 第五章 原型

  1. JavaScript中对象的内置属性，是对于其他对象的引用。

  2. 所有普通的[[Prototype]]链最终都会指向内置的Object.prototype.

     ```javascript
     myObject.foo = 'bar';
     /*
     	1.如果myOBject对象中包含名为foo的普通数据访问属性，这条赋值语句只会修改已有的属性值。
     	2.如果foo不是直接存在于myObject中，[[Prototype]]链就会被遍历，类似[[Get]]操作。如果原型链上找不	  到foo，会在myObject上直接添加foo。
     	3.如果foo存在于原型链上层：
     	  a.如果在[[Prototype]]链上层存在名为foo的普通数据访问属性并且没有被标记为只读，那就会直接在			myObject中添加一个名为foo的新属性，它是屏蔽属性。
     	  b.如果在[[Prototype]]链上层存在foo，但是它被标记为只读，那么无法修改已有属性或者在myObject上创		  建屏蔽属性。如果在严格模式下，代码会抛出一个错误。否则，这条赋值语句会被忽略。总之，不会发生屏         蔽。
           c.如果在[[Prototype]]链上层存在foo并且它是一个setter，那就一定会调用这个setter。foo不会被添加		 到(或者说屏蔽于)myObject，也不会重新定义foo这个setter。
     */
     ```

  3. 个人理解：

     ​    `__proto__` 属性是浏览器提供的，每个对象都存在。

     ​    `prototype`是函数才会有的属性。

     - 对象字面量构造对象

       ```javascript
       var obj = {
         a: 123
       	};
       Object.getPrototypeOf(obj)//Object {__defineGetter__: function, __defineSetter__: function, hasOwnProperty: function, __lookupGetter__: function, __lookupSetter__: function…}
       obj.__proto__===Object.prototype//true
       obj.__proto__//Object {__defineGetter__: , __defineSetter__: , hasOwnProperty: , __lookupGetter__: , __lookupSetter__: , …}
       ```

     - 构造函数构造

       ```javascript
       function Person(){}
       var person = new Person();
       person.__proto__===Person.prototype//true
       Person.prototype//Object {constructor: function}
       typeof person//Object  person不存在prototype属性
       /*
       prototype指向的是以当前函数(Person)作为构造函数(constructor)构造出来的对象(person)的原型对象.
       Person.prototype===person.__proto__:
       constructor:function Person(){ … }
       __proto__:Object {__defineGetter__: , __defineSetter__: , hasOwnProperty: , …}
       person的__proto__来自构造函数(Person)的prototype
       */
       /*
       ES6中class和构造函数构造一样
       class Person{
           constructor(name){
               this.name = name;
           }
           print(){
               console.log(this.name);
           }
       }
       const p = new Person('test');
       p.__proto__===Person.prototype//true
       typeof Person//function
       */
       ```

     - 对象通过Object.create构造

       ```javascript
       var person={};
       var p=Object.create(person);
       p.__proto__===person;//p的[[prototype]]指向对象person
       //p不存在prototype属性
       ```

       ​
