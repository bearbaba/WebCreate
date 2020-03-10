#   表格制作  
##  css定制表格  
通常情况下，我们使用HTML中的`table`,`thead`,`tbody`,`tfooter`,`tr`,`th`,`td`等标签完成一个表格的制作，但是我们也可以用css样式为内容添加样式定制出我们想要的表格出来。为一个简单的块级元素如`section`等添加`display:table-header-group`即可以模拟`thead`，然后为`section`中包裹的`ul`添加`display:table-row`即可模拟`tr`的作用，再为`li`添加`display:table-cell`即可模拟`td`的作用。  
与`table-header-group`类似的还有`table-row-group`、`table-footer-group`。  
我们在为这些块级元素添加上边框属性、内边距属性就能很好地定制出我们想要的表格出来。  

##  表格标题设置  
通常在`table`增加`caption`标签表示表格的标题，可以使用`caption`的属性值`caption-side`控制`caption`出现的位置，默认是`top`，可以设置成`bottom`等。  
我们也可以在普通的用css样式模拟出的表格中，增加一个普通的块级元素标签，只需为它添加`display:table-caption`，即能模拟出`table`中的`caption`来。  

