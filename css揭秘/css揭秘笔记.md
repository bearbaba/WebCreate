# css揭秘笔记

## 编码技巧

### 尽量减少代码重复

应减少改动时要编辑的地方以增强代码可维护性。

当某些值相互依赖时，应把它们的的相互关系用代码表达出来，例：

```css
#button {
    background:blue;
    border-radius: 4px;
    box-shadow: 0 1px 5px gray;
    color: white;
    font-size: 20px;
    line-height: 30px;
}
```

这里设置的是一个按钮的css样式，如果我们要重新设置该按钮的大小，相应的行高也应该根据实际情况相应调整，行高与文字大小产生依赖，所以应调整为：

```css
line-height: 1.5;
font-size: 20px;
```

行高始终是字号的1.5倍。

既然已经设置了行高与字体大小的依赖，不妨同时将字体也设置为相对大小，将其始终与父级字体相对，此处就可以使用百分比或`em`设置字号。

```css
font-size: 125%;
/*em作为单位
font-size: 1.25em;
*/
```

上述是在假设父级字体为默认16px大小情况下设置的。

既然已经将文字设置了相对大小，那么按钮的其他部分也应设置相对大小，否则修改文字大小时，其他部分不变会很不协调：

```css
#button {
    background:blue;
    border-radius: .25rem;
    box-shadow: 0 .0625rem .3125rem gray;
    color: white;
    font-size: 1.25rem;
    line-height: 1.5;
}
```

这里使用的是`rem`作为大小单位，它表示的是相对根字体的大小，一般默认为16px，如果要重新设置，只需修改`<html>`元素的字体大小。

### 合理利用简写

```css
background: rebeccapurple;
background-color: rebeccapurple;
```

以上两行代码，第一种是简写式方法，第二种是展开式写法。

当我们在明确要去覆盖某个具体的展开式属性并保留其他相关性样式时就需要用到展开式写法了。

```css
  background:
    url(1.png) no-repeat top right / 2em 2em,
    url(2.png) no-repeat top left / 2em 2em,
    url(3.png) no-repeat bottom right / 2em 2em;
```

以上代码在背景中设置了三张图片，如果要修改图片尺寸是十分不便的，因而此处用展开式写法能方便后期修改：

```css
background:
  url(1.png) top right,
  url(2.png) top left,
  url(3.png) bottom right;
background-size: 2em 2em;
background-repeat: no-repeat;
```

### 关于响应式布局的建议

响应式布局设计（RWD）比较常见的实践使用多种分辨率来测试一个网站，然后设置越来越多的媒体查询（Media Query），但是每个媒体查询都会增加成本（即“注意减少代码重复原则”）。

减少不必要媒体查询的建议：

* 使用百分比或者与窗口相关的单位（vw、vh、vmin和vmax），它们的值要与窗口大小相关。

* 需要在较大分辨率下得到固定宽度时，使用`max-width`而不是`width`，它能使用小的分辨率。

* 要为可替换元素（`img`,`iframe`等）设置一个`max-width`，值为100。

* 使用`background-size: cover`属性使整个背景图片铺满容器，而避免用高分辨率的图片。

* 当元素以行列式进行布局时，让窗口的宽度来决定列的数量。弹性盒布局或者`display: inline-block`加上常见的文本折行可以实现。

* 在使用多列文本时，指定`column-width`(列宽),而不是指定列数，这样它能在较小屏幕自动显示为单列布局。
  
## 背景与边框

### 半透明边框

如果用`hsla`为`<div></div>`设置一个半透明的边框，相关css设置（此处设置的是一个红色的`div`，`hsla`设置的是一个灰色的半透明色）：

```css
.box1{
  width: 6.25rem;
  height:6.25rem;

  background: red;
  border:10px solid hsla(0,0%,100%,.5);
}
```

如果恰好`<html\>`的背景颜色也是默认的白色，你会发现此处设置的`<div>`并没有显示出灰色的半透明边框，而是一个偏红色的边框。

![实例图片](2背景边框/img/1.png)

这是因为在默认情况下背景会显示在边框的下层，而边框只是覆盖在了背景上而已，此时只需在原有的背景设置上多增加一个属性`background-clip: padding-box;`，使背景不显示边框区域的内容：

```css
.box1{
  width: 6.25rem;
  height:6.25rem;

  background: red;
  border:10px solid hsla(0,0%,100%,.5);
  
  background-clip: padding-box;
}
```

然而这时得到的边框却又没有了：

![实例图片](2背景边框/img/2.png)

其实并不是没有，只是边框的色调比较低，再加上边框设置的透明度比较低，所以看不见而已，换一个比较深的颜色就能看见了，如：

```css
.box1{
  width: 6.25rem;
  height:6.25rem;

  background: red;
  border:10px solid hsla(240,80%,80%,.5);
  background-clip: padding-box;
  -webkit-background-clip: padding-box;
}
```

![实例图片](2背景边框/img/3.png)

### 多重边框

#### box-shadow方案

`box-shadow`支持第四个参数（称作“扩张半径”），通过指定正值或负值来使投影面积增大或减小。一个正值的扩张半径加上两个为零的扩张偏移量以及为零的模糊值，得到的投影就像是一道实线的边框，来模拟出边框。

```css
.box2{
  width: 6.25rem;
  height: 6.25rem;
  background-color: aqua;
  box-shadow: 0 0 0 .625rem #ccc;
}
```

![实例图片](2背景边框/img/4.png)

最重要的是`box-shadow`支持逗号分隔法，通过设定多个参数就能得到多重边框。

```css
.box3{
  margin: 10.25rem;
  width: 6.25rem;
  height: 6.25rem;
  background-color: aqua;
  box-shadow: 0 0 0 .625rem royalblue,
              0 0 0 1.25rem red,
              0 0 0 1.625rem palegreen;
}
```

![实例图片](2背景边框/img/5.png)

需要注意的一点是，`box-shadow`生成的边框是层层叠加的，所以第一个边框的扩张半径要小于第二个边框的扩张半径，否则第二个边框会覆盖第一个边框。

#### outline方案

