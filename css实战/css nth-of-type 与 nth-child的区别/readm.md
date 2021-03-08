# nth-of-type 与 nth-child 的区别

```html
  <div class="test-demo">
    <h3>a 1</h3>
    <h4>a 2</h4>
    <h4>a 3</h4>
    <h4>a 4</h4>
  </div>

  <style>
    h4:nth-child(2){
      color: red;
    }
```

CSS 的执行顺序是从右至左，那么`h4:nth-child(2)`的含义是：寻找`h4`父元素下的第二个元素，且这个元素的名称为`h4`，即`<h4>a 2</h4>`，如果父元素下的第二个元素名称不为`h4`，则视查找结果为空，那么该样式就不会起效果。

而`h4:nth-of-type(2)`的含义则是寻找第二个名称为`h4`兄弟元素。