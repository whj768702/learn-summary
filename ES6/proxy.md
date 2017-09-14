### 代理Proxy

- 特点

  在对象前面加了一层，外部需要通过这层代理来操作原对象，代理可以加一些控制来过滤、改写或简化操作。

- 用处

  当对象不希望被外部直接访问时可以考虑代理模式。

### Proxy支持的拦截操作

1. `get(target, propKey, receiver)`

   监听对象属性的读取

   ```javascript
   let api = {
     url: 'abc'
   }
   api = new Proxy(api,{
     get(target, key, receiver){
       console.log("here");
       return target[key];
     }
   });
   console.log(api.url);
   //here
   //abc
   ```

2. `set(target, propKey, value, receiver)`

   监听对象属性的设置

   ```javascript
   let api = {
     url: 'abc'
   }
   api = new Proxy(api,{
       set(target, key, value, receiver){
           console.log('here');
           return value;
       }
   });
   api.url = '123';//here
   ```

3. `has(target, propKey)`

   监听`propKey in proxy`的操作，返回一个布尔值

   ```javascript
   let api = {
     url: 'abc'
   }
   api = new Proxy(api,{
       has(target, key){
           console.log('here');
           return true;
       }
   });
   console.log('url'in api);
   //运行输出结果：
   //here
   //true
   ```

4. `deleteProperty(target, propKey)`

   监听`delete`语句对目标对象属性删除的操作，返回一个布尔值

   ```javascript
   let api = {
     url: 'abc'
   }
   api = new Proxy(api,{
       deleteProperty(target, key){
           console.log('here');
           return true;
       }
   });
   delete api.url;//here
   ```

   ​

5. `ownKeys(target)`

   监听`Object.getOwnPropertyNames(proxy)`、`Object.getOwnPropertySymbols(proxy)`、`Object.keys(proxy)`，返回一个数组。该方法返回目标对象所有自身的属性的属性名，而`Object.keys()`的返回结果仅包括目标对象自身的可遍历属性.

   ```javascript
   let target = {
       a: 1,
       b: 2,
       c: 3
   };
   let handler = {
       ownKeys(target){
           console.log('3:', target);
           return ['a'];
       }
   };
   let proxy = new Proxy(target, handler);
   console.log('1:', Object.getOwnPropertyNames(target));
   console.log('2:', Object.getOwnPropertyNames(proxy));
   //输出结果:
   //1: [ 'a', 'b', 'c' ]
   //3: { a: 1, b: 2, c: 3 }
   //2: [ 'a' ]

   ```

6. `apply(target, object, arguments)`

   | target    | 目标对象             |
   | --------- | ---------------- |
   | object    | 目标对象的上下文对象(this) |
   | arguments | 目标对象的参数数组        |

   监听目标函数(作为目标对象)的调用行为。监听Proxy实例作为函数调用的操作，比如`proxy(...args)`、`proxy.call(object, ...args)`、`proxy.apply(...)`

   ```javascript
   let target = (a, b, c)=>{
       console.log('from target');
       return 'target';
   }
   const handler = {
       apply(target, ctx, args){
           console.log('from proxy')
           return 'from proxy';
       }
   };

   let fn = new Proxy(target, handler);
   fn.call(null, 2, 4);//from proxy
   ```

7. `construct(target, arguments, newTarget)`

   监听目标函数(作为目标对象)利用new而生成实例的行为。返回一个对象。

   ```javascript
   let p = new Proxy(function(){}, {
       construct(target, args, newTarget){
           console.log('called: ' + args.join(','));
           return　{ value: args[0] * 10};
       }
   });
   const fn = new p(1);
   console.log(fn.value);
   //输出结果：
   //called: 1
   //10
   ```

8. `getPrototypeOf(target)`

   监听`Object.getPrototypeOf(proxy)`的读取。返回一个对象。

   ```javascript
   let proto = {};
   let p = new Proxy({},{
       getPrototypeOf(target){
           console.log('from proxy');
           return proto;
       }
   });
   console.log(Object.getPrototypeOf(p) === proto);
   //from proxy
   //true
   ```

9. `setPrototypeOf(target, prototype)`

   监听`Object.setProtypeOf(proxy, proto)`的调用,返回一个布尔值。

   ```javascript
   let handler = {
       setPrototypeOf(target, proto){
           throw new Error('from setPrototypeOf');
       }
   };
   let proto = {};
   let proxy = new Proxy(()=>{}, handler);
   console.log(Object.setPrototypeOf(proxy, proto));//from setPrototypeOf
   ```

10. `isExtensible(target)`

    监听Object.isExtensible()的读取

    ```javascript
    let p = new Proxy({}, {
        isExtensible(target){
            console.log('from isExtensible');
            return true;
        }
    });
    Object.isExtensible(p);//from isExtensible
    ```

11. `preventExtensions(target)`

    监听`Object.preventExtensions()`的读取

    ```javascript
    let p = new Proxy({}, {
        preventExtensions(target){
            console.log('from preventExtensions');
            Object.preventExtensions(target);
            return true;
        }
    });

    Object.preventExtensions(p);//from preventExtensions
    ```

12. `getOwnPropertyDescriptor(target, prop)`

    监听`Object.getOwnPropertyDescriptor()`的调用，返回一个属性描述对象或者`undefined`.

    ```javascript
    let handler = {
        getOwnPropertyDescriptor(target, key){
            if(key[0] === '_'){
                return;
            }
            return Object.getOwnPropertyDescriptor(target, key);
        }
    };
    let target = {
        _foo: 'bar',
        baz: 'tar'
    };
    let proxy = new Proxy(target, handler);
    console.log(Object.getOwnPropertyDescriptor(proxy, 'wat'));//undefined
    console.log(Object.getOwnPropertyDescriptor(proxy, '_foo'));//undefined
    console.log(Object.getOwnPropertyDescriptor(proxy, 'baz'));
    //{ value: 'tar',
    //  writable: true,
    //  enumerable: true,
    //  configurable: true }
    ```

13. `defineProperty(target, property, descriptor)`

    监听`Object.defineProperty()`的调用，返回一个布尔值

    ```javascript
    let handler = {
        defineProperty(target, key, descriptor){
            console.log('from defineProperty');
            return false;
        }
    };
    let target = {};
    let proxy = new Proxy(target, handler);
    console.log(proxy.foo = 'bar');
    //from defineProperty
    //bar
    ```

    ​