在某些情况下只需要两层边框，并且不仅仅希望使用实线边框，希望使用更多丰富样式的边框，这时就可以先使用常规边框，然后再加一层`outline`生成的边框。

```css
.box4{
  margin: 10rem;
  width: 6.25rem;
  height: 6.25rem;
  background-color: aqua;
  border: .625rem solid greenyellow;
  outline: .625rem solid green;
}
```

![实例图片](2背景边框/img/6.png)

`outline`不仅支持`solid`样式，也支持其它诸如`dashed`之类的样式。

描边的另外好处是可以用`outline-offset`属性来控制它与元素边缘的距离，甚至可以是负值。

```css
.box5{
  width: 6.25rem;
  height: 6.25rem;
  background-color: black;
  outline: .0625rem dashed white;
  outline-offset: -.625rem;
}
```

![实例图片](2背景边框/img/7.png)

不过需要注意的是`outline`不支持逗号分隔法，因此它是无法像`box-shadow`那样生成多重边框，另外它也没有`radius`属性，不能像普通边框`border`那样生成圆角边框。

### 背景定位

#### 难题

有时我们希望图片能和背景之间有一定空隙，而且不仅仅只是针对背景的左上角作为偏移的原点。我们给出以下解决方案。

#### background-position

`background-position`的扩展语法允许我们指定背景图片距离任意角的偏移量，只要我们在偏移量前面指定关键字。举例来说，如果想让背景图片跟右边缘保持20px的偏移量，同时跟底边保持10px的偏移量，可以使用如下方式做到：

```css
.box6{
  width: 300px;
  height: 200px;
  background:url(./img/8.png) no-repeat #58a;
  background-position: right 20px bottom 10px;
}
```

![实例图片](2背景边框/img/10.png)

在不支持`background-position`扩展语法的浏览器中，可以把定位值`bottom right`写进`background`的简写属性中。

```css
.box6{
  width: 300px;
  height: 200px;
  background:url(./img/8.png) no-repeat bottom right #58a;
  background-position: right 20px bottom 10px;
}
```

#### background-origin方案

在给背景图片设置距离某个角的偏移量时，如果希望偏移量始终与容器的内边距一致，那么在我们修改内边距的值时，每次都需要在三个地方更新这个值，代码就不够DRY。

在默认情况下，`background-position`是以`padding-box`为基准的，因此`top left`默认指的是`padding box`左上角。`background-origin`属性可以修改这种基准，默认情况下它的值是`padding-box`，如果把它的值改成`content-box`，我们在`background-position`属性中使用的边角将以内容区边缘作为基准。

我们希望偏移量始终与容器内边距保持一致时，就可以把`background-origin`的值赋为`content-box`。

```css
.box7{
  width: 200px;
  height: 200px;
  padding: 10px;
  background: url(./img/8.png) no-repeat #58a top left;
  background-origin: content-box;
}
```

![实例图片](2背景边框/img/9.png)

#### calc()方案

把背景图片定位到距离底边10px且距离右边20px的位置，以背景图片左上角偏移的思路来考虑，其实是希望它能有一个100%-20px的水平偏移量，以及100%-10px的垂直偏移量，而`calc()`函数允许我们执行此类运算：

```css
.box8{
  width: 300px;
  height: 200px;
  background: url(./img/8.png) no-repeat #58a;
  background-position: calc(100% - 20px) calc(100% - 10px);
}
```

![示例图片](2背景边框/img/11.png)

### 边框内圆角

如果我们需要一个容器，它只在内侧有圆角，而在边框或描边的四个角在外部仍然保持直角的形状，可以用两个容器实现：

```html
<div class="box9">
  <div>
    hello World!
  </div>
</div>
```

```css
.box9{
  width: 12.5rem;
  margin: 1.25rem;
  background-color: #655;
  padding: .8em;
}
.box9>div{
  background: tan;
  border-radius: .8em;
  padding:1em;
}
```

![示例图片](./2背景边框/img/12.png)

如果只需要一个元素去实现这个效果，下面的解决方案或许有所帮助：

#### 解决方案

```css
.box10{
  width: 12.5em;

  background: tan;
  border-radius: .8em;
  padding: 1em;
  box-shadow: 0 0 0 .6em #665;
  outline: .6em solid #665;
}
```

![示例图片](2背景边框/img/13.png)

这个的视觉效果首先是通过`border-radius`获得边框的圆角效果，`outline`使图形拥有描边效果，但是描边效果是没有圆角的，此时`border`与`outline`之间存在着空隙：

![示例图片](2背景边框/img/14.png)

这个空隙就要依靠`box-shadow`来填补，`box-shadow`的颜色与`outline`颜色一致就会融为一体，形成内圆角外直角的视觉效果。

### 条纹背景

现在我们需要条纹的背景，而且不通过加载图片的方式，而是以css的方式形成，现给出以下解决方案：

#### 解决方案

通过线性渐变可以很好地得到条纹背景效果：

```css
.box11{
  margin: 1.25em;
  width: 12.5rem;
  height: 12.5rem;
  background: linear-gradient(#fb3,#58a);
}
```

![实例图片](2背景边框/img/15.png)

还可以通过百分比的方式来控制两种颜色过渡时占据的空间大小。

```css
.box12{
  margin: 1.25em;
  width: 12.5rem;
  height: 12.5rem;
  background: linear-gradient(yellow 25%, skyblue 75%);
}
```

![实例图片](2背景边框/img/16.png)

`background: linear-gradient(yellow 25%, skyblue 75%);`，`yellow 25%`意味着从开始到25%的位置是黄色，而`skyblue 75%`则意味着从75%到结束位置是天蓝色，中间从25%到75%则是从黄色过渡到蓝色的空间。

如果使过渡的空间位置为0，即能生成条纹状背景：

```css
.box13{
  margin: 1.25em;
  width: 12.5rem;
  height: 12.5rem;
  background: linear-gradient(yellow 50%, skyblue 50%);
}
```

![示例图片](2背景边框/img/17.png)

我们可以通过`background-size`来控制背景条纹的大小，`background-size`为两个值时，第一个值用于指定背景图片宽度，第二个值用于指定背景图片高度：

