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

## Vue插值操作

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

## Vue常用插值指令

### v-once

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

### v-html

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

## v-bind指令

v-bind动态绑定HTML中的属性：

```html
<div id="app">
    <a v-bind:href="aHref">百度一下</a>
</div>
<script>
    var vm = new Vue({
        el: "#app",
        data: {
            aHref: "http://www.baidu.com",
        }
    })
</script>
```

上例中`<a>`标签内的`href`属性被绑定了`v-bind`，`href`的值可以根据Vue中的data动态改变。

语法糖：`v-bind`可以简写成`:`，添加到要绑定的属性前。

### v-bind绑定class并使用对象语法

`v-bind`可以绑定class后使用对象语法来控制class的值，例：

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="js/vue.js"></script>
    <style>
        .bgC {
            border: 1px solid black;
            width: 100px;
            height: 100px;
        }

        #button {
            display: flex;
            width: 100px;
        }

        #green {
            margin-left: auto;
        }

        .isRed {
            background-color: red;
        }

        .isGreen {
            background-color: green;
        }
    </style>
</head>

<body>
    <div id="app">
        <div class="bgC" :class="{isRed:isRedValue,isGreen:isGreenValue}">改变背景色</div>
        <div id="button">
            <button v-on:click="changeColorRed">红色</button>
            <button id="green" v-on:click="changeColorGreen">绿色</button>
        </div>
    </div>
    <script>
        var vm = new Vue({
            el: "#app",
            data: {
                aHref: "http://www.baidu.com",
                isRedValue: false,
                isGreenValue: false,
            },
            methods: {
                changeColorGreen: function() {
                    this.isGreenValue = !this.isGreenValue;
                },
                changeColorRed: function() {
                    this.isRedValue = !this.isRedValue;
                }

            }

        })
    </script>
</body>

</html>
```

以上案例通过点击按钮能够切换id为`#bgC`的背景色。关键在于`<div class="bgC" :class="{isRed:isRedValue,isGreen:isGreenValue}">改变背景色</div>`这句中，将class除`.bgC`外又绑定了`isRed`与`isGreen`，这两个的value值初始状态下为false，在点击相应按钮后，可以使它们的value值为true。
除动态绑定的class外，还可以设置一个不绑定`v-bind`的class值，它们并不会冲突。

### v-bind动态绑定class数组语法

也可以使用数组语法动态绑定class，例：

```html
<div id="yel">
    <div :class="[bgSize,color]"></div>
</div>
<style>
    .bgSize {
        width: 100px;
        height: 100px;
    }

    .color {
        background-color: yellow;
    }
</style>
<script>
    var vm1 = new Vue({
        el: "#yel",
        data: {
            bgSize: "bgSize",
            color: "color"
        }
    })
</script>
```

以上例子通过数组的方式将`bgSize`与`color`class样式动态传递给div标签，使div拥有了动态的class样式。

### v-bind动态绑定style属性

与动态绑定class类似也有对象写法，例：

```html
<div :style={属性名:属性值}><div>
```

在绑定中的HTML标签内写上绑定css样式的对象写法，其中对象名实际是css中的属性名，如对象名可以用`fontSize`，`fontSize`实际是css中的`font-size`的驼峰写法。对象的`value`可以直接明确标出css中的样式对应的属性值，或者使用变量名的方式，在构造的vue内的`data`中再写出变量对应的属性值，例：

```html
<div id="fontCont">
    <div :style="{fontSize:finalFont}">Hello World！</div>
</div>
<script>
    var vm2 = new Vue({
        el: "#fontCont",
        data: {
            finalFont: "50px",
        }
    })
</script>
```

还可以用字符串拼接的方式，将传递的int值拼接成字符串，例：

```html
<div id="app1">
    <div :style="{fontSize:finalSize+'px'}">
        Hello World!
    </div>
</div>
<script>
    var vm3 = new Vue({
        el: "#app1",
        data: {
            finalSize: 100,
        }
    })
</script>
```

可以将要绑定的css对象在data中声明后用对象名的方式来动态绑定style，例：

```html
<div id="app1">
    <div :style="fontC">
        Hello World!
    </div>
</div>
<script>
    var vm3 = new Vue({
        el: "#app1",
        data: {
            finalSize: 100,
            fontC: {
                fontSize: "100px",
                color: "red"
            }
        }
    })
</script>
```

也可以将对象封装到方法中，然后以方法名的方式绑定到style上，例：

```html
<div id="app3">
    <div :style="getFontSize()">{{text}}</div>
</div>
<script>
    var vm4 = new Vue({
        el: "#app3",
        data: {
            text: "你好，世界！",
            finalSize: '100px',
            fontColor: 'red'
        },
        methods: {
            getFontSize: function() {
                return {
                    fontSize: this.finalSize,
                    color: this.fontColor
                };
            }
        }
    })
</script>
```

### 数组方式动态绑定style

将总的css样式写成对象后，再将对象放置在数组中绑定到style上，例：

```html
<div id="app4">
    <div :style="[baseStyle]">{{message}}</div>
</div>
<script>
    vm5 = new Vue({
        el: "#app4",
        data: {
            message: "hello World!",
            baseStyle: {
                fontSize: '50px',
                color: 'blue'
            }
        }
    })
</script>
```

### 计算属性computed

我们可以使用封装成方法的方式，传值给双大括号内的方法，例：

```html
<div id="app5">
    <div>{{getFullname()}}</div>
</div>
<script>
    var vm6 = new Vue({
        el: "#app5",
        data: {
            firstName: "Hello",
            lastName: "World!"
        },
        methods: {
            getFullname() {
                return this.firstName + " " + this.lastName;
            }
        }
    })
</script>
```

上例中花括号内的`getFullname()`是一个方法，返回值是data内的`firstName`与`lastName`的拼接。

也可以使用计算属性的方式，把值传递给双大括号内的属性。例：

```html
<div id="app6">
    <div>{{fullName}}</div>
</div>
<script>
    var app6 = new Vue({
        el: "#app6",
        data: {
            firstName: "Hello",
            lastName: "World!"
        },
        computed: {
            fullName: function() {
                return this.firstName + ' ' + this.lastName;
            }
        }
    })
</script>
```

计算属性不需要像方法那样加上括号，只需要属性名即可。

一个例子，计算属性调用对象：

```html
<div id="objectUse">
    <div>{{booki}}</div>
</div>
<script>
    const v = new Vue({
        el: "#objectUse",
        data: {
            books: [{
                id: 1,
                name: "book1",
                price: 100
            }, {
                id: 2,
                name: "book2",
                price: 120
            }, {
                id: 3,
                name: "book3",
                price: 89
            }]
        },
        computed: {
            booki: function() {
                let book = "";
                for (let i in this.books) {
                    book += "id: " + this.books[i].id + " book name: " + this.books[i].name;
                }
                return book;
            }
        }
    })
</script>
```

这里的计算属性中的`function()`用的是`for..in..`写法，`for.. in..`每次迭代时，从要迭代的对象中取出索引值，
也可以使用`for..of..`写法，`for..of..`每次迭代取出的是迭代对象的值，而不是索引值，例：

