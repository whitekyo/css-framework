﻿css-framework介绍
---
css-framework目录结构:
* less
	* reset.less
	* lib.less
	* reset-mobile.less
	* variables.less
	* mixins.less
	* grid.less
* css
	* reset.css
	* lib.css
	* reset-mobile.css
	* grid.css
* dest
	* mobile-base.css
	* pc-base.css
* node_modules
* Gruntfile.js
* package.json

reset.css
* 清除内外边距的元素，去掉了 div, code（在测试浏览器中，没发现有边距）, 增加了 button（感觉是 YUI 遗漏了）. 
* 去掉了 YUI 里对 html 颜色和背景色的设置。在测试浏览器中，没有发现差异。（要设的话，推荐background: transparent） 
* 对于 address, caption, …, em, strong 等文本格式元素，做了调整。保留了 strong 和 th 的粗体。 
* 对 abbr 和 acronym 做了调整，使得在非 ie6 下可视性更好。 
* 去掉了 sup 和 sub 的样式，直接用浏览器默认的即可。 
* 对于 input, select, textarea 表单元素，去掉了针对 ie 的 inherit, 只保留了 font-size 的 inherit hack. 因为其它 hack 经测试已失效。 
* 增加了一些元素的默认样式。 

lib.css
* 提供关于margin、padding、font-size、color、height(line-height)、layout、box等单个属性类

reset-mobile.css
* 在reset.css的基础上加入了移动端的一些调整，新添响应式判断。

grid.css
* 剥离在bootstrap3中的栅格系统，做新手布局使用。

