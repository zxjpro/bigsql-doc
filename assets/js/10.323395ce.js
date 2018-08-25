(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{159:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"分布式主键"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分布式主键","aria-hidden":"true"}},[t._v("#")]),t._v(" 分布式主键")]),a("p",[t._v("在分布式系统中，我们不能设置主键为自动增长，因为不同的表中，会产生重复的主键，所以常用的作法是使用UUID来作为主键，这样可以保证不重复")]),a("p",[t._v("但是我们有的时候要求主键的生成是有序的，因为我们这样可以对数据进行一些排序处理。所以bigsql提供了分布式主键的功能，提供了有序的一个long类型的主键")]),a("h2",{attrs:{id:"snowflake"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#snowflake","aria-hidden":"true"}},[t._v("#")]),t._v(" snowflake")]),a("p",[t._v("bigsql采用的是推特开源的一个分布式主键生成算法，可以在没有中心节点的情况下，生成一个64位的整型，我们可以在配置文件中设置指定的列为分布式主键")]),a("p",[t._v("使用方法如下，进入逻辑表的规则配置，找到"),a("code",[t._v("properties")]),t._v("标签，添加下面的内容：")]),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("property")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("key")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("incrementColumn"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("key")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("\x3c!-- 我们可以添加多个列 --\x3e")]),t._v("\n    "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("value")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("columnName0,columnName1"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("value")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("property")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),a("p",[t._v("snowflake生成的是一个有序，但是不连续的64位整数，java的long类型刚好可以接收，其它语言请使用合适的数据类型，同时数据库中，该列需要能存储18个长度的整数")])]),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("扩展")]),a("p",[t._v("其实不仅仅是主键，我们任意一个列，都可以使用自增长的方式。")]),a("p",[t._v("如果insert语句中已经指定了该列的值，那么分布式主键的策略将会不生效，使用SQL语句中指定的值为准。")])]),a("p",[t._v("最后，感谢推特公司开源的snowflake")])])}],!1,null,null,null);s.default=e.exports}}]);