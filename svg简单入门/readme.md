# svg简易入门

## svg标签

`<svg>`标签相当于屏幕的窗口（也就是视口），所有的图形都绘制在这个视口上，可以在`svg`标签内通过`width`与`height`为它设置大小，例：

```html
<svg width="200px" height="200px">
```

这里的视口是宽高均为200px的正方形，宽高的长度也可以不使用`px`，而是使用相对大小：

```html
<svg width="200" height="200">
```

这样它的宽高实际上屏幕大小单位，例如`px`。

在`svg`标签内含有一个属性`viewBox`，`viewBox`属性定义了视口上可以显示的区域：

```html
<svg width="200" height="200" viewBox="0 0 50 50">
```

上述代码表示`viewBox`从(0,0)点开始，100宽*100高的区域。这个100*100的区域，会放到200*200的画布上显示。于是就形成了放大两倍的效果。(也就是说第一个、第二个参数是起点的坐标，第三、第四个参数是终点的坐标，切记Y轴是从上往下的)。

## 图形

### 线段

`<line>`标签用于绘制线段：

```html
<svg width="200" height="100" viewBox="0 0 200 50">
  <line x1="50" y1="0" x2="40" y2="10"/>
</svg>
```

`<line>`标签内有四个属性，`x1`、`y1`用来表示线段起点的坐标，`x2`、`y2`用来表示线段终点的坐标。

### 折线

`<polyline>`用来绘制折线：

```html
<svg width="200" height="100" viewBox="0 0 200 50">
  <polyline points="45,0 50,0 50,15 40,15 45,0"/>
</svg>
```

`<polyline>`标签内含有`points`属性，用来表示折线的每个端点的坐标，端点横坐标与纵坐标用`,`隔开，而每个端点的坐标用空格隔开。

要注意的是`<polyline>`标签在绘制折线时，在默认情况下绘制的是一个闭合的图形，即第一个坐标会与最后一个坐标有条连线，被折线包裹的区域会被上色为默认颜色。

### 矩形

`<rect>`用来绘制矩形：

```html
<svg width="200" height="100" viewBox="0 0 200 50">
  <rect x="10" y="10" width="10" height="10"/>
</svg>
```

属性`x`，`y`用来表示矩形左上角端点的坐标，`width`和`height`用来控制宽度与长度。

### 多边形

`<polygon>`标签用来绘制多边形：

```html
<svg width="200" height="100" viewBox="0 0 200 50">
  <polygon points="0,0 10,0 20,5 5,5"/>
</svg>
```

与“折线”相同，`points`属性用来确定多边形每个端点的坐标。

### 圆形

`<circle>`标签用来绘制圆形：

```html
<svg width="200" height="100" viewBox="0 0 200 50">
  <circle cx="20" cy="30" r="5"/>
</svg>
```

`<circle>`标签有三个基本属性，`cx`、`cy`用来表示圆心的坐标，`r`用来表示圆的半径。

### 椭圆

`<ellipse>`标签用来绘制椭圆：

```html
<svg width="200" height="100" viewBox="0 0 200 50">
  <ellipse cx="40" cy="30" rx="10" ry="5"/>
</svg>
```

`<ellipse>`标签的`cx`、`cy`表示椭圆的中心坐标，`rx`、`ry`分别横轴的半长与纵轴的半长。

## 图形的`style`设置

可以在css中设置图形的`style`，

```css
stroke: "black";
stroke-width: 1;
```

`stroke`类似于普通css容器中的`border`属性，可以设置图形边框的颜色，如果是“线”或“折线”即表示线段的颜色。

`stroke-width`能设置图形边框或者线段的宽度。

```css
fill:red;
fill: transparent;
```

`fill`用来设置图形的填充色，如果设置成`transparent`则表示填充成透明色。

## 其他常用标签

### `<text>`

`<text>`表示文本，生成的类似于我们使用`Adobe illustrator`创建文本后保存的矢量图，可以用改标签包裹文字：

```html
<text x="50" y="25">Hello World</text>
```

`<text>`的`x`、`y`表示文字区块的基线的起点文字的，文字样式可以在css中设置。

### `<g>`

`<g>`表示组，用它来包裹其他图形标签能通过控制`<g>`来统一控制被包裹图形的位置信息等。

### `<path>`

`<path>`也是来绘制线条的，但与`<line>`、`<polyline>`不同，它绘制的线条始终是光滑的。

`<path>`有以下几个命令：

#### Move命令

`Move`命令即`m x y`，`Move`命令将画笔移动到坐标为`(x,y)`的点上。

#### L命令

L命令即`l x y`，例：

```html
<path d="M10 10 L 5 30" stroke="red"></path>
```

上例中画笔从坐标（10，10）到（5,30）画了一条红线。

#### H命令与V命令

```css
 H x (or h dx)
 V y (or v dy)
 ```

这两个命令分别绘制垂直线与水平线。