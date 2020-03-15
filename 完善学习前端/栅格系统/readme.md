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



我们还可以为栅格命名通过栅格名来直接使用栅格，