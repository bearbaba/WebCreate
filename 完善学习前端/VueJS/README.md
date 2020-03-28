# Vue学习  

## Vue实例与数据绑定

通过构造Vue就可以创建一个Vue的根实例，并启动Vue应用：

```javascript
var app = new Vue({
    //选项
})
```  

变量app就代表Vue实例。
必不可少的一个选项是`el`，`el`用于指定一个页面中已存在的DOM元素来挂载实例，它可以是HTML标签，也可以是css选择器，比如：  

```html
<div id="app"></div>
var app = new Vue({
    el:document.getElementById('app');//或者直接写"#app"
})
```  

挂载后我们可以通过app.$el来访问该元素，通过Vue实例中的data选项，可以声明应用内需要双向绑定的数据。

```javascript
var app = new Vue({
    el:'#app';
    data:{
        a:2;
    }
})
```

Vue实例本身代理了data对象里的所有属性，所以可以这样访问：`console.log(app.a);//2`,app.a访问了a属性。  

可以指向一个已有的变量，并且它们之间默认建立了双向绑定，修改其中一个，另一个也会被修改。

```javascript
var myData={
    a:1
}
var app = new Vue({
    el:"#app",
    data:myData,
})
app.a=2;

//修改属性，原数据也会随之修改
console.log(myData.a);//2

//修改原数据，Vue属性也会被修改
myData.a=3;
console.log(app.a);//3

```

### Vue插值操作

在Vue中使用{{}}来进行插值，在双大括号内可以对数据进行简单操作，如字符串拼接：

```html
<div id="app">
    <div>{{firstname+lastname}}</div>
</div>
<script>
    var vm = new Vue({
        el: "#app",
        data: {
            firstname: "Hello",
            lastname: "World!",
        }
    })
</script>
```

还可以在双花括号内对变量进行四则运算：

```javascript
<div id="app">
    <div>{{number*10*3.1415926}}</div>
</div>
<script>
    var vm = new Vue({
        el: "#app",
        data: {
            number: 512,
        }
    })
</script>
```

### Vue常用指令

#### v-once

`v-once`在html标签中添加后，会使该标签内的双花括号里的值固定，即无法二次改变该花括号内的值：

```html
    <div id="app">
        <div>{{first}}</div>
        <div v-once>{{first}}</div>
    </div>
    <script>
        var vm = new Vue({
            el: "#app",
            data: {
                first: "first",
            }
        })
    </script>
```

#### v-html

在HTML标签内使用该指令后能使在Vue内声明的HTML样式被添加到该标签内：

```html
<div id="once">
    <div v-html="vueHtml"></div>
</div>
<script>
    var vm = new Vue({
        el: "#once",
        data: {
            vueHtml: "<h1>标题</h1>"
        }
    })
</script>
```