```html
<div id="objectUse">
    <div>total price: {{totalPrice}}</div>
</div>
<script>
    const v = new Vue({
        el: "#objectUse",
        data: {
            books: [{
                id: 1,
                name: "book1",
                price: 100
            }, {
                id: 2,
                name: "book2",
                price: 120
            }, {
                id: 3,
                name: "book3",
                price: 89
            }]
        },
        computed: {
            totalPrice: function() {
                let price = 0;
                for (let i of this.books) {
                    price += i.price;
                }
                return price.toString();
            }
        }
    })
</script>
```

## v-on事件监听

v-on用于监听事件，例如v-on:click=""用于指向`methods`中的方法。
语法糖：在绑定的事件前加@，例`@click`，
使用@click调用`methods`中的函数时要注意参数问题。

* 情况一：如果该方法不需要额外参数，那么方法后的()可以不用加，
  * 但是要注意的是，如果方法本事中有一个参数，尽管这个参数并没有明确指定它所要指向的对象，但系统会默认将原生事件event参数传递进去。
  
* 情况二，如果需要名同时传入某个参数，同时还需要event时，可以通过$event传入事件。例：

```html
<div id="app">
    <div>{{message}}</div>
    <button @click="addMethod(message,$event)">+</button>+</button>
</div>
<script>
    const vm = new Vue({
        el: "#app",
        data: {
            message: 0,
        },
        methods: {
            addMethod(message, $event) {
                this.message++;
                console.log(message);
                console.log($event);
            }
        }
    })
</script>
```

上例中每次调用`addMethod`方法时，打印`message`值与`event`事件对象。

### v-on修饰符的使用

`.stop`能阻止事件冒泡，所谓事件冒泡就是一个父子元素同时拥有方法时，点击子元素，父元素的方法也会进行。例：

```html
<div id="app1" @click="clickA('clickA')">
    <button @click="clickB('clickB')">B</button>
</div>
<script>
    const vm1 = new Vue({
        el: "#app1",
        methods: {
            clickA: function(string) {
                console.log(string);
            },
            clickB: function(string) {
                console.log(string)
            }
        }
    })
</script>
```

以上生成了一个B按钮，当B按钮被点击时，控制台会出现“clickA”与“clickB”，说明B被按下时，父元素的方法也会被调用，这就是事件冒泡，当我们只想要B被按下只出现`clickB`方法而不出现父元素方法时，就可以用`.stop`修饰符。例：

```html
<div id="app1" @click="clickA('clickA')">
    <button @click.stop="clickB('clickB')">B<button>
</div>
<script>
    const vm1 = new Vue({
        el: "#app1",
        methods: {
            clickA: function(string) {
                console.log(string);
            },
            clickB: function(string) {
                console.log(string)
            }
        }
    })
</script>
```

显然，v-on的修饰符只需要在v-on所修饰的事件监听后添加就可以使用了。

`.prevent`阻止默认事件，一些元素本身含有默认时间，比如`<a>`被点击时会跳转到设置的链接页面上，添加一个方法后，在`click`后添加`.prevent`即可阻止点击后默认跳转的事件。

```html
<div id="app2">
    <a href="http://www.baidu.com" @click.prevent="printEvent">点击后不跳转</a>
</div>
<script>
    const vm2 = new Vue({
        el: "#app2",
        methods: {
            printEvent: function() {
                console.log("不跳转");
            }
        }
    })
</script>
```

`.{keyCode|keyAlias}`只当事件是从特定键触发时才能回调，例：

```html
<div id="app4">
    <input type="text" name="输入框" @keyup.enter="print">
</div>
<script>
    const vm3 = new Vue({
        el: "#app4",
        methods: {
            print: function() {
                console.log("抬起键盘");
            }
        }
    })
</script>
```

上例中`@keyup`表示监听键盘抬起的事件，`@keyup.enter`表示只监听Enter键被抬起的事件。

`.once`只调用一次，使用`.once`修饰的事件监听方法时，方法只能使用一次。

`.native`，自定义HTML组件的方法一般是监听不到的，只能在使用`.native`后才能被监听到。

## v-for指令

v-for可以遍历数组与对象，语法格式：`v-for="item in items"`。
遍历数组时，如果设置了两个参数要从遍历的数组中取出，那么第一个参数是取出的值，第二个参数是索引值。例：

```html
<div id="app">
    <div v-for="(item,index) in items">{{item}}--{{index}}</div>
</div>
<script>
    const vm = new Vue({
        el: "#app",
        data: {
            items: [1, 2, 4, 5, 6, 6, 2],
        }
    })
</script>
```

`v-for`遍历对象时，可以设置三个参数，这三个参数分别对应对象的值，对象名和对象的索引值。例：

```html
    <div id="app">
        <div v-for="(value,key,index) in objects">{{key}}--{{value}}--{{index}}</div>
    </div>
    <script>
        const vm = new Vue({
            el: "#app",
            data: {
                objects: {
                    color: "red",
                    fruits: "vegetable",
                    food: "beef",
                }
            }
        })
    </script>
```

### 数组中的响应式方法

1.push方法，在数组最后面添加元素，

2.pop方法，删除数组最后面一个元素，

3.shift方法，删除数组第一个元素，

4.unshift方法，在数组前面添加元素，

5.splice方法，可以更改指定索引位置的内容，

splice的第一个参数是第一个要被修改的元素的索引值。

splice作用一：删除元素，第二个参数传入要删除元素的个数（如果没有传，就会删除之后所有元素。

splice作用二：替换元素，第二个参数，表示要替换的元素个数，后面的参数是用来替换的元素，如果第二个参数设置为0，就表示要将之后的参数插入到第一个参数所指向的元素之前。

对数组元素增、删、改的操作例子：

点击button按钮弹出数组最后一个元素：

```html
    <div id="changelist">
        <div v-for="value in items">{{value}}</div>
        <button @click="change()">修改数组</button>
    </div>
    <script>
        const vm1 = new Vue({
            el: "#changelist",
            data: {
                items: ["red", "blue", "yellow", "green"],
            },
            methods: {
                change: function() {
                    this.items.pop();
                }
            }
        })
    </script>
```

点击button按钮在数组最后面添加元素：

```html
    <div id="changelist">
        <div v-for="value in items">{{value}}</div>
        <button @click="change()">修改数组</button>
    </div>
    <script>
        const vm1 = new Vue({
            el: "#changelist",
            data: {
                items: ["red", "blue", "yellow", "green"],
            },
            methods: {
                change: function() {
                    // this.items.pop();
                    this.items.push("black");
                }
            }
        })
    </script>
```

点击button按钮弹出数组第一个元素：

```html
    <div id="changelist">
        <div v-for="value in items">{{value}}</div>
        <button @click="change()">修改数组</button>
    </div>
    <script>
        const vm1 = new Vue({
            el: "#changelist",
            data: {
                items: ["red", "blue", "yellow", "green"],
            },
            methods: {
                change: function() {
                    // this.items.pop();
                    //this.items.push("black");
                    this.items.shift();
                }
            }
        })
    </script>
```

点击button按钮弹出数组第一个元素前添加元素：

```html
    <div id="changelist">
        <div v-for="value in items">{{value}}</div>
        <button @click="change()">修改数组</button>
    </div>
    <script>
        const vm1 = new Vue({
            el: "#changelist",
            data: {
                items: ["red", "blue", "yellow", "green"],
            },
            methods: {
                change: function() {
                    // this.items.pop();
                    //this.items.push("black");
                    // this.items.shift();
                    this.items.unshift("black", "white");
                }
            }
        })
    </script>
```

点击button按钮在数组第二个元素前添加元素：

