(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{170:function(s,t,a){"use strict";a.r(t);var i=a(0),l=Object(i.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"运行参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#运行参数","aria-hidden":"true"}},[s._v("#")]),s._v(" 运行参数")]),s._v(" "),a("p",[s._v("bigsql需要读取一些外部的配置文件，才能完整的的运行")]),s._v(" "),a("ul",[a("li",[s._v("bigsql的一些环境变量")]),s._v(" "),a("li",[s._v("bigsql的物理数据源配置")]),s._v(" "),a("li",[s._v("bigsql的数据库，表配置")]),s._v(" "),a("li",[s._v("bigsql的表路由规则")])]),s._v(" "),a("p",[s._v("如上的配置，全部会在conf文件夹中，所以我们运行的时候，只需要指定conf文件夹的位置就行了，但是conf文件夹中的目录不能移动，需要保持原来的位置，\nbigsql会根据相对路径去查找")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("java -Dbigsql.conf=/xxPath/conf/ -jar bigsql.jar\n")])])])])}],!1,null,null,null);l.options.__file="运行bigsql.md";t.default=l.exports}}]);