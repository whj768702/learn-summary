在typescript中的基础类型

1. 布尔值boolean

   ```typescript
   let isDone: boolean = false;
   ```

2. 数字number

   和JavaScript一样，TypeScript里的所有数字都是浮点数。支持十进制、十六进制和ECMAScript 2015中引入的二进制和八进制字面量。

   ```typescript
   let decLiteral: number = 6;
   let hexLiteral:　number = 0xf00d;
   let binaryLiteral: number = 0b1010;
   let octalLiteral: number = 0o744;
   ```

3. 字符串string

   可以使用模板字符串，它可以定义多行文办和内嵌表达式。这个字符串是被反引号包围，并且以${exper}这种形式嵌入表达式。

   ```typescript
   let myName: string = "bob";
   let age: number = 37;
   let sentence: string = `hello, my name is ${ myName }.
   I will be ${ age + 1 } years old next month.`
   //hello, my name is bob.
   //I will be 38 years old next month.
   ```

4. 数组

   两种方式：一、可以在元素类型后面接上[],表示由此类元素组成的一个数组。二、是使用数组泛型，Array<元素类型>

   ```typescript
   //第一种
   let list1: number[] = [1, 2, 3];
   //第二种
   let list2: Array<number> = [1, 2, 3];
   ```

5. 元组tuple

   元组类型允许表示一个已经元素数量和类型的数组，各元素的类型不必相同。当访问一个已知索引的元素，会得到张雀的类型。当访问一个越界的元素，会使用联合类型替代。

   ```typescript
   let x: [string, number] = ['hello', 10];
   ```

6. 枚举enum

   默认情况下，从0 开始为元素编号，也可以手动的指定成员的数值。

   ```typescript
   enum Color {Red, Green, Blue};
   let c: Color = Color.Green; //c = 1
   let colorName: string = Color[2];//colorName = 'Blue';
   ```

7. 任意值any

   有时候，我们会想要为那些在编程阶段还不清楚类型的变量指定一个类型。 这些值可能来自于动态的内容，比如来自用户输入或第三方代码库。 这种情况下，我们不希望类型检查器对这些值进行检查而是直接让它们通过编译阶段的检查。 那么我们可以使用 any类型来标记这些变量.

   ```typescript
   let notSure: any = 4;
   notSure = 'maybe a string instead';
   ```

8. 空值void

   某种程度上来说，`void`类型像是与`any`类型相反，它表示没有任何类型。 当一个函数没有返回值时，你通常会见到其返回值类型是 `void` .声明一个`void`类型的变量没有什么大用，因为你只能为它赋予`undefined`和`null`.

   ​

   ​