```html
    <div id="changelist">
        <div v-for="value in items">{{value}}</div>
        <button @click="change()">修改数组</button>
    </div>
    <script>
        const vm1 = new Vue({
            el: "#changelist",
            data: {
                items: ["red", "blue", "yellow", "green"],
            },
            methods: {
                change: function() {
                    // this.items.pop();
                    //this.items.push("black");
                    // this.items.shift();
                    // this.items.unshift("black", "white");
                    this.items.splice(1, 0, "black");
                }
            }
        })
    </script>
```

删除第二、三、四个元素：

```html
    <div id="changelist">
        <div v-for="value in items">{{value}}</div>
        <button @click="change()">修改数组</button>
    </div>
    <script>
        const vm1 = new Vue({
            el: "#changelist",
            data: {
                items: ["red", "blue", "yellow", "green"],
            },
            methods: {
                change: function() {
                    // this.items.pop();
                    //this.items.push("black");
                    // this.items.shift();
                    // this.items.unshift("black", "white");
                    //this.items.splice(1, 0, "black");
                    this.items.splice(1, 3);
                }
            }
        })
    </script>
```

为了提升修改数组的效率，最好要为数组的值绑定一个`:key`，`:key="item"`

## v-model双向绑定

我们可以使用`v-model`对一个变量进行双向绑定。例如，给`input`输入框设置一个`v-model`绑定一个变量，通过输入内容的改变，来动态改变变量的值：

```html
    <div id="app">
        <input type="text" name="input" v-model="message">
        <div>{{message}}</div>
    </div>
    <script>
        const vm = new Vue({
            el: "#app",
            data: {
                message: null,
            }
        })
    </script>
```

进行双向绑定的值，可以通过改变Vue实例data中变量的值进行该改变。

### v-model在radio单选按钮上的使用

在单选按钮radio上使用v-model可以将所选的值绑定到Vue实例的data中。
例，单选性别后，将选中的性别显示在页面上。

### v-model在checkbox元素上的使用

在checkbox上的使用分为两种情况：单个复选框与多个复选框。

#### 单选框

单个复选框的使用范围包含某个协议的同意与否。
例：

```html
<div id="agreement">
        <label for="check"><input type="checkbox" name="" id="check" value="同意"  v-model="argee"/>同意协议</label>
    </div>
    <script>
        const agreement = new Vue({
            el: "#agreement",
            data: {
                argee: false,
            }
        })
    </script>
```

以上例子将会出现一个同意协议的复选框，默认情况下复选框没有被选中。

#### 多选框

当`v-model`使用在多选框内，`v-model`所对应的data属性是个数组类型，当选中多选框按钮时，`v-model`所绑定的属性会被添加到数组中，例：

```html
    <div id="checkBox">
        <label v-for="value in hobbies"><input type="checkbox" :value="value" v-model="list">{{value}}</label> {{list}}
    </div>
    <script>
        const selectBox = new Vue({
            el: "#checkBox",
            data: {
                hobbies: ["篮球", "足球", "排球", "羽毛球"],
                list: [],
            }
        })
    </script>
```

### v-model在元素`select`上的使用

和`checkbox`类似，`v-model`在`select`上的使用也分为单选和多选。

#### 单选情况

单选时，`v-model`绑定的是一个值，当浏览器被刷新时，`v-model`绑定的那个值依然是默认被选中的。例：

```html
    <div id="selectBox">
        <select v-model="fruit">
            <option value="apple">苹果</option>
            <option value="banana">香蕉</option>
            <option value="orange">橘子</option>
            <option value="grane">葡萄</option>
        </select>
    </div>
    <script>
        const fruitBox = new Vue({
            el: "#selectBox",
            data: {
                fruit: "banana",
            }
        })
    </script>
```

#### 多选情况

多选情况时，要手动为`select`元素添加`multiple`属性，与`checkbox`相似多选时会动态添加到`data`内的数组，例：

```html
    <div id="multipleBox">
        <select name="" id="" multiple v-model="fruit">
            <option value="apple">苹果</option>
            <option value="banana">香蕉</option>
            <option value="orange">橘子</option>
            <option value="grane">葡萄</option>
        </select>
        <div>{{fruit}}</div>
    </div>
    <script>
        const vm2 = new Vue({
            el: "#multipleBox",
            data: {
                fruit: [],
            }
        })
    </script>
```

### v-model修饰符

#### lazy修饰符

默认情况下，`v-model`默认是在input事件中同步输入框的数据的，`v-model`在使用`lazy`修饰符后，可以让数据在失去焦点或者回车时才会更新，例：

```html
    <div id="lazyUsed">
        <input type="text" id="" v-model.lazy="message">
        <div>{{message}}</div>
    </div>
    <script>
        const vm = new Vue({
            el: "#lazyUsed",
            data: {
                message: "",
            }
        })
    </script>
```

#### number修饰符

默认情况下，在输入框中无论我们输入的是字母还是数字，都会被当做字符串类型进行处理。`number`修饰符可以将输入内容转换成数字，例：

```html
    <div id="numberUsed">
        <input type="text" id="" v-model.number="message">
        <div>{{message}}</div>
        <button @click="isNumber">是否为数字</button>
    </div>
    <script>
        const vm1 = new Vue({
            el: "#numberUsed",
            data: {
                message: " ",
            },
            methods: {
                isNumber: function() {
                    console.log(typeof this.message);
                }
            }
        })
    </script>
```

上例中的`<button>`动态绑定了`isNumber`方法，用于判断输入的字符串是否转换为数字，在控制台中可以看到确实转为了数字。

#### trim修饰符

`trim`修饰符可以去除输入的字符串左右两侧的空格。

## Vue组件化

组件是可复用的 Vue 实例，Vue组件化类似于面向对象的开发思路，它提供了一种抽象，让我们可以开发出一个个独立可复用的小组件来构造我们的应用。

### 组件的基本使用

组件的使用分成三个步骤：

1. 创建组件构造器
2. 注册组件
3. 使用组件

#### 创建组件构造器

```javascript
const vm = Vue.extend({
            template: `
            <div>
            <span>HELLO WORLD</span>
            </div>`
        })
```

以上例子创建了一个名为`vm`的组件构造器，
``写法是ES6新增的写法，它允许包含的字符串能够换行。

#### 注册组件

 ```javascript
  Vue.component("cpn", vm);
  ```

这句话是将vm的组件构造注册成名为“cpn”的组件，

#### 使用组件

```html
<div id="app">
    <cpn></cpn>
</div>
```

在`id="app"`的元素中使用了构造出来的`cpn`组件，注意这个`id="app"`必须是Vue的实例，即需要在`div`外添加

```javascript
const vm1 = new Vue({
        el: "#app",
        data: {}
    })
```

实际上完整的`<script>`标签的js代码为：

```javascript
const vm = Vue.extend({
    template: `
    <div>
    <span>HELLO WORLD</span>
    </div>`
})
Vue.component("cpn", vm);
const vm1 = new Vue({
    el: "#app",
    data: {}
})
```

#### Vue.extend()的含义

调用Vue.extend()创建的是一个组件构造器。
通常在创建组件构造器时，传入template代表我们自定义组件的模板。
该模板就是在使用到组件的地方，要显示的HTML代码。

#### Vue.component()的含义

调用Vue.component()是将刚才的组件构造器注册为一个组件，并且给它起一个组件的标签名称。
所以需要传递两个参数：1、注册组件的标签名 2、组件构造器
组件必须挂载在某个Vue实例下，否则它不会生效。

