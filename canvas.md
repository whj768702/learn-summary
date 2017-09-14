#### canvas绘制

1. 绘制矩形
   - `rect(x, y, width, height)`:绘制一个左上角坐标为`(x, y)`,宽高为`width`、`height`的矩形
   - `fillRect(x, y, width, height)`:绘制一个填充的矩形
   - `strokeRect(x, y, width, height)`:绘制一个矩形的边框
   - `clearRect(x, y, width, height)`:清除指定矩形区域，让清除部分完全透明


2. 绘制路径

   ##### 步骤

   - 首先需要创建路径起始点
   - 使用画图命令去画出路径
   - 把路径封闭
   - 路径生成，可以通过描边或填充路径区域来渲染图形

   ##### 用到函数

   - `beginPath()`:新建一条路径，生成之后，图形绘制命令被指向到路径上生成路径
   - `moveTo(x, y)`:将笔触移动到指定的坐标`(x,y)`上
   - `closePath()`:闭合路径之后图形绘制命令又重新指向到上下文
   - `stroke()`:通过线条来绘制图形轮廓
   - `fill()`:通过填充路径的内容区域生成实心的图形

3. 绘制直线

   - `lineTo(x, y)`:绘制一条从当前位置到指定`(x,y)`的直线

4. 绘制圆弧

   - `arc(x, y, radius, startAngle, endAngle, anticlockwise)`:画一个以`(x, y)`为圆心的以`radius`为半径的圆弧(圆)，从`startAngle`开始到`endAngle`结束，按照`anticlockwise'给定的方向(默认为顺时针)来生成
   - `arcTo(x1, y1, x2, y2, radius)`:根据给;de控制点和半径画一段圆弧，再以直线连接两个控制点

5. 贝塞尔以及二次贝塞尔

   - `quadraticCurveTo(cp1x, cp1y, x, y)`:绘制贝塞尔曲线，`(cp1x,cp1y)`为控制点，`(x, y)`为结束点
   - `bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, x)`:绘制二次贝塞尔曲线，`(cp1x, cp1y)`为控制点一，`(cp2x, cp2y)`为控制点二，`(x, y)`为结束点

#### 色彩

1. 图形上色

   - `fillStyle`:设置图形的填充颜色
   - `strokeStyle`:设置图形轮廓的颜色

   ps:一旦设置了`strokeStyle`、`fillStyle`的值，那么这个新值就会成为新绘制的图形的默认值，要给每个图形上不同的颜色，需要重新设置`fillStyle`或`strokeStyle`的值

2. 透明度

   - `globalAlpha`:这个属性影响到canvas里所有图形的透明度，有效值范围0.0(完全透明)-1.0(完全不透明)，默认1.0
   - 上色时指定透明度
     - `ctx.strokeStyle = "rgba(255, 0, 0, 0.5)"`
     - `ctx.fillStyle = "rgba(255, 0, 0, 0.5)"`