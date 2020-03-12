#  flex布局  
##  弹性盒子  
`display:flex`将元素声明为弹性盒子，
`flex-direction`能为弹性盒子声明布局方向，默认为`flex-direction:row;`即按行排列，声明了排列方向后，该排列方向为主轴，与其垂直方向为交叉轴，行与列均有`reverse`即反向排序，例按行反向排序：`flex-direction:row-reverse`，  
`flex-wrap`用于控制弹性盒子是否换行，  
`flex-direction`与`flex-wrap`简写成：`flex-flow`，例：`flex-flow:column wrap;`，按水平方向换行排列。  

`justify-content`用于控制元素在主轴方向的排列方式  
| 选项 | 说明 |
|:-:|:-:|
|flex-start |    元素紧靠主轴起点 |
|flex-end  |  元素紧靠主轴终点 |
center |   元素从弹性容器中心开始
space-between |   第一个元素靠起点，最后一个元素靠终点，余下元素平均分配空间
space-around   | 每个元素两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍
space-evenly    |元素间距离平均分配  
  

`align-content`用于控制元素在交叉轴上的排列方式  
选项  |  说明
|:-:|:-:|
stretch |   元素被拉伸以适应容器（默认值）
center  |  元素位于容器的中心
flex-start |   元素位于容器的交叉轴开头
flex-end    |元素位于容器的交叉轴结尾  

如果设置了` width` 、 `height` 、 `min-height` 、`min-width` 、 `max-width` 、`max-height` ，将影响`stretch` 的结果，因为 `stretch` 优先级你于宽高设置。  
`align-content`控制全部交叉轴上的元素，而`align-items`只能控制一行。  
如果想单独设置某个弹性盒子的属性在交叉轴上的排列可以使用`align-self`单独设置。 

放在弹性盒子内的元素皆为`flex`型，所以对于设置了`display:flex`的`<p></p>`元素内的文本也符合`flex`，为`p`元素设置的弹性盒子属性也会作用在文本上。  

`order`：用于控制弹性元素的位置，默认为 `order:0` 数值越小越在前面，可以为负数或整数。  

绝对定位的弹性元素不参与弹性布局  


##  自动分配空间  
为某一弹性盒子设置类似`margin-left:auto;`会自动撑满空间。  

 
##  弹性盒子的放缩  
当`flex`元素空间大于父盒子时，可以为弹性盒子进行压缩，即设置`flex-shrink`值，这个值的大小应根据视觉效果进行调整。当`flex`元素空间小于父盒子时，为充分利用多余空间，可以设置`flex-grow`，这个值也更根据视觉效果调整。  
`flex-basis`优先级高于`width`与`height`，可以使用它调整弹性盒子到的大小。  
`flex`是`flex-grow`、`flex-shrink`、`flex-basis`的简写模式。  