### 全局组件和局部组件

#### 全局组件

实际上，在Vue组件化基本使用中所创建的组件是全局组件。
当我们通过调用Vue.component()注册组件时，组件的注册是全局的，这意味着该组件可以在任意Vue示例下使用。

#### 局部组件

如果我们注册的组件是挂载在某个实例中, 那么就是一个局部组件，例：

```html
    <div id="app">
        <new-style></new-style>
    </div>
    <script>
        let newStyle = Vue.extend({
            template: `
            <div>
                <span>Hello World!</span>
            </div>
            `
        })
        const vm = new Vue({
            el: "#app",
            components: {
                newStyle: newStyle,
            }

        })
    </script>
```

### Vue父子组件

讲一个组件在另一个组件中，那么这个组件就是另一个组件的子组件，这个组件要想被使用，必须通过先使用父组件才能使用子组件，而另一个组件需要在Vue实例中被注册，Vue实例是所有组件的根组件。例：

```html
    <div id="app">
        <new-style></new-style>
    </div>
    <script>
        let newStyle = Vue.extend({
            template: `
            <div>
                <span>Hello World!</span>
            </div>
            `
        })
        const vm = new Vue({
            el: "#app",
            components: {
                newStyle: newStyle,
            }

        })
    </script>
```

以子标签的形式直接使用子组件时会报错。

### 注册组件的语法糖

#### 全局组件注册的语法糖

如下是使用全局组件注册的语法糖：

```javascript
let newModule = Vue.component("newHtml", {
    template: `
    <div>
    <h1>标题1</h1>
    </div>
    `,
});
const vm = new Vue({
    el: "#app",
})
```

可以看到语法糖不再使用`extend`构造方式，直接将注册与构造合并了。

#### 局部组件语法糖

```javascript
const vm1 = new Vue({
    el: "#app1",
    components: {
        'newHtml2': {
            template: `
            <div>
                <span>标题2</span>
            </div>
            `
        }
    },
})
```

将注册组件的方法写进了根组件中，就是局部组件注册的语法糖。

### Vue组件模板抽离写法

可以将组件模板抽离以方便调用，类似于将值赋给变量，然后使用变量的方式。

组件模板抽离写法有两种，一种通过`<script>`标签来写，另一种通过`<template>`。

#### `<script>`写法

```html
<div id="app">
        <new-html></new-html>
    </div>
    <script type="text/x-template" id="template">
        <div>
            <h1>标题1</div>
        </h1>
    </script>
    <script>
        const vm = new Vue({
            el: "#app",
            components: {
                'newHtml': {
                    template: "#template",
                }
            }
        })
    </script>
```

将模板被包裹在一个名为`<script type="text/x-template>`的标签内，再为该标签设置好一个`id`，在构造组件时，将`template`指向该`id`，就能类似于调用变量似的，调用模板。

#### `<template>写法`

```html
    <template id="template1">
        <div>
            <h1>标题2</h1>
        </div>
    </template>
    <script>
        const vm1 = new Vue({
            el: "#new",
            components: {
                'newHtml': {
                    template: "#template1",
                }
            }
        })
    </script>
```

`<template>`写法与`<script>`写法类似，只不过把冗长的`<script>`换成了`<template>`。

### Vue组件中的data

Vue组件不能访问Vue实例中的data（即使能访问，Vue实例也会因为含有太多数据而臃肿），
Vue组件中也能含有data，但与Vue实例不同的是，data不是对象，组件中的data必须是一个函数。例：

```html
    <div id="app">
        <new-html></new-html>
    </div>
    <template id="template1">
        <div>
            <h1>{{message}}</h1>
        </div>
    </template>
    <script>
        let module1 = Vue.component("newHtml", {
            template: "#template1",
            data: function() {
                return {
                    message: "标题1",
                }
            }
        });
        let vm = new Vue({
            el: "#app",
        })
    </script>
```

可以返回一个对象，用对象保存属性。因为data如果是对象时，所有构造的模板都在使用同一个data，每个模板都会相互影响。
而使用函数时，每次调用这个函数都会创建新的内存地址，保证了每个模板的相互独立性。

```html
    <div id="compute">
        <compute></compute>
        <compute></compute>
    </div>
    <template id="module2">
        <div>
            <div>{{num}}</div>
            <button @click="addbutton">+</button>
        </div>
    </template>
    <script>
        let moduleForVm = Vue.component("compute", {
            template: "#module2",
            data: function() {
                return {
                    num: 2,
                }
            },
            methods: {
                addbutton: function() {
                    this.num++;
                }
            },
        });
        const vm1 = new Vue({
            el: "#compute",
        })
    </script>
```

注意组件模板中的所有标签除了自定义的标签包裹外，还需要一个标签作为所有标签的父标签。

### 父子组件通信（父传子）

子组件不能直接引用父组件或Vue实例的数据，但是可以通过`组件通信`来互相传递数据。
父组件可以通过`props`向子组件传递数据。例

```html
<div id="app">
        <new-content :c-title="title"></new-content>
    </div>
    <template id="template">
        <div>
            <h1>
                {{cTitle}}
            </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, ea. Quia, tempore repellendus dicta tenetur quos saepe necessitatibus velit nemo sint accusamus autem soluta ea maiores aliquam itaque neque placeat!</p>
        </div>
    </template>
    <script>
        const newContent = {
            template: "#template",
            props: ["cTitle"],

        }
        const vm = new Vue({
            el: "#app",
            data: {
                title: "标题1",
            },
            components: {
                 newContent,//对象已在实例外定义好了
            }
        })
    </script>
```

这里的`props`采用数组写法，数组里的是自定义属性，自定义属性是写在构造组件的html标签内的，将父组件需要传给子组件的data绑定到这个自定义属性上，然后在构造组件的模板内就能够使用自定义的属性值（实际上与父组件要传给该组件的属性值相等同），
由于HTML不能识别大写字母，在HTML内的驼峰写法应更换成短横线连接的写法。

props的值有两种方式：
方式一：字符串数组，数组中的字符串就是传递时的名称。
方式二：对象写法，对象写法时可以设置值传递时的类型以及设置默认值，例：

```html
    <div id="parent">
        <child-module :son-data="title" :son-list="list2"></child-module>
    </div>
    <template id="template1">
        <div>
            <h1>{{sonData}}</h1>
            <li v-for="item in sonList"><a href="http://">{{item}}</a></li>
        </div>
    </template>
    <script>
        const childModule = {
            template: "#template1",
            props: {
                sonData: String,
                sonList: {
                    type: Array,
                    default: [2, 5, 6],
                    required: false,
                }
            }
        };
        const vm1 = new Vue({
            el: "#parent",
            data: {
                title: "标题2",
                list: ["商品1", "商品2", "商品3"],
            },
            components: {
                childModule,
            }
        })
    </script>
```

使用对象写法可以再为传递的变量设置几个属性，

* `type`类型验证，即判定变量是否为限定的类型，

* `default`默认值，

* `required`决定父组件是否必要为该子组件传值，为`true`为必要，为`false`为不必要，

* 还可以自定义构造函数等。

`props`可以为以下类型进行验证：
String、Number、Boolean、Array、Object、Date、Function、Symbol、

### 父子通信（子传父）

