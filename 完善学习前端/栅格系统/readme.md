#  栅格系统

##  声明语句  

使用`display:grid`来声明栅格系统，

如果想使用行级的栅格系统，可以使用`display:inline-grid`来声明行级栅格系统。  

##  划分行列  

栅格系统区分行列，使用`grid-template-columns`可以划分列数，与它类似的是使用`grid-template-rows`划分行数。  

我们可以使用固定宽度来设置行列上栅格系统元素的大小，例`grid-template-columns:20px 40px 30px`，就表示列方向设置的三个元素宽度分别为20px、40px、30px的元素。  

如果我们要行列上的元素设置统一元素，可以使用`repeat`，例`grid-template-columns:repeat(4,25%)`表示在列方向上重复设置4个占据父元素25%空间的子元素，也可以将多种不同尺寸重复多次，例如`grid-template-columns:repeat(2,50px 150px)` 呈现的效果是将50px与150px分别重复两次，得到的是四个元素，四个元素的宽度分别是50px,150px,50px,150px。  

我们可以使用`grid-template-columns:repeat(auto-fill,50px)`根据设置的大小自动划分进行填充。

我们可以使用`fr`单位设置元素在空间中所占的比例，浏览器会根据设置的`fr`大小来按比例划分空间。  

在设置栅格大小时，我们可以使用`minmax`设置取值范围，`grid-template-rows: 100px minmax(100px, 1fr);`该栅格的大小就在100px至1份之间。  

  

##  栅格使用  

我们可以直接使用栅格线来确定栅格的大小及位置。

```css
 div:first-child{
        grid-row-start:1;
        grid-column-start:2;
        background-color: yellow;
        grid-column-end:3;
        grid-row-end:4;
        
    }
```

以上css所表示的是一个以第一条水平线与第二条垂直线开始并以第四条水平线与第三条垂直线结束的栅格。 

我们可以使用`span`作为偏移单位确定栅格的位置及大小，偏移的量就是栅格的数量。

```css
 grid-row-start:1;
 grid-column-start:2;
 background-color: yellow;
 grid-column-end:span 1;
 grid-row-end:span 3;
```

以上代码与使用栅格线命名的方式的效果是一致的，只不过表示第一条水平线向下偏移了3格，第二条垂直线向右偏移了1格。  



##  命名栅格线  

我们可以为划分区域的栅格线进行命名，方便控制指定栅格，

```css
display:grid;
    grid-template-rows: [r1-start] 100px [r1-end r2-start] 100px [r2-end r3-start] 100px [r3-end];
    grid-template-columns:[c1-start] 100px [c1-end c2-start] 100px [c2-end c3-start] 100px [c3-end];
```

以上就自定义了每个栅格线的名称，其中[]内的两个名称是等价的，只不过一个名称是栅格线的开始，一条是栅格线的结束。  

我们如果要使用栅格，可以按照如下例子使用

```css
    div:first-child{
        background-color: wheat;
        grid-row-start:r1-start;
        grid-column-start:c1-start;
        grid-column-end:c2-end;
        grid-row-end:r2-end;
    }
```

表示使用行方向开始栅格线是`r1-start`，列方向开始栅格线是`c1-start`，结束的栅格线分别为`r2-end`、`c2-end`，因而它将占据四个栅格空间。  

我们也可以重复设置栅格线的名称。

```css
 display: grid;
        grid-template-rows: repeat(3, [r-start] 100px [r-end]);
        grid-template-columns: repeat(3, [c-start] 100px [c-end]);
```

在使用时以以下下类似方式使用

```css
div:first-child {
        grid-row-start: r-start 2;
        grid-column-start: c-start 2;
        grid-row-end: r-start 2;
        grid-column-end: c-end 2;
    }
```

注意`repeat`为栅格线自动生成了编号，在使用时要加空格使用。   

使用栅格时可以通过偏移量的设置来确定要使用的栅格大小及方向。  



`grid-row`是对`grid-row-start`与`grid-row-end`的简写，同样的，`grid-column`是`grid-column-start`与`grid-column-end`的简写。  

还可以使用`grid-area`再次简写`grid-row`与`grid-column`的组合。语法结构为`grid-row-start/grid-column-start/grid-row-end/grid-column-end`，可以使用栅格线的具体名称。



##  命名栅格  

我们还可以为栅格命名来直接使用具体的栅格

```css
grid-template-columns: repeat(3, 100px);
grid-template-rows: repeat(3, 100px);
    grid-template-areas: "header header header" "nav main main" "nav footer footer";
```

我们可以直接使用自定义的栅格名称，  

```css
grid-area: header;
```

系统也会自动为区域命名，上例中会产生`header-start`水平与垂直同名的起始区域与`header-end`水平与垂直同名的区域终止。  

我们可以使用一个或多个`.`定义区域占位。

```css
 grid-template-areas: "top . ."
            "top . ."
            "bottom bottom bottom";
```





`grid-tempalte` 是 `grid-template-rows`、`grid-template-columns`、`grid-template-areas` 的三个属性的简写。  



##  栅格间距  

使用`row-gap`设置行间距，使用`column-gap`设置列间距，也可以使用`gap`同时设置行、列间距。  



##  栅格流动  

在容器中设置`grid-auto-flow`可以改变栅格元素的流动方式，默认是按行流动，可以使用`grid-auto-flow:column`来按列流动。   



##  空白填充  

当元素在栅格中放不下时，将会发生换行产生留白，使用`grid-auto-flow: row dense;` 可以执行填充空白区域操作。后面的元素会填充前面元素所产生的空白，这样会破坏原来的次序。  



##  栅格排列  

可以通过属性方便的定义栅格的对齐方式，可用值包括 `start | end | center | stretch | space-between | space-evenly | space-around`。  

对齐的方式与`flex`中的元素对齐方式是相似的，例如使用`align-items`控制栅格内元素的垂直排列方式，使用`align-self`控制单个元素在栅格中垂直对齐方式。  

同样的，`place-items`是`align-items`与`justify-items`的简写方式，`place-self`是`align-self`与`justify-self`的简写方式。  