```css
.box14{
  margin: 1.25em;
  width: 12.5rem;
  height: 12.5rem;
  background: linear-gradient(yellow 50%, skyblue 50%);
  background-size: 100% 30px;
}
```

由于背景默认是重复的，所以背景会被多条条纹填充完：

![示例图片](./2背景边框/img/18.png)

我们如果想要得到不等宽的条纹，只需修改颜色的起始位置或者结束位置。

```css
.box15{
  margin: 1.25em;
  width: 12.5rem;
  height: 12.5rem;
  background: linear-gradient(yellow 25%, skyblue 25%);
  background-size: 100% 30px;
}
```

![实例图片](2背景边框/img/19.png)

如果后一个颜色的位置值设置的要比前一个颜色的位置值要小，那么它始终将以前一个颜色结束的位置作为起始位置。

```css
.box16{
  margin: 1.25em;
  width: 12.5rem;
  height: 12.5rem;
  background: linear-gradient(yellow 20%, skyblue 0);
  background-size: 100% 30px;
}
```

![实例图片](./img/../2背景边框/img/20.png)

在`linear-gradient`中善用后一颜色位置值为0可以得到多条条纹。

```css
.box17{
  margin: 1.25em;
  width: 12.5rem;
  height: 12.5rem;
  background: linear-gradient(yellow 20%,skyblue 0, skyblue 60%,purple 0);
  background-size: 100% 30px;
}
```

![实例图片](2背景边框/img/21.png)

#### 垂直条纹

垂直条纹与水平条纹类似，只需要在线性渐变的参数前添加方向值：

```css
.box18{
  margin: .625rem;
  width: 12.5rem;
  height: 12.5rem;
  background: linear-gradient(to right,yellow 40%,skyblue 0);
  background-size:30px 100%;
}
```

![实例图片](2背景边框/img/22.png)

水平条纹是因为线性渐变的方向值默认是`to bottom`，除了`to right`，也可以用`95deg`这样的角度值。

修改了方向值还需要修改`background-size`，这个属性决定背景在宽度与高度上占据的大小。

#### 斜向条纹

如果你以为想要得到45度斜向的条纹,只需要把`linear-gradient`第一个有关方向的参数设定为`45deg`就行了，那么就错了：

```css
.box19{
  margin: .625rem;
  width: 12.5rem;
  height: 12.5rem;
  background: linear-gradient(45deg,yellow 40%,skyblue 0);
  background-size:30px 30px;
}
```

![实例图片](2背景边框/img/23.png)

从上图中可以看到生成的背景实际上是重复的三角形拼合而成。

如果想要得到重复的斜向条纹，可以使用`repeating-linear-gradient`设置。

```css
.box20{
  margin: .625rem;
  width: 6.25rem;
  height: 6.25rem;
  background: repeating-linear-gradient(45deg,yellow 0, yellow 15px,skyblue 0,skyblue 30px);
}
```

![示例图片](2背景边框/img/24.png)

### 复杂背景图案

#### 网格

把水平条纹与垂直条纹叠加起来就能得到各种样式的网格：

```css
.box1{
  width: calc(210px - 15px);
  height: calc(210px - 15px);
  background: white;
  background-image:
    linear-gradient(90deg, rgba(200,0,0,.5) 50% ,transparent 0),
    linear-gradient(rgba(200,0,0,.5) 50%,transparent 0);
  background-size: 30px 30px;
}
```

![示例图片](2背景边框/img/25.png)

在一些情况下，我们希望每个格子的大小可以调整，而网格线的粗细可以调整：

```css
.box2{
  margin: 20px;
  width: 200px;
  height: 200px;
  background: #58a;
  background-image: 
    linear-gradient(white 1px, transparent 0),
    linear-gradient(90deg, white 1px,transparent 0);
  background-size: 30px 30px;
}
```

![示例图片](2背景边框/img/26.png)

我们甚至可以把两幅不同线宽、不同颜色的网格叠加起来，得到更加逼真的蓝图网格：

```css
.box3{
  margin: 20px;
  width:200px;
  height: 200px;
  background: #58a;
  background-image: 
    linear-gradient(white 2px, transparent 0),
    linear-gradient(90deg, white 2px,transparent 0),
    linear-gradient(hsla(0,0%,100%,.3) 1px,transparent 0),
    linear-gradient(90deg,hsla(0,0%,100%,.3) 1px,transparent 0);
  background-size: 
    100% 75px ,75px 100%,
    100% 15px, 15px 100%;
}
```

![示例图片](2背景边框/img/27.png)

#### 波点

径向渐变允许我们创建圆形、椭圆或是它们中的一部分，能够创建的最简单图案是圆点的阵列：

```css
.box4{
  width: 100px;
  height: 100px;
  background: #655;
  background-image: radial-gradient(tan 30%,transparent 0);
  background-size: 30px 30px;
}
```

![实例图片](2背景边框/img/28.png)

然而此时生成的波点还不够实用，可以生成两层圆点阵列图案，并把它们错开。

```css
.box5{
  margin: 10px;      
  width: 100px;
  height: 100px;
  background: #655;
  background-image: 
    radial-gradient(tan 30%,transparent 0),
    radial-gradient(tan 30%,transparent 0);
  background-size: 30px 30px;
  background-position: 0 0,15px 15px;
```

![示例图片](2背景边框/img/29.png)

#### 棋盘图案

我们可以利用两个45度线性渐变形成的三角形图案拼合形成小正方形形状的背景：

```css
.box5{
  margin: 10px;
  width: 100px;
  height: 100px;
  background: #655;
  background-image:
    radial-gradient(tan 30%,transparent 0),
    radial-gradient(tan 30%,transparent 0);
  background-size: 30px 30px;
  background-position: 0 0,15px 15px;
}
```

![实例图片](2背景边框/img/30.png)

第二层渐变的位置值之所以是75%，是因为小三角形占据大方块的四分之一，而其余均为大方块的背景色，又用于线性渐变从底往上，所以首先要设定透明背景色。

