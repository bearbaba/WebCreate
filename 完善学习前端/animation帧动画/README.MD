#  animation帧动画  
##  关键帧
通过`@keyframes 为某元素设置的动画名`的方式为某个元素设置帧动画，每一帧可以用百分比的方式来写，例：
```css
@keyframes hd{
    25%{
        width:100px;
    }
    50%{
        width:200px;
    }
    100%{
        width:300px;
    }
}
```
hd是自己设置的动画名，在某一元素中设置`animation:hd`，这个元素就能使用如上的关键帧动画。  
百分比的形式也可以改为`from..to..`语法，例：  
```css
@keyframes hd{
    from{
        width:100px;
    }
    to{
        width:200px;
    }
}
``` 
