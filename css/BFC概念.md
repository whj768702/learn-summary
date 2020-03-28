#### BFC定义

block formatting context，是一个独立的渲染区域。

#### 生成条件

满足下列条件之一就可以触发BFC：

1. 根元素，即HTML元素
2. float的值不为none
3. overflow的值不为visible的块元素
4. display的值为inline-block(行内块元素)、table-cell(表格单元格)、table-caption、flex或者inline-flex元素的直接子元素、grid或者inline-grid元素的直接子元素、flow-root的元素
5. position的值为absolute或者fixed
6. contain值为layout、content或paint的元素

#### BFC布局规则

1. 内部的box会在垂直方向，一个接一个的放置。
2. box垂直方面的距离由margin决定。属于**同一个BFC**的两个相邻**box**的margin会发生重叠
3. 每个元素的margin box的左边与包含块border box的左边相接触(对于从左往右的格式化，否则相反)。即使存在浮动也是如此。
4. BFC的区域不会与float box重叠。
5. BFC就是页面上一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。
6. 计算BFC的高度时，浮动元素也参与计算。