#  Vue学习  

##  声明式渲染  

```html
<div id="app">
    {{message}}
</div>
<script>
var vm=new Vue({
    el:"#app",
    data:{
        message:"helloworld",
    }
})
</script>
```

![显示效果](img\Snipaste_2020-03-21_01-07-27.png)