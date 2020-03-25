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

## 生命周期

每个Vue实例创建时，都会经历一系列的初始化过程，同时会调用相应的生命周期钩子，我们可以在合适的时机利用这些钩子执行我们的业务逻辑。

Vue常用的生命周期钩子有：

* created 实例创建完成后调用，此阶段完成了数据的观测等，但尚未挂载，需要初始化数据是会有用；
* mounted el挂载到实例上调用，一般第一个业务逻辑从这里开始；
* beforeDestroy 实例销毁之前调用，主要解绑一些使用`addEventListener`监听的事件等。

```
