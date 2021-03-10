# not 伪类的使用

## :not 的作用

`:not`伪类具有反选的作用，在`not()`的括号中写入其它伪类或者选择器，就能保证括号中的选择器不会生效，例：

```html
  <style>
	.a:not(#b) {
      background: red;
    }
  </style>  


  <div class="a" id="b">first</div>
  <div class="a">second</div>
  <div class="a">third</div>
```

如上，`class="a"`的样式会生效，但是`id="b"`的样式被排除在外。

![Snipaste_2021-03-10_20-36-32](https://gitee.com/peng_zhi_hung/img-res/raw/master/Snipaste_2021-03-10_20-36-32.png)

所以本项目中，在`demo.html`CSS中：

```css
    .demo-filter:not(:hover) {
      filter: blur(5px);
    }

    .demo-filter1:not(:hover) {
      filter: grayscale(1);
    }
```

在`hover`时，样式不会生效。

## filter 说明

`filter` CSS 属性将模糊或颜色偏移等图形效果应用于元素。滤镜通常用于调整图像，背景和边框的渲染。

## zoom

`zoom`能实现缩放的效果，使用值只能是正的值，它的缩放是从左上角开始，并且会影响到页面中的其它元素。

在 CSS animation 中的`transform`也有类似的值`scale`，`scale`的放缩是从元素中心开始的，并且`scale`的效果并不影响到页面的其它元素。

## letter-spacing 与 word-spacing

`letter-spacing`用于调整字间距。

`word-spacing`用于调整单词间距。

