#  栅格系统

##  声明语句  

使用`display:grid`来声明栅格系统，

如果想使用行级的栅格系统，可以使用`display:inline-grid`来声明行级栅格系统。  

##  划分行列  

栅格系统区分行列，使用`grid-template-columns`可以划分列数，与它类似的是使用`grid-template-rows`划分行数。  

我们可以使用固定宽度来设置行列上栅格系统元素的大小，例`grid-template-columns:20px 40px 30px`，就表示列方向设置的三个元素宽度分别为20px、40px、30px的元素。  

如果我们要行列上的元素设置统一元素，可以使用`repeat`，例`grid-template-columns:repeat(4,25%)`表示在列方向上重复设置4个占据父元素25%空间的子元素，也可以将多种不同尺寸重复多次，例如`grid-template-columns:repeat(2,50px 150px)` 呈现的效果是将50px与150px分别重复两次，得到的是四个元素，四个元素的宽度分别是50px,150px,50px,150px。  

我们可以使用`grid-template-columns:repeat(auto-fill,50px)`根据设置的大小自动划分进行填充。

