## 有关表单内容的学习  
`fieldset`可将表单的相关元素进行分组  
`legend`标签可为`fieldset`设置标题  


### `input`的相关属性
`input`元素中的`type='text'`出现一个输入框，当`input`中含有一个属性`required`时，表示该输入框中一定要输入内容,  
当`input`中设置了`readonly`属性时，表示输入框中已经设置的`value`值不可通过输入更改，在提交时，`value`值会提交到后台；如果给`input`设置了`disabled`，也能达到`readonly`只读的效果，但不会把`value`值提交到后台中。  
`input`中设置`palceholder`表示设置一个"提示信息"，该"提示信息"文本内容，在输入框获得焦点时隐藏起来。  
`input`的`hidden`表示将输入框隐藏起来，但在提交信息时，依然会被提交。  
`input`的`pattern`可以为`input`设置一个正则表达式，用于javascript来验证`input`的输入内容是否符合正则的格式。  
`input`的边框可以通过css样式`border`进行设置。  


###  `input`的`type`属性设置
 `type=number`表示要求输入框内的值是数字；  
 `type=email`要求输入框内的内容符合email格式；  
 `type=url`要求输入框内的内容符合url格式  

### 文本域
`textarea`文本域，`rows`控制行数，`cols`控制列数，`textarea`设置默认值时不能使用`value`值，可以直接用代码块包裹默认值。  

### 下拉列表
`select`用于设置下拉列表，`option`表示设置可以选择的子选项，`option`中设置一个`selected`表示该选项默认被选中。`select`中设置一个`multiple`表示该下拉列表可以多选。`optgroup`表示设置项目组，为下拉列表的多个选项分类。  

###  单选按钮与复选按钮
在`input`的`type=radio`时表示设置了一个单选按钮，同时在`input`内设置`check`表示该选项默认被选中。

当`input`的`type=checkbox`时表示设置了一个多选按钮，注意`input`中的`name`设置的值后要加"[]"，表示传递一个组给后台。  


###  文件上传
把`input`中的`type`属性设置成`file`表示上传文件，文件格式用`accept`属性进行限制，例如要求上传"jpg"或者"png"格式文件时，`accept`设置成`accept=.jpg,.png`，`accept`可以接收多种文件格式，文件拓展名以逗号隔开；在`input`内使用`multiple`，同时`name`属性设置的值后面加上"[]"，可以同时上传多个文件。

### 日期设置
`input`的`type`设置成`date`，表示可以选择日期，如果设置了`min`和`max`，表示可以设置的日期的上限和下限，`step`属性可以为日期设置一个间隔数。同时日期`type`还支持`week`、`datetime-local`等日期类型。  
  
###  搜索框
将`input`的`type`设置成`search`会出现搜索框，我们可以为搜索框手动添加数据来源，我们进行搜索时一般会留有搜索历史，如果不想显示搜索历史，只需将`search`的`input`中添加`autocomplete="off"`即能关闭搜索历史。  

###  三种列表
1.  有序列表
使用HTML中的`<ol><li>`进行设置
2.  无序列表
使用HTML中的`<ul><li>`设置  
无序列表与有序列表的装饰都可以通过修改CSS中的`list-style:none;`取消掉，或者使用`list-style-type:cirle;/*这里是圆圈，还可以是别的样式*/`设置成其他装饰。
3.  描述性列表
`<dl><dt><dd>`，`dl`表示要描述的列表，`dt`表示定义名（definition title）， `dd`表示要描述的内容（definition data）。