此时尚未到达我们想要的效果，只需将第二层渐变在水平和垂直方向均移动贴片长度的一半，就可以将它们拼合成完整的方块：

```css
.box7{
  margin: 10px;
  width: 100px;
  height: 100px;

  background-color: #eee;
  background-image:
    linear-gradient(45deg,#bbb 25%, transparent 0),
    linear-gradient(45deg, transparent 75%, #bbb 0);
  background-position: 0 0,15px 15px;
  background-size: 30px 30px;
}
```

![示例图片](2背景边框/img/31.png)

可以看到两个小三角形之间依然存在着空隙，可以稍稍调整三角形颜色的位置值（`transparent`前的参数`）。

但实际上这依然只是我们想要的棋盘效果的一半，这时我们可以根据这一半的效果复刻出另一半，只需要稍稍调整它的背景位置值`background-position`。

```css
.box8{
  margin: 10px;
  width: 120px;
  height: 120px;

  background-color: #eee;
  background-image:
    linear-gradient(45deg,#bbb 25%, transparent 0),
    linear-gradient(45deg, transparent 74%, #bbb 0),
    linear-gradient(45deg, #bbb 25%, transparent 0),
    linear-gradient(45deg, transparent 75%,#bbb 0);
  background-position: 
    0 0, 15px 15px,
    15px 15px, 30px 30px;
  background-size: 30px 30px;
}
```

![示例图片](2背景边框/img/32.png)

当你看到这个效果形成的小正方形左上角并不是（0，0），可能会对`background-position`从（0,0）开始感到疑惑，因为这是`background-position`决定的是整个背景的起始位置，而由于线性渐变默认从底部网上，所以（0，0）是属于线性渐变透明色的，而灰色则处于背景的底部。

这个代码还可以进行优化，比如把处在贴片顶角的三角形两两组合起来（即把第一组和第二组合并成一层渐变，把第三组和第四组合并成一组渐变），然后还可以把深灰色改成半透明的黑色，这样只需修改底色就能改变整个棋盘的色调。

```css
.box9{
  width: 100px;
  height: 100px;
  margin: 10px;

  background: #eee;
  background-image: 
    linear-gradient(45deg,rgba(0,0,0,.25) 25%,transparent 0, transparent 76%, rgba(0,0,0,.25) 0),
    linear-gradient(45deg, rgba(0,0,0,.25) 25%,transparent 0, transparent 74%, rgba(0,0,0,.25) 0);
  background-position: 0 0, 15px 15px;
  background-size: 30px 30px;
}
```

### 伪随机背景

css本身并不提供生成随机数的方法，所以我们只能尽量去模拟出伪随机背景

#### 解决方案

为了更加真实地模拟出条纹的随机性，我们要使用多种条纹，一种颜色作为底色，另外三种颜色作为条纹，然后再让条纹以不同的间隔进行重复平铺：

```css
.box1{
  width: 250px;
  height: 100px;

  background: hsl(20,40%,90%);
  background-image:
    linear-gradient(90deg,#fb3 10px, transparent 0),
    linear-gradient(90deg, #ab4, 20px, transparent 0),
    linear-gradient(90deg, #655, 20px, transparent 0);
  background-size: 80px 100%, 60px 100%, 40px 100%;
}
```

![实例图片](2背景边框/img/33.png)

该图案生成的原理是通过线性渐变生成的贴片叠加，`background-size`控制了每个贴片的间隔，最先生成的`#fb3`贴片位于最上层，之后依赖于`transparent`的透明效果能够显示下层的贴片，最下层则是整个的背景色`hsl(20,40%,90%)`。

但是这种方案实现的效果依然不够随机，因为80px、60px、40px的公倍数是240px，意味着该图案每隔240px就会重复一遍。

应当尽量减少公倍数的出现，所以应当为这些贴片的间隔使用`素数`作为值的大小，因为素数的公倍数出现的情况比较少。

```css
.box2{
  width: 250px;
  height: 100px;
  margin: 10px;
  
  background: hsl(20,40%,90%);
  background-image: 
    linear-gradient(90deg,#fb3 10px, transparent 0),
    linear-gradient(90deg, #ab4, 20px, transparent 0),
    linear-gradient(90deg, #655, 20px, transparent 0);
  background-size: 83px 100%, 67px 100%, 41px 100%;
}
```

![示例图片](2背景边框/img/34.png)

这个技巧被称作“蝉原则”。

## 椭圆

### 自适应的椭圆

为任何正方形元素设置一个足够大的`border-radius`，就可以把它变成一个圆：

```css
background: #fb3;
width: 200px;
height: 200px;
border-radius: 100px;
```

`border-radius`指定了我们要得到的圆的半径，但是这一数值在大于一半容器大小的情况下，依然会得到一个圆。

然而我们更希望它能根据其内容自动调整并适应。在这个案例中，我们希望得到一个能依据宽高变形为椭圆或圆的自适应圆。

`border-radius`存在一个效果：它可以单独指定水平与垂直的半径，只需要用一个斜杠（/）分隔这两个值即可。这个特性允许我们在拐角处创建椭圆圆角。

如果`border-radius`的宽高是容器的宽高的一半，那么将得到一个精确的椭圆，恰好`border-radius`允许使用百分比值：

```css
border-radius: 50% / 50%;
```

然而由于`border-radius`的宽高被设置成了同样的50%，我们可以使用更加简洁的方式。

```css
border-radius: 50%;
```

### 半椭圆

现在我们能够生成一个自适应的椭圆了，接下来我们要生成的是半椭圆形。

`border-radius`允许我们用展开的方式，分别设置它每个角的值：

* `border-top-left-radius`

* `border-top-right-radius`

* `border-bottom-right-radius`

* `border-bottom-left-radius`

我们仍可以使用`border-radius`这个简写方式，只是需要用空格来隔开为每个角设置的值，另外，这四个值会分别从左上角开始以顺时针顺序应用到元素的拐角。

如果要为四个角设置不同的水平和垂直半径，方法是在斜杠前指定1~4个值，在斜杠后指定另外1~4个值。斜杆前设置的垂直半径，斜杠后是水平半径。

如果我们需要得到一个垂直的半椭圆形，就需要考虑为元素每个角设置的`border-radius`的情况，由于这个半椭圆形是垂直的，则它的左右两边对称，唯一需要注意的应当是下面两个角的垂直半径设置成0，上边两角设置成100%，水平的半径每个角都为50%（要多想）。

```css
.box1{
  width: 100px;
  height: 200px;
  border-radius: 50% / 100% 100% 0 0;
  background-color: #ffcc33;
}
```

![示例图片](3图形/img/35.png)

### 四分之一椭圆

和半椭圆形的设置是一样的，无非是每个角的`border-radius`设置的不一样。

```css
.box2{
  margin: 10px;
  width:200px;
  height:100px;
  background-color: #fcc;
  border-radius: 0 100% 100% 0 / 0 0 100% 100%;
}
```

![示例图片](3图形/img/36.png)

## 平行四边形

我们可以使用`skew()`的变形属性来对矩形进行斜向拉伸。

```css
.box1{
  width: 100px;
  height: 50px;
  margin: 20px;

  background-color: #0ffcc0;
  transform: skewX(45deg);
}
```

![实例图片](3图形/img/37.png)

但是这会导致它的内部内容也会发生倾斜：

```html
<div class="box1">HELLO</div>
```

![实例图片](3图形/img/38.png)

以下提供解决方案

### 嵌套元素方案

可以对内容再应用一次反向的`skew()`变形，从而抵消容器变形的效果，但这意味着还需要再添加额外的一层HTML元素。

```html
<div class="box2">
  <div>Hello</div>
</div>
```

```css
.box2{
  margin: 20px;
  width: 100px;
  height: 60px;

  background-color: #5588aa;
  transform: skewX(-45deg);
}
.box2>div{
  transform: skewX(45deg);
}
```

![示例图片](3图形/img/39.png)

### 伪元素方案

另一种思路是把所有样式（背景、边框）应用到伪元素上，然后对伪元素进行变形。而我们的文字内容则被包含在宿主元素中，因而内容不受伪元素的影响。

我们希望伪元素能保持良好的灵活性，伪元素可以自动继承其宿主元素尺寸，甚至宿主元素是由内容决定时也能保持。一个简单的办法是给宿主元素应用`position: relative`，并为伪元素设置`position: absolute`，然后把所有的偏移量设置为零，以便能让它在水平和垂直方向上都被拉伸到宿主元素尺寸。

```css
.box3{
  margin: 80px;
  position: relative;
  width: 80px;
  height: 50px;
  text-align: center;
  padding-top: calc(50px - 16px);
}
.box3::before{
  content: '';
  position: absolute;

  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  background-color: #554433;
  transform: skewX(45deg);
}
```

![实例图片](3图形/img/40.png)

## 菱形

现在我们想要把图片裁切成菱形，有两种解决方案：

### 基于变形的方案

把图片用一个`<div>`包裹起来，然后对其应用相反的`rotate()`变形样式：

```css
.box1{
  width:180px;
  transform: rotate(45deg);
  overflow: hidden;
}

.box1>img{
  max-width: 100%;
  transform: rotate(-45deg);
}
```

```html
<div class="box1">
  <img src="./img/cart.png" alt="">
</div>
```

![实例图片](3图形/img/41.png)

然而这并不是我们想要的效果，原因在于`max-width: 100%`，100%会被解析为容器（`.box1`）的边长。但是我们实际上想要让图片与容器的对角线相等，而不是与边长相等。

因而我们要用`scale()`变形样式把图片放大（`scale`是以图片的中心点进行缩放的）。

```css
.box2{
  width: 180px;
  transform: rotate(45deg);
  overflow: hidden;
}
.box2>img{
  max-width: 100%;
  transform: rotate(-45deg) scale(1.43);
}
```

以上的放缩`scale()`的值是由勾股定理计算得出，放缩的大小等于图片的对角线与图片的边之比，如果`scale()`的值大于这个比值图片会放大，但不影响菱形效果。

#### 裁切路径方案

我们还可以用`clip-path`裁切路径属性来裁切任何我们想要的形状。这个例子中将用`polygon()`多边形函数来指定一个菱形。

```css
.box3>img{
  clip-path: polygon(50% 0,100% 50%,50% 100%,0 50%);
  transition: 1s clip-path;
}
```

![示例图片](3图形/img/42.png)

`polygon()`函数中的每个以逗号分隔开的数值都是多边形要取的点。

`clip-path`这个属性甚至可以参与动画，只要我们的动画是在同一种形状函数之间进行的。

比如，我们希望图片在鼠标在悬停时平滑地扩展为完整的面积，只需要这样做：

```css
img{
  clip-path: polygon(50% 0,100% 50%,50% 100%, 0 50%);
  transition: 1s clip-path;
}
img:hover{
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
}
```

![示例图片](3图形/img/43.gif)

## 切角效果

### 普通切角

假设我们只需要一个角被切掉的效果，以右下角为例。渐变可以接受一个角度（45deg）作为方向，而且色标的位置信息可以是绝对的长度值。因而我们可以用一个线性渐变就能完成右下角被切掉的效果，只需要把一个透明色标放在切角处。

```css
.box1{
  width:200px;
  height: 100px;
  background: 
    linear-gradient(45deg, transparent 15px, #58a 0);
}
```

![示例图片](3图形/img/44.png)

现在我们想要两个角被切掉的效果，以底部的两个角为例，只用一层渐变是不够的，还需要再加一层。

```css
.box2{
  margin: 20px;
  width: 200px;
  height: 100px;
  background: 
    linear-gradient(-45deg, transparent 15px, #58a 0) right,
    linear-gradient(45deg, transparent 15px, #655 0) left;
}
```

然而这两层渐变会相互覆盖，最终得到的效果是：

![示例图片](3图形/img/45.png)

所以我们用`background-size`使两层渐变分开。

```css
.box3{
  margin: 20px;
  width: 200px;
  height: 100px;
  background: 
    linear-gradient(-45deg, transparent 15px, #58a 0) right,
    linear-gradient(45deg, transparent 15px, #655 0) left;
  background-size: 50% 100%;
}
```

![示例图片](3图形/img/46.png)

然后这依然不是想要的效果，原因在于`background`默认是`repeat`的，需要把`background-repeat`设置成`no-repeat`。

```css
.box4{
  margin: 20px;
  width: 200px;
  height: 100px;
  background:
    linear-gradient(-45deg, transparent 15px, #58a 0) right,
    linear-gradient(45deg, transparent 15px, #655 0) left;
  background-size: 50% 100%;
  background-repeat: no-repeat;
}
```

![示例图片](3图形/img/47.png)

如果我们想要四个角都被切掉的效果，就可以用四层渐变：

```css
.box5{
  margin: 20px;
  width: 200px;
  height: 100px;
  background: 
    linear-gradient(-45deg, transparent 15px, #58a 0) bottom right,
    linear-gradient(45deg, transparent 15px, #58a 0) bottom left,
    linear-gradient(-135deg, transparent 15px, #58a 0) top right,
    linear-gradient(135deg, transparent 15px, #58a 0) top left;
  background-size: 50% 50%;
  background-repeat: no-repeat;
}
```

![实例图片](3图形/img/48.png)

### 弧形切角

上述渐变还有一个变种，可以用来创建弧形切角（也叫“内凹圆角”）。我们使用径向渐变来达到这种效果：

```css
.box6{
  width: 200px;
  height: 100px;

  background: 
    radial-gradient(circle at top left, transparent 15px, #58a 0) top left,
    radial-gradient(circle at top right, transparent 15px, #58a 0) top right,
    radial-gradient(circle at bottom right, transparent 15px, #58a 0) bottom right,
    radial-gradient(circle at bottom left, transparent 15px, #58a 0) bottom left;
  background-size:50% 50%;
  background-repeat: no-repeat;
}
```

![示例图片](3图形/img/49.png)

### 裁切路径方案

可以使用`clip-path`将一个元素切出20px大小（以水平方向度量）的斜面切角：

```css
.box7{
  width: 200px;
  height: 100px;
  background-color: #58a;
  clip-path:
    polygon(
      20px 0, calc(100% - 20px) 0, 100% 20px,
      100% calc(100% - 20px), calc(100% - 20px) 100%,
      20px 100%, 0 calc(100% - 20px), 0 20px
    );
}
```

![示例图片](3图形/img/50.png)

这个方案的不足在于，它会连容器中的文字一并裁切掉，如上图所示。

## 梯形标签页

### 3D旋转模拟

并没有一组2D变形属性能生成一个梯形，但是我们可以利用透视关系在css中用3D旋转来模拟出这个效果：

```css
.box1{
  width: 100px;
  height: 50px;
  margin: 20px;
  background-color: #58a;
  transform: perspective(.5em) rotateX(5deg);
}
```

![实例图片](3图形/img/51.png)

但是如图所示，它依然有瑕疵，容器中的文字也跟着变形了。然而，与2D图形不同的是，它的内部的变形效果是不可逆转的，不能使用逆向变形的来抵消外部变形。

因此我们可以用伪元素的方案把变形效果作用在伪元素上。

```css
.box2{
  position: relative;
  display: inline-block;
  padding: .5em 1em .35em;
  color: white;
}
.box2::before{
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  background-color: #58a;
  transform: perspective(.5em) rotateX(5deg);
}
```

![示例图片](3图形/img/52.png)

然而这个方案依然存在着问题，我们还未设置`transform-origin`，因此应用的变形效果会让这个元素以它自身的中心线为轴进行空间上的旋转，它的尺寸会比较难以掌握。

为了让它的尺寸更好掌握，可以为它指定`transform-origin: bottom;`，当它在3D空间中旋转时，可以把它的底边固定住，致使它只会有高度上发生变化。在垂直方向的缩放程度（也就是`scaleY()`变形属性到达130%时，可以弥补变形时高度上的缩水。

```css
.box3{
  position: relative;
  display: inline-block;
  padding: .5em 1em .35em;
  color: white;
  }
.box3::before{
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  background-color: #58a;
  transform-origin: bottom;
  transform: perspective(.5em) rotateX(5deg) scaleY(1.3) perspective(.5em);
}
```

![示例图片](3图形/img/53.png)

我们把`transform-origin`修改成`bottom left`或`bottom right`，就可以立即得到左侧倾斜或右侧倾斜的梯形。

然而需要注意的是以上的效果中的斜边角度依赖于元素的宽度，对于内容长度不等却想要得到斜度一致的梯形就不合适了。

## 简单的饼图

### 基于`transform`的解决方案

这个方案在结构层面是最佳的选择：它只需要一个元素作为容器，而其他部分是由伪元素、变形属性和css渐变来实现的。

假设我们目前需要一个简单的饼图，其展示的比率是固定的20%，首先把这个元素设置为一个圆形，以它为背景。然后使用棕色来显示比率。

把圆形的左右两部分指定为上述两种颜色，然后用伪元素覆盖上去，通过旋转决定露出多大的扇区。

```css
.box1{
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: yellowgreen;
  background-image:
    linear-gradient(to right, transparent 50%, #655 0);
}
```

![示例图片](3图形/img/54.png)

我们可以继续设置伪元素的样式，让它起到遮盖层的作用：

```css
.box1::before{
  content: '';
  display: block;
  margin-left: 50%;
  height: 100%;
}
```

然而此时它只是一个透明的矩形，我们还需要继续考虑为它设置其它的属性以达到我们想要的效果。

我们希望它能遮盖圆形的棕色部分，因此应该给它指定绿色的背景，这里使用`background-color: inherit`让它与其宿主颜色保持一致。

我们希望它是绕着圆形的圆心来旋转，对它来说，这个点就是它左边缘的中心点，因此我们应该把它的`transform-origin`设置为`0 50%`，或者干脆写成`left`。

我们不希望它呈现出矩形的形状，否则它会突破整个饼图的圆形范围，因此要么给`.box`设置`overflow: hidden`的样式，要么给这个伪元素指定合适的`border-radius`属性来把它变成一个半圆。

把上述思路转换成css则是：

```css
.box1{
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: yellowgreen;
  background-image:
    linear-gradient(to right, transparent 50%, #655 0);
}
.box1::before{
  content: '';
  display: block;
  margin-left: 50%;
  height: 100%;
  border-radius: 0 100% 100% 0 / 50%;
  background-color: inherit;
  transform-origin: left;
}
```

然后通过设置`rotate()`变形属性来让这个伪元素转起来。例如，我们要显示出20%的比率，可以指定旋转角度为72deg(0.2*360=72)，写成`.2turn`更加直观。

```css
.box1{
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: yellowgreen;
  background-image:
    linear-gradient(to right, transparent 50%, #655 0);
}
.box1::before{
  content: '';
  display: block;
  margin-left: 50%;
  height: 100%;
  border-radius: 0 100% 100% 0 / 50%;
  background-color: inherit;
  transform-origin: left;
  transform: rotate(.2turn);
}
```

![实例图片](3图形/img/55.png)

然而由于一开始为圆形设置一半棕色一半绿色，所以当`rotate()`的值超过`.5turn`时，它就是完整的绿圆形状。

我们可以使用上述技巧的反向版本来实现这个范围的比率：设置一个棕色的伪元素，让它在0至.5turn的范围内旋转。

因此一个60%比率的饼图的形状就是：

```css
.box2{
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: yellowgreen;
  background-image:
  linear-gradient(to right, transparent 50%, #655 0);
}
.box2::before{
  content: '';
  display: block;
  margin-left: 50%;
  height: 100%;
  border-radius: 0 100% 100% 0 / 50%;
  background-color: #655;
  transform-origin: left;
  transform: rotate(.1turn);
}
```

![示例图片](3图形/img/56.png)

甚至可以用一个css动画来实现一个饼图从0到100%的动画，从而得到一个酷炫的进度指示器。

```css
.box3{
  margin: 20px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: yellowgreen;
  background-image:
  linear-gradient(to right, transparent 50%, #655 0);
}
@keyframes spin {
  to {
    transform: rotate(.5turn);
  }
}
@keyframes bg{
  50% {
    background: #655;
  }
}
.box3::before{
  content: '';
  display: block;
  margin-left: 50%;
  height: 100%;
  border-radius: 0 100% 100% 0 / 50%;
  background-color: inherit;
  transform-origin: left;
  animation: 
    spin 3s linear infinite, 
    bg 6s step-end infinite;
}
```

![示例图片](3图形/img/57.gif)

我们可以通过以上的动画中的任意时间点状态得到我们想要的比率，比如说动画持续时间是6s，饼图上显示的比率就是我们`animation-delay`设置为-1.2s，就能显示出20%的比率。这里的动画是处于暂定状态的，因此不会有副作用。

我们可以用内联的方式为`div`设置`anitmation-delay: inherit`属性，因此我们让饼图显示为20%的结构代码为：

```html
<div class="box5" style="animation-delay: -20s">
</div>
```

我们为动画准备的css代码就会变成这样：

```css
.box4{
  margin: 20px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: yellowgreen;
  background-image:
  linear-gradient(to right, transparent 50%, #655 0);
}
@keyframes spin{
  to {
    transform: rotate(.5turn);
  }
}
@keyframes bg{
  50% {
    background: #655;
  }
}
.box4::before{
  content: '';
  display: block;
  margin-left: 50%;
  height: 100%;
  border-radius: 0 100% 100% 0 / 50%;
  background-color: inherit;
  transform-origin: left;
  animation: 
    spin 50s linear infinite,
    bg 100s step-end infinite;
  animation-play-state: paused;
  animation-delay: inherit;
}
```

![示例图片](3图形/img/58.png)

我们希望把比率文字放到饼图的中心处，从而方便用户选中它，为了实现这一点，应该考虑一步骤：

* 把饼图的`height`换成`line-height`

* 通过绝对定位完成伪元素的尺寸设置和定位操作，使文字不会推到下面。

* 添加`text-align: center;`来使文字水平居中。

## 单侧投影

`box-shadow`是一个能为容器产生阴影效果的属性，它含有四个属性，例：

```css
box-shadow: 2px 2px 4px rgba(0,0,0,.5);
```

我们可以通过以下步骤来理解这个属性生成阴影效果的原理：

1. 以容器位置及大小作为模板再生成一个颜色为`rgba(0,0,0,.5)`并与容器相同大小的元素，

2. 这个新生成的元素向右移动2px，再向下生成2px，

3. 这里我们设置了一个4px的模糊半径，此时就会以四个方向，每个方向的阴影边缘线（元素边框）为中心，左右扩展2px的区域，共4px，共同组成这个阴影区域。

4. 接下啦模糊后的元素与原始元素重叠的部分就会被减除，会保留原始元素的部分，减除的只是模糊元素。

![示例图片](4视觉效果/img/59.png)

使用4px的模糊半径意味着现在模糊后的元素会比原来的元素的尺寸要大8px，在设置合适的偏移量后得到只有右边模糊和下边模糊的元素，但是这样依然会显得模糊的区域太过浓重，因此我们想要设置一个单侧模糊。

最终的解决方案来自`box-shadow`的第四个长度参数，它排在模糊半径之后，称作扩张半径。这个参数会依据指定的值去扩大或缩小投影的尺寸。举例来说，一个-5px的扩张半径会把投影的宽度和高度各减少10px（即每边各5px）。

如果我们想要底边存在一个不太厚重的阴影，而别的边不需要设置阴影，就可以通过垂直移动元素，然后通过扩张半径去除其他边框的阴影。

```css
.box1{
  width:100px;
  height: 50px;
  background-color: orange;
  box-shadow: 0 5px 4px -4px black;
}
```

![示例图片](4视觉效果/img/60.png)

## 邻边投影

此处主要解决的是在元素的两条相邻边上设置投影，根据单侧投影的技巧，做出如下调整：

1. 不需要把投影缩得太小，只需要把阴影藏进一侧，另一侧自然露出。因此，扩张半径不应该是模糊半径的相反值，而是相反值的一半。

2. 需要指定两个偏移量，因为需要投影在水平和垂直方向上同时移动，它们的值需要大于等于模糊半径的一半，令另外两条边的投影能被藏起来。

```css
.box2{
  margin: 10px;

  width: 100px;
  height: 50px;
  background-color: orange;
  box-shadow: 3px 3px 6px -3px black;
}
```

![实例图片](4视觉效果/img/61.png)

## 双侧投影

在这里我们想要得到元素两条对边的投影，由于扩张半径在四个方向上的作用是均等的（无法指定投影在水平方向放大，而在垂直方向上缩小），唯一的方法是用两块投影（每边各一块）来达到目的，基本上是将“单侧投影”的技巧运用两次：

```css
.box2{
   margin: 10px;

   width: 100px;
   height: 50px;
   background-color: orange;
   box-shadow: 3px 3px 6px -3px black;
}
```

![示例图片](4视觉效果/img/62.png)

## 不规则投影

`box-shadow`能为`border-radius`生成的形状添加投影，但是如果元素添加了一些伪元素或半透明的装饰之后，`border-radius`却会忽视透明部分，这类情况包括：

1. 半透明图像、背景图像、或者`border-image`;

2. 元素设置了点状、虚线或半透明的边框，但没有背景（或者当`background-clip`不是`border-box`时）；

3. 伪元素在原有元素上添加的形状

4. 切角效果中的切角形状

5. 折角效果中的折角形状

6. `clip-path`生成的形状，比如菱形形状

以下提供解决方案：

### 解决方案

滤镜效果规范提供一个叫做`filter`的新属性，这个属性是从svg那里借鉴过来的。`filter`的相关属性包括`blur()`、`grayscale()`、`drop-shadow()`，可以使用空格分割法一次设置多个`filter`的属性值。

```css
filter: blur() grayscale() drop-shadow();
```

`drop-shadow()`滤镜可接受的参数基本上与`box-shadow()`一致，但不包括扩张半径和`inset`关键字，也不支持逗号分割的多层投影语法。

```css
bos-shadow: 2px 2px 10px rgba(0, 0, 0, .5);
```

可以改写成：

```css
filter: drop-shadow(2px 2px 10px rgba(0,0,0,.5));
```

`drop-shadow`在平行四边形效果上的使用：

```css
.box3{
   margin: 80px;
   position: relative;
   width: 80px;
   height: 50px;
   text-align: center;
   padding-top: calc(50px - 16px);
   -webkit-filter: drop-shadow(10px 10px 10px rgba(0,0,0,.5));
   filter: drop-shadow(10px 10px 10px rgba(0,0,0,.5));

 }
.box3::before{
   content: '';
   position: absolute;

   top: 0;
   right: 0;
   bottom: 0;
   left: 0;
   z-index: -1;
   background-color: #554433;
   transform: skewX(45deg);
}
```

![示例图片](4视觉效果/img/65.png)

需要注意的是如果文字效果使用了`text-shadow`，而容器又使用了`drop-shadow()`，那么`drop-shadow`的效果又会重复叠加到设置了`text-shadow`的文字上。

## 染色效果

染色效果，为一幅灰度图片（或是被转换为灰度模式的彩色图片）添加染色效果，可以为不同风格的额照片带来视觉上的一致性。

### 基于滤镜的解决方案

`sepia()`，降低饱和度的橙黄色染色效果，几乎像素的色相值会被收敛到35~40.

使用`saturate()`滤镜可以给像素提升饱和度，具体饱和度取决于实际情况。

`hue-rotate`滤镜可以为每个像素的色相以指定度数进行偏移。

![实例图片](4视觉效果/img/66.png)

```css
.box1{
  filter: sepia(1) saturate(3) hue-rotate(290deg);
}
```

```html
<div class="box1">
 <img src="./img/66.png" alt="">
</div>
```

上述代码的作用效果是：

![示例图片](4视觉效果/img/67.png)

### 混合模式解决方案

混合模式控制了上层元素的颜色与下层颜色进行混合的方式，用它来实现染色效果，需要用到的混合模式是`luminosity`，这种`luminosity`混合模式会保留上层元素的HSL高度信息，并从它的下层吸取色相饱和度信息。把下层元素设置成我们想要的主色调，而把待处理的图片放在上层并设置成这种混合模式，本质上就是在染色。

如果要对一个元素设置混合模式，有两个属性可以发挥作用：`min-blend-mode`可以为整个元素设置混合模式，`background-blend-mode`可以为每层背景单独设置混合模式。

有两种方式可以处理我们的图片：

1. 第一种选择，把需要处理的图片包裹进一个容器中，并把容器的背景色设置成我们想要的主色调。

2. 第二种选择，不用图片元素，而是用`<div>`元素，把这个元素第一层背景设置成要染色的图片，并把第二层背景设置我们想要的主色调。

针对第一种情况，假如这个图片是个超链接，那么它会被包裹进`<a>`元素中，为`<a>`元素的背景颜色设置成主色调颜色，在为图片`<img>`使用混合模式就能得到染色的图片效果。

```css
.box2{
  display: inline-block;
  background: hsl(355, 100%, 50%);
}
.box2>img{
  mix-blend-mode: luminosity;
}
```

![实例图片](4视觉效果/img/68.png)

我们如果想要给混合模式的图片设置一个从单色样式变化到彩色样式的css过渡效果，可以考虑使用`background-blend-mode`为图片设置混合模式后，先让过渡前的图片与我们想要的主色调的颜色混合，再让过渡后的图片与透明色混合，以此形成一个过渡效果。

```css
.box3{
   width: 220px;
   height: 150px;
   background-size: cover;
   background-color: hsl(355, 100%, 50%);
   background-blend-mode: luminosity;
   background-image: url(./img/66.png);
   transition: .5s background-color;
}
.box3:hover{
   background-color: transparent;
}
```

![示例图片](4视觉效果/img/69.gif)

需要注意的是这种方式不够理想，图片大小会被写死，语义上这个元素不是图片，不会被读屏器读出来。



