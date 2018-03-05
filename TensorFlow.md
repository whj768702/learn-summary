- TensorFlow编程概念

  1. 张量
     张量是任意维度的数组。
     标量是零维数组(零阶张量)。例如：'abc'或5
     矢量是一维数组(一阶张量)。例如：[2, 3,4]或[5]
     矩阵是二维数组(二阶张量)。例如：[[1,2,3], [4,5,6]]
  2. 指令
     指令会创建、销毁和操控张量。
  3. 图
     TensorFlow图(计算图或数据流图)是一种图数据结构。图的节点是指令，图的边是张量。
  4. 会话
     图必须在TensorFlow会话中运行，会话存储了它所运行的图的状态。

  ```python
  import tensorflow as tf

  //创建一个图
  g = tf.Graph()
  //设置该图为默认图
  with g.as_default():
      x = tf.constant(8, name="x_const")
      y = tf.constant(5, name="y_const")
      sum = tf.add(x, y, name="x_y_sum")
      //创建一个会话
      with tf.Session() as sess:
          print sum.eval()
  ```

  结果：`13`

  ​