```html
<div id="app">
        <new-html :clist="list" @son-clicked="sonFun"></new-html>
    </div>
    <template id="template">
        <div>
            <button v-for="item in clist" @click="childFun(item)">{{item.name}}</button>
        </div>
    </template>
    <script>
        const newHtml = {
            template: "#template",
            props: {
                clist: {
                    type: Array,
                }
            },
            methods: {
                childFun: function(item) {
                    this.$emit("son-clicked");
                }
            }
        };
        const vm = new Vue({
            el: "#app",
            data: {
                list: [{
                    name: "商品1",
                    id: 1,
                }, {
                    name: "商品2",
                    id: 2
                }, {
                    name: "商品3",
                    id: 3
                }]
            },
            components: {
                newHtml,
            },
            methods: {
                sonFun: function() {
                    console.log("被点击了");
                }
            }
        })
    </script>
```

如上所见，子组件`<new-html>`中的点击事件`childFun`函数要想被检测到，并且能把子组件中的数据传递给父组件，就需要使用子传父的通信方法，

首先要为`childFun`中增加一个`this.$emit()`，以把数据传递给父组件中的方法，括号里是要接收数据的父组件方法名绑定的自定义Vue属性，再为新构建的元素使用`v-bind`绑定上自定义的Vue属性，该方法等于号右边是处理数据的父组件方法。

## 组件访问

### 父组件访问子组件

父组件访问子组件有两种方法：

1. $chirldren

2. $ref

#### 父组件访问子组件（$chirdren）

```html
    <div id="app">
        <child-module></child-module>
        <child-module></child-module>
        <child-module></child-module>
        <button @click="visitChild">点击</button>
    </div>
    <template id="template">
        <div>
            {{message}}
        </div>
    </template>
    <script>
        const childModule = {
            template: "#template",
            data() {
                return {
                    message: "hello",
                }
            }
        };
        const vm = new Vue({
            el: "#app",
            components: {
                childModule,
            },
            methods: {
                visitChild: function() {
                    console.log(this.$children[0].message);
                    for (let i of this.$children) {
                        console.log(i);
                    }
                }
            },
        })
    </script>
```

使用该方法时，返回值是数组，数组中包含的是每个子组件，因此只能通过索引值查找到某个子组件，对于实际开发并不方便。

#### 父组件访问子组件（$refs）

`this.$refs`默认返回的是一个对象类型，要想具体返回某个组件，只需为这个组件添加`ref`属性。例

```html
    <div id="app">
        <child-module></child-module>
        <child-module ref="child2"></child-module>
        <child-module></child-module>
        <button @click="visitChild">点击</button>
    </div>
    <template id="template">
        <div>
            {{message}}
        </div>
    </template>
    <script>
        const childModule = {
            template: "#template",
            data() {
                return {
                    message: "hello",
                }
            }
        };
        const vm = new Vue({
            el: "#app",
            components: {
                childModule,
            },
            methods: {
                visitChild: function() {
                    console.log(this.$refs.child2.message)
                }
            },
        })
    </script>
```

以上就用`visitChild`方法输出了第二个子组件的`message`，而第二个子组件上由于添加了`ref="child2`，因此能被方法中的`this.$refs.child2`检查到。

### 子组件访问父组件（parent，root）

在实际开发中并不常用`parent`或`root`子组件访问父组件

```html
    <div id="app">
        <child-module></child-module>
    </div>
    <template id="template">
        <child-child-module></child-child-module>
    </template>
    <template id="template2">
        <div>
            <button @click="fun">点击</button>
            <button @click="root">根组件</button>
        </div>
    </template>
    <script>
        const childChildModule = {
            template: "#template2",
            data() {
                return {
                    message: "hello",
                }
            },
            methods: {
                fun: function() {
                    console.log(this.$parent.message);
                },
                root: function() {
                    console.log(this.$root.message)
                }
            }
        };
        const childModule = {
            template: "#template",
            data() {
                return {
                    message: "World",
                }
            },
            components: {
                childChildModule,
            }
        }
        const vm = new Vue({
            el: "#app",
            components: {
                childModule,
            },
            data: {
                message: "root",
            }
        })
    </script>
```

类似于父访问子使用`this.$children`，子访问父使用`this.$parent`，子访问根组件用`this.$root`。

### 插槽

在子组件中，使用特殊的元素`<slot>`就可以为子组件开启一个插槽。

该插槽插入什么内容取决于父组件如何使用。

每个组件的内容及功能大体上相似，但在一些具体功用上存在不同就能使用`插槽`，插槽的作用类似于占位符。例：

```html
    <div id="app">
        <cpn></cpn>
        <cpn>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga delectus eius omnis mollitia at voluptatum quidem soluta hic aspernatur rem similique nemo veritatis, officiis error, molestias maxime sapiente repudiandae expedita.
            </p>
        </cpn>
        <cpn></cpn>
        <cpn></cpn>
    </div>
    <template id="template">
        <div>
            <h1>标题</h1>
    <slot><button>点击</button></slot>
        </div>
    </template>
    <script>
        const cpn = {
            template: "#template",
        };
        const vm = new Vue({
            el: "#app",
            components: {
                cpn,
            }
        })
    </script>
```

如上，每个组件默认含有一个点击按钮，如果想要修改只需在已构造的标签内包含其他标签即可，上述是将第二个组件的默认插槽内容从按钮修改成了`<p>`文本内容。

当组件中含有多个插槽时，我们希望构建的标签中包含的标签的具体修改某一个插槽时，就需要使用具名插槽。

具名插槽只需要在插槽`<slot>`中设置一个`name`属性，然后在要替代插槽的标签上设置`slot`属性，`slot`属性的值与`name`属性的值一致时就能具体修改某一个插槽。

```html
    <div id="app">
        <cpn><input type="text" slot="center" id=""></cpn>
        <cpn>

        </cpn>
        <cpn></cpn>
    </div>
    <template id="template">
        <div>
            <slot name="left">左边</slot>
            <slot name="center">中间</slot>
            <slot name="right">右边</slot>
        </div>
    </template>
    <script>
        const cpn = {
            template: "#template",
        };
        const vm = new Vue({
            el: "#app",
            components: {
                cpn,
            }
        })
    </script>
```

#### 插槽作用域

```html
    <div id="app">
        <cpn>
            <template slot-scope="slot">
                <span v-for="item in slot.data">{{item}}-</span>
            </template>
        </cpn>
    </div>
    <template id="template">
        <div>
            <slot :data="list">
                <li v-for="item in list">{{item}}</li>
            </slot>
        </div>
    </template>
    <script>
        const cpn = {
            template: "#template",
            data() {
                return {
                    list: ["Java", "Python", "C++", "PHP", "JavaScript"],
                }
            }
        };
        const vm = new Vue({
            el: "#app",
            components: {
                cpn,
            }
        })
    </script>
```

以上代码中的子组件原本是要以列表的形式展现`list`内容的，但我们修改了插槽的内容，方法是在新构造的`cpn`内添加了`template`，又在`template`中添加了`slot-scope`属性，该属性用于接收子组件中插槽的所有值，然后遍历数组输出`<span>`，`span`标签用于重新改写`list`内容，由于`list`属于子组件中`slot`，故我们是从`slot`中获取`list`用于遍历的：`slot.data`。

子组件内的`slot`上也要动态绑定一个属性，该属性值是要重新展示的值，故写成`:data="list"`

## webpack的使用

