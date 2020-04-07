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
Vue组件中也能含有data，但与Vue实例不同的是，data不能是对象，组件中的data必须是一个函数。例：

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

### 父子组件通信

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
