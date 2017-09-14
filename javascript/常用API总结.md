1. Array

   - `Array.prototype.map()`

     Syntax: `const new_array = arr.map(callback[,thisArg])`

     `The map() method creates a new array with the results of calling a provided function on every element in this array.`

     ````javascript
     //callback:currentValue,index,array
     function test(currentValue,index,array){
         console.log(`currentValue:${currentValue};index:${index};array:${array}`);
         return currentValue;
     }
     ["hello", "world"].map(test));
     //urrentValue:hello;index:0;array:hello,world
     //currentValue:world;index:1;array:hello,world
     //["hello", "world"]
     ````

   - `Array.prototype.join()`

     Syntax:`const str = arr.join(separator) separator:default to ','`

     `The json() method joins all elements of an array(or an array-like-object) into a string.`

     ```javascript
     var a = ['hello', 'world'];
     a.join();//'hello,world'
     a.join('-');//'hello-world'
     ```

   - `Array.prototype.filter()`

     Syntax:`const newArray = arr.filter(callback[, thisArg])`

     | 参数      | 含义                                       |
     | ------- | ---------------------------------------- |
     | element | the current element being processed in the array. |
     | index   | the index of the current element being processed in the array. |
     | array   | the array filter was called upon.        |

     `The filter() method creates a new array with all elements that pass the test implemented by the provided function`

     ```javascript
     function isBigEnough(value){
       return value >= 10;
     }
     var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
     //[12, 130, 44]
     ```

   - `Array.prototype.includes()`

     Syntax:`arr.includes(searchElement,fromIndex)`

     | 参数                 | 含义                                       |
     | ------------------ | ---------------------------------------- |
     | searchElement      | the element to search for                |
     | fromIndex:optional | 数组中的位置，用于开始搜索searchElement。如果是赋值，从array.length+负值位置开始。默认为0 |

     `The includes() method determines whether an array includes a certain element,returning true or false as appropriate(适当的、合适的).`

     ````javascript
     var a = [1, 2, 3];
     a.includes(2);//true
     a.includes(4);//false
     a.includes(3,-1);//true 从a.length+(-1)位置开始
     ````

   - `Array.prototype.reduce()`

     Syntax:`arr.reduce(callback,[initialValue])`

     | 参数           | 含义                                       |
     | ------------ | :--------------------------------------- |
     | callback:    | accumulator:最后一次调用回调函数或初始值时所返回的累积值(初始值为0).currentValue:当前值.currentIndex:当前索引.array:数组本身 |
     | initialValue | Value to use as the first argument to the first call of the callback.用做accumulator的值，没有的话，默认使用数组第一个值。 |

     ````javascript
     //无initialValue
     var a = [0,1,2,3,4].reduce(function(acc,currentValue,currentIndex,array){
         console.log("acc:",acc);//0,1,3,6
         return acc+currentValue;
     });
     console.log(a);//10
     //initialValue=5
     var a = [0,1,2,3,4].reduce(function(acc,currentValue,currentIndex,array){
         console.log("acc:",acc);//5,5,6,8,11
         return acc+currentValue;
     }, 5);
     console.log(a);//15

     ````

2. String

   - `String.prototype.repeat()`

     Syntax:`let resultString = str.repeat(count)`

     | 参数    | 含义           |
     | ----- | ------------ |
     | count | Number,重复次数. |

     ```javascript
     'abc'.repeat(-1);//RangeError
     'abc'.repeat(0);//''
     'abc'.repeat(2);//'abcabc'
     'abc'.repeat(2.5)//'abcabc'
     ```

   - `String.prototype.split()`

     Syntax:`str.split([separator[,limit]])`

     | 参数        | 含义                              |
     | --------- | ------------------------------- |
     | separator | (可选)用于指定分割字符串的字符。可以是字符串，也可以是正则。 |
     | limit     | (可选)要找到的分割数量                    |

     `The split() method splits a String object inot an array of strings by separating the string into substrings`

     ```javascript
     'abc'.split('');//["a","b","c"]
     'abcd'.split('',2);//["a","b"]
     ```

     ​