在webpack的世界里，一张图片、一个css甚至一个字体，都被称为模块（Module），彼此存在依赖关系，webpack就是来处理模块间的依赖关系的，并把它们进行打包。

### webpack的安装

在安装了`node.js`的基础上，使用`npm install webpack@3.6.0 -g`即可安装3.6.0版本的webpack，`-g`表示全局安装。

### vue项目文件的基本结构

* dist文件夹：用于存放之后打包的文件
* src文件夹：用于存放我们写的源文件
* index.html：浏览器打开展示的首页html

在我们的源文件写完后，就可以使用`webpack src/main.js dist/bundle.js`来打包并在dist中生成`bundle.js`文件。

### ES6导入与导出

实际开发使用模块化的开发方式，因此需要导入与导出模块，方便实用。

#### 导出

```javascript
export function sum(a, b) {
    return a + b;
};
```

以上直接导出sum方法。

或者可以使用以下方式：

```javascript
sum:function(a,b){
    return a+b;
}
export default sum;
```

export default每次只能导出一个值或函数，导出函数与值是一样的用法。

#### 导入

导入使用import语法：

```javascript
import {sum,a} from "./math"
```

如果使用了npm安装了一些库，在webpack中可以直接导入，如

```javascript
import Vue from 'vue';
import $ from 'jquery';
```

import语法与其他编程语言的用法大同小异，此处不再赘述。

import是ES2015的语法，也可以写成`require('src/style/index.css)`，在打包是，index.css会被打包进一个js文件里，通过动态创建`<style>`的形式来加载css样式，也可以进一步配置，在打包时把所有的css都提取出来，生成一个css的文件。

webpack的主要使用场景是单页面富应用（SPA）。SPA通常是由一个html文件和一堆加载的js组成。

### webpack基础配置

首先，创建一个目录，比如demo，使用npm初始化配置：

```powershell
npm init
```

执行后，会有一系列选项，可以按回车键快速确认，完成后会在demo目录生成一个`package.json`的文件。
之后在本地局部安装webpack：

```powershell
npm install webpack --save-dev
```

--save-dev会作为开发依赖安装webpack，安装后，在package.json会多一项配置：

```json
    "devDependencies": {
        "webpack": "^4.42.1"
    }
```

接着安装`webpack-dev-server`，它可以在开发环境中提供很多服务，比如启动一个服务器、热更新、接口代理等。在本地局部安装：

```powershell
npm install webpack-dev-server --save-dev
```

webpack就是一个`.js`配置文件，
首先在目录demo下创建一个js文件：webpack.config.js，并初始化它的内容：

```js
var config = {

};
module.exports = config;
```

`module.exports = config;`是`commonJS`的导出语法，相当于`export default config`。

然后在`package.json`的`scripts`里增加一个快速启动`webpack-dev-server`服务的脚本：

```json
{
    //...
    "scripts":{
        "test":"echo\"Error: no test specified\" && exit 1",
        "dev": "webpack-dev-server --open --config webpack:config.js"
    },
    // ...
}
```

当运行`npm run dev`命令时，就会执行`webpack-dev-server --open --config webpack.config.js`命令，其中`--config`是指向`webpack-dev-server`读取的配置文件路径，这里直接读取我们在上一步创建的`webpack.config.js`文件。`--open`会在执行命令时自动在浏览器打开页面，默认地址是`127.0.0.1:8080`,IP和端口都是可以配置的，例：

```json
{
    "scripts":{
        "dev":"webpack-dev-server --host 172.172.172.1 --port 8888 --open --config webpack.config.js"
    }
}
```

此处访问地址就被改成了`172.172.172.1:8888`。

webpack配置中最重要的也是必选的两项是入口（Entry）和出口（Output）。入口的作用是webpack从哪里开始寻找依赖，并且编译，出口则用来配置编译后的文件存储位置和文件名。

在demo目录下新建一个空的`main.js`作为入口的文件，然后在`webpack.config.js`中进行入口和输出的配置：

```js
var path = require('path');
var config = {
    entry:{
        main:"./main"
    },
    output:{
        path:path.join{_dirname,"./dist"},
        publicPath:"/dist/",
        filename:"main.js"
    }
};
module.exports=config
```

## vue Cli开发学习

如今的vue cli已经默认集成了webpack，在实际开发中也不需要手动配置太过复杂的webpack结构，

### 开发环境搭建

在安装nodejs、vue与vue cli的前提下，我们在终端中执行以下命令就能创建vue cli2项目文件：

```powershell
vue init webpack project
```

就能创建一个名为`project`的vue cli2项目，

#### vue cli2项目文件结构

全局文件结构：
>build/   //编译用到的脚本
>
>config/  //各种配置
>
>dist/   //打包后的文件夹
>
>src/   //源代码
>
>static   //静态文件
>
>index.html  //最外层文件
>
>package.json  //node项目配置文件

build文件夹结构:

保留各种打包脚本，不可或缺，不能随意修改。

展开后如下：

```text
build/
    build.js
    check-versions.js
    dev-client.js
    dev-server.js
    utils.js
    vue-loader.conf.js
    webpack.base.conf.js
    webpack.prod.conf.js
```

* build.js：打包使用

* check-version.js：检查npm的版本

* dev-client.js和dev-server.js：是在开发时使用的服务器脚本，在做开发时，可以通过`$npm run dev`这个命令，打开一个小的server。

* utils.js：不作修改表，做一些css/sass等文件的生成

* vue-loader.conf.js：用来辅助加载vuejs用到的css source map等内容。

* vue-loader.conf.js、webpack.base.conf.js、webpack.prod.conf.js：这三个都是基本的配置文件。

config中的文件跟部署和配置有关，其中index.js定义了开发时的端口（默认是8080），定义了图片文件夹（默认static），定义了开发模式下的代理服务器。

dist是打包之后的文件所在目录

node_modules是node项目所用到的第三方包。

src是最核心的代码所在的目录，其中`assets`是要用到的图片，`components`是要用到的“视图”和“组件”所在的文件夹，`router/index.js`是路由文件，定义了各个页面对应的url。`App.vue`想到于二级页面模板，所有的其他vuejs页面，都作为改模板的一部分被渲染出来。

#### vue cli3项目创建

vue cli3与vue cli2有很大的不同，使用`vue create project`创建一个名为project的vue cli3项目。

vue cli3的项目目录中的public相当于vue cli2的static目录。

### 路由配置及使用

首先我们在src/router下创建`index.js`文件，在`index.js`中通过`import Router from 'vue-router';`导入路由相关模块，然后通过`Vue.use(Router)`使用该模块。

在然后创建router对象：

```js
const router = new Router({
    routes
})
```

Router对象中的`routes`用来配置路由和组件的应用关系。

然后将router对象导出到主目录下`main.js`中的Vue实例内，即在main.js的基础上加上`import router from './router';`并在main.js中的Vue实例上添加router，表示使用导入的router。`import router from './router';`注意这句话实际上是`import router from './router/index.js`的简写。

想要创建组件就要在components文件下添加后缀为`.vue`的vue文件。这里创建一个名为`home`的文件。
在home文件中构造一个vue组件，如果想要使用该组件就要到router下的`index.js`内，为`route`添加一个路由对象。

```js
import Vue from 'vue';
import Router from 'vue-router';
import home from '../components/home';

Vue.use(Router);

const router = new Router({
  routes: [
    {
    path: '/home',
    component: home,
  }],
});
export default router;
```

