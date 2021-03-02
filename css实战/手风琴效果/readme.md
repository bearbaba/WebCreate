# 手风琴效果

## 伪类 target 使用要点

`:target`伪类代表的元素的`id`指向本页面的 url ，利用这一点可以通过`<a>`标签链接的变化实现`:target`所指向的元素的动态变化，例：

```css
<a href="#event">event</a>

<p id="event">demo</p>
```

当点击链接 event 时， url 的末位是`#event`，那么当我们对`p`标签使用`:target`时，每次点击`a`，实际上`p:target`中的样式便会实现。

## transitions 使用要点

`transitions`是 CSS 实现动画的一个样式。使用如下例子来说明它的作用：

```css
transition: height 2s, width 2s ease-in;
```

如上，`transition`允许使用多个值，`width 2s ease-in`表示如果有动画效果，那么发生变化时`width`属性会变化，2s 是这个动画的时间，`ease-in`则是一种变化效果。
