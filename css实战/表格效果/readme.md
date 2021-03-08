# 表格效果

## table-layout

`table-layout`默认值为`auto`，另一可选值为`fixed`，`table-layout: fixed;`的设置效果为：

表格和列的宽度通过表格的宽度来设置，某一列的宽度仅由该列首行的单元格决定。在当前列中，该单元格所在行之后的行并不会影响整个列宽。

另外`fixed`也能加速渲染表格。

## border-collapse

`border-collapse`用来表示表格边框是否分开，可选值为：`collapse`与`separate`，`collapse`表示边框重合效果，`separate`表示表格边框分开效果。

## empty-cells

`empty-cells`样式能够隐藏空白单元格的边框，可选值为：`hidden`与`show`。

## :nth-child() 伪类

`:nth-child(even)`实现了表格隔行换色的效果，`even`表示样式在偶数行生效。