由于此处是想让`home`组件作为首页中的一个超链接，所以我们在`App.vue`中设置`<template>`为：

```html
<template>
  <div id="app">
    <router-link to="/home">首页</router-link>
    <router-view/>
  </div>
</template>
```

我们要想让`home`组件被渲染出来，就需要使用`<router-view>`元素。
我们想要修改组件的url路径，只需要在router路由对象内修改path就可以了，例如将首页路径修改为默认路径，只需修改path为`path:'/'`。如果想要修改原本路径所执行的组件，在路由对象中添加`redirect:path`即可。

例如，将原本`home`的路径指向`about`组件

```javascript
  {
    path: '/home',
    component: home,
    redirect: '/about',
  },
```

vue cli2组件在浏览器的url加载模式默认为hash模式，如果想使用`history`，只修改`router`设置，即修改在`index.js`内的`router`实例下增加一个`mode`属性，将`mode`设为`history`就能以`history`模式加载url。

在`router-link`元素内设置`tag`属性为`button`，就能把`router-link`渲染成`button`元素。

在`router-link`元素内设置`active-class`属性就能为`router-link`元素设置`class`名称。比如`active-class="view-tiles"`。也可以在路由设置中，即在`router`文件下的`index.js`中的路由实例内增加一个`linkActiveClass: 'active'`就能为所有的`router-link`元素设置一个名为`active`的class属性。

在`router-link`元素中设置`replace`，就能使用户不能通过浏览器返回上一页面。

我们可以使用`routerLinkTo`的方式设置路由跳转页面，也可以使用方法绑定的方式，手动在app的vue实例内设置路由跳转，包含以下两种方式进行跳转：

1. this.$router.push('/path');

2. this.$router.replace('/path');

#### 动态路由配置

我们经常需要把某种模式匹配到的所有路由，全都映射到同个组件。例如，我们有一个 `User` 组件，对于所有 `ID` 各不相同的用户，都要使用这个组件来渲染。那么，我们可以在 `vue-router` 的路由路径中使用“动态路径参数”(dynamic segment) 来达到这个效果：

```javascript
const User = {
  template: '<div>User</div>'
}

const router = new VueRouter({
  routes: [
    // 动态路径参数 以冒号开头
    { path: '/user/:id', component: User }
  ]
```

如上，动态路由的路径参数以冒号开头，然后再在`app.vue`中设置routerLinkTo的属性为：

```html
<router-link :to="'/user/'+Id">用户界面</router-link>
```

`to`是被动态绑定的，可以在Vue实例中动态传参给`Id`。

```js
data(){
    return {
        Id:123,
    }
}
```

当页面使用`User`组件时，页面的url会在`/user/`后生成`Id`，即`123`。

如果我们想要获取以上我们设置的id就可以使用`this.$route.params.id`获取到。

注意：

* `$route`为当前`router`跳转对象里面可以获取`name`、`path`、`query`、`params`等
* `$router为VueRouter`实例，想要导航到不同URL，则使用`$router.push`方法

#### 路由懒加载

当打包构建应用时，Javascript 包会变得非常大，影响页面加载。

如果我们能把不同路由对应的组件分割成不同的代码块，然后当路由被访问的时候才加载对应组件，这样就更加高效了。因此使用路由懒加载的方式导入组件模块，在使用各个组件时，再进行组件的加载，而不是一开始就加载好所有组件。

路由懒加载的主要作用就是将路由对应的组件打包成一个个的js代码块。
只有在这个路由被访问到的时候, 才加载对应的组件。

懒加载的方式：
>
>1.结合Vue的异步组件和Webpack的代码分析：
>
>```js
>const Home = resolve => { require.ensure(['../components/Home.vue'], () => { resolve(require('../components/Home.>vue')) })};
>```
>
>2.AMD写法
>
>```js
>const About = resolve => require(['../components/About.vue'], resolve);
>```
>
>3.在ES6中, 我们可以有更加简单的写法来组织Vue异步组件和Webpack的代码分割.
>
>```js
>const Home = () => import('../components/Home.vue')
>```
>
>```js
>const Home = () => import('../components/Home.vue')
>```

通常情况下使用方式3，节省代码量。

#### 路由嵌套

嵌套路由是一个很常见的功能
比如在home页面中, 我们希望通过/home/news和/home/homeMessage访问一些内容.
一个路径映射一个组件, 访问这两个路径也会分别渲染两个组件。

实现嵌套路由有两个步骤:

* 创建对应的子组件, 并且在路由映射中配置对应的子路由。子路由配置例：

```javascript
{
    path: '/home',
    component: home,
    children: [
      {
        path: 'homeMessage',
        component: homeMessage,
      },
      {
        path: 'news',
        component: news,
      },
    ],
  },
```

如上子路由配置只需在原有路由基础上添加`children`对象即可。注意子路由的`path`是没有“/”的，只有根组件才有“/”。

* 在组件内部使用`<router-view>`标签.

```html
<template>
  <div>
    <h1>{{title}}</h1>
    <p>{{msg}}</p>
    <router-link to="/home/homeMessage">首页内容</router-link>
    <router-link to="/home/news">首页新闻</router-link>
    <router-view></router-view>
  </div>
</template>
```

to所指向的路径与path不同，是一个url的层级结构路径，`home`前要有"/"。

#### 路由参数传递

传递参数主要有两种类型: params和query

1. params的类型:

    配置路由格式: /router/:id

    传递的方式: 在path后面跟上对应的值

    传递后形成的路径: /router/123, /router/abc

2. query的类型:

    配置路由格式: /router, 也就是普通配置

    传递的方式: 对象中使用query的key作为传递方式

    传递后形成的路径: /router?id=123, /router?id=abc

第一种方式在之前已经介绍过，此处采用第二种方式，只需要在`routerLinkTo`元素内，将`to`属性使用`v-bind`动态绑定后，等于号右边传递一个路由的对象参数，例：

```html
<router-link :to="{path:'/about/fileAbout',query:{name:'hello',id:'2333'}}">click</router-link>
```

这个对象中包含的`query`就是我们要传递的参数。

也可以将`routerLinkTo`元素改成`<button>`绑定个动态方法，再将路径与`query`全部封装成对象后作为返回值，传递给`this.$router.push()`，例：

```js
methods: {
    toClick() {
      const goal = { path: '/about/fileAbout', query: { name: 'hello', id: '2333' } };
      this.$router.push(goal);
    },
```

#### url详解

就以下面这个URL为例，介绍下普通URL的各部分组成
`http://www.aspxfans.com:8080/news/index.asp?boardID=5&ID=24618&page=1#name`

从上面的URL可以看出，一个完整的URL包括以下几部分：

1. 协议部分：该URL的协议部分为“http：”，这代表网页使用的是HTTP协议。在Internet中可以使用多种协议，如HTTP，FTP等等本例中使用的是HTTP协议。在"HTTP"后面的“//”为分隔符
2. 域名部分：该URL的域名部分为`“www.aspxfans.com”`。一个URL中，也可以使用IP地址作为域名使用
3. 端口部分：跟在域名后面的是端口，域名和端口之间使用“:”作为分隔符。端口不是一个URL必须的部分，如果省略端口部分，将采用默认端口
4. 虚拟目录部分：从域名后的第一个“/”开始到最后一个“/”为止，是虚拟目录部分。虚拟目录也不是一个URL必须的部分。本例中的虚拟目录是“/news/”
5. 文件名部分：从域名后的最后一个“/”开始到“？”为止，是文件名部分，如果没有“?”,则是从域名后的最后一个“/”开始到“#”为止，是文件部分，如果没有“？”和“#”，那么从域名后的最后一个“/”开始到结束，都是文件名部分。本例中的文件名是“index.asp”。文件名部分也不是一个URL必须的部分，如果省略该部分，则使用默认的文件名
6. 锚部分：从“#”开始到最后，都是锚部分。本例中的锚部分是“name”。锚部分也不是一个URL必须的部分
7. 参数部分：从“？”开始到“#”为止之间的部分为参数部分，又称搜索部分、查询部分。本例中的参数部分为`“boardID=5&ID=24618&page=1”`。参数可以允许有多个参数，参数与参数之间用“&”作为分隔符。

### vue全局导航守卫

每个vue的组件都含有生命周期函数`created()`，当这个组件被使用时，这个函数才会被使用。我们可以通过该函数来改变加载到不同页面时的`title`名。例：

```js
<script>
export default {
  name: 'fileAbout',
  created() {
    document.title = 'fileAbout';
  },
  computed: {
    urlData() {
      return this.$route.query;
    },
  },
};
</script>
```

我们也可以通过在路由配置文件`index.js`中添加`router.beforeEach`来动态改变每个页面的`title`。

```js
router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});
```

同时还要为每个路由添加`meta`对象，例：

```js
{
    path: '/user/:userId',
    component: user,
    meta: {
      title: '用户',
    },
},
```

### vue cli 之keep-alive

`keep-alive` 是 Vue 内置的一个组件，可以使被包含的组件保留状态，或避免重新渲染。

用法也很简单：

```html
<keep-alive>
    <component>
        <--该组件会被缓存-->
    <component>
<keep-alive>
```

props:

* include - 字符串或正则表达，只有匹配的组件会被缓存
* exclude - 字符串或正则表达式，任何匹配的组件都不会被缓存

```js
// 组件 a
export default {
  name: 'a',
  data () {
    return {}
  }
}
```

```html
<keep-alive include="a">
  <component>
    <!-- name 为 a 的组件将被缓存！ -->
  </component>
</keep-alive>可以保留它的状态或避免重新渲染

<keep-alive exclude="a">
  <component>
    <!-- 除了 name 为 a 的组件都将被缓存！ -->
  </component>
</keep-alive>可以保留它的状态或避免重新渲染
```

#### 使用vue-router

`router-view`也是一个组件，如果直接被包在 `keep-alive` 里面，所有路径匹配到的视图组件都会被缓存：

```html
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
```

如果只想 router-view 里面某个组件被缓存，怎么办？

使用 include/exclude

##### 使用`inclue/exclude`

例：

```html
<keep-alive include="a"><!--keep-alive exclude="a"-->
    <router-view>
        <!-- 只有路径匹配到的视图 a 组件会被缓存！ -->
    </router-view>
</keep-alive>
```

### webpack配置别名alias

在webpack.config.js中，能够设置别名alias。设置别名能够让后续引用的地方减小路径的复杂度。

vue-cli 2.0 在\build\webpack.base.conf.js文件下配置。

vue-cli 3.0 在vue.config.js下配置别名alias。

```json
 alias: {
      '@': resolve('src'),
      '_c': resolve('src/components')
    }
```

这样配置后 @ 能够指向 src 目录。

`import utils math from "@/utils/utils"; // 由于设置了alias，因此引入utils.js时候能够这样简写`

在HTML和css中使用别名，要在别名前添加`~`。

## 异步编程 promise使用

JavaScript 是单线程工作，这意味着两段脚本不能同时运行，而是必须一个接一个地运行。Promise是抽象异步处理对象以及对其进行各种操作的组件。Promise是把类似的异步处理对象和处理规则进行规范化， 并按照采用统一的接口来编写，而采取规定方法之外的写法都会出错。

也就是说，除promise对象规定的方法(这里的 then 或 catch)以外的方法都是不可以使用的， 而不会像回调函数方式那样可以自己自由的定义回调函数的参数，而必须严格遵守固定、统一的编程方式来编写代码。

当我们开发中有异步操作时, 就可以给异步操作包装一个Promise
异步操作之后会有三种状态：

1. pending：等待状态，比如正在进行网络请求，或者定时器没有到时间。
2. fulfill：满足状态，当我们主动回调了resolve时，就处于该状态，并且会回调.then()
3. reject：拒绝状态，当我们主动回调了reject时，就处于该状态，并且会回调.catch()

例：

```js
<script>
    new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve(data="传送成功");
        reject(error="传送失败");
      },1000)
    }).then((data)=>
    {
      console.log(data);
      console.log(data);
      console.log(data);
      return new Promise((resolve,reject)=>{
        setTimeout(()=>{
          resolve(data="传送成功2");
          reject(error="传送失败2");
        },1000)
      }).then((data)=>{
        console.log(data);
        console.log(data);
      })
    }).catch((error)=>{
      console.log(error);
      console.log(error);
    })
  </script>
```

在上例中使用了`setTimeout()`函数，`setTimeout()`是属于 window 的方法，该方法用于在指定的毫秒数后调用函数或计算表达式。

在上例中该函数在1秒中之后执行箭头函数：

```js
(resolve,reject)=>{
      setTimeout(()=>{
        resolve(data="传送成功");
        reject(error="传送失败");
      },1000)
```

该箭头函数正是三个状态的`pending`状态，如果满足了`resolve`的执行条件时，执行`then`部分的函数，如果不满足，则执行`reject`回调`catch`后的部分。`resolve`括号内的参数会传递给`then`部分（在`then`参数可以自定义），同样的`reject`内的括号传递给`catch`部分。

如上例所见，可以有多个`then`，然后执行`then`的链式调用。`then`的链式调用可以使得传递进的数据能够层层被处理。

可以不用`new promise`实例，而是改写成`Promise`的具体操作，例如，如果是要执行`Promise`的`resolve`，就可以用`Promise.resolve(参数)`来替代。这样就有更加清晰的层次关系。例：

```js
new Promise((resolve) => {
        setTimeout(()=>{
          resolve("传送成功");
          // reject("传送失败")
        },1000)
    }).then((data)=>{
      console.log(data);
      return Promise.resolve(data+"传送次数2");
    }).then((data)=>{
      console.log(data);
      return Promise.resolve(data+"传送次数3");
    }).then(data=>{
        console.log(data);
        return Promise.reject("传送失败");
    }).catch(error=>{
        console.log(error);
    });
```

### promise all方法

Promise.all(promiseArray)方法是Promise对象上的静态方法，该方法的作用是将多个Promise对象实例包装，生成并返回一个新的Promise实例。例：

```js
    Promise.all([
      new Promise((resolve, reject) => {
        setTimeout(()=>{
          resolve("第一次传送");
        },1000);
      }),
      new Promise((resolve, reject) => {
          setTimeout(()=>{
            resolve("第二次传送");
          },2000);
      })
    ]).then((data)=>{
      console.log(data);
    })
```

promise数组中任何一个promise为reject的话，则整个Promise.all调用会立即终止，并返回一个reject的新的promise对象。

上例中，`promise`数组中所有的`promise`实例都变为`resolve`的时候，该方法才会返回，并将所有结果传递`data`数组中。

## VueX的使用