(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{179:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("在分布式关系型数据库中，我们需要尽可能的少用join，因为本身join字段出现在分布式关系型数据库中就是不合理的存在，在分库分表中，我们无法利用到数据库自带的索引来进行join，\n只能依靠中间件自己实现，但是性能却非常低，甚至很多公司在分布式关系型数据库中都是禁用join的。")]),t._v(" "),a("p",[t._v("解决方案：")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),a("p",[t._v("conf/datasource/目录中是配置物理数据源的文件，所以我们可能对它的安全性要求很高，所以我们可以用一个特殊的用户启动bigsql,\n然后conf/datasource/只对这个用户读取写权限，其它的用户则就没有读写权限，则可以保证数据源配置参数的安全")]),t._v(" "),a("p",[t._v("总结起来就是设置该文件的读取权限，让其它用户没有读取权限就行了嘛")]),t._v(" "),t._m(4),t._v(" "),a("p",[t._v("无论是bigsql,还是后端mysql实例，或者是应用程序，为了避免问题，请尽量使用utf8mb4,utf8,utf8_general_ci")]),t._v(" "),t._m(5),t._v(" "),a("p",[t._v("bigsql提供了在不停机的情况下，增加数据源配置的功能，但是值得注意的是，bigsql并不会修改任何已经加载过的数据源，因为该数据源有可能正在使用，\nbigsql只会对新增加的数据源进行增加，所以请不要修改之前的数据源，特别是修改数据源的name，这会引发无法加载正确的数据源的问题。")]),t._v(" "),t._m(6),t._v(" "),a("p",[t._v("当我们使用mysql命令行客户端时")]),t._v(" "),t._m(7),a("p",[t._v("在执行切换数据库时，会卡住，出现如下信息，并且永远卡死在这里")]),t._v(" "),t._m(8),a("p",[t._v("其实按照这里给出来的提示，我们需要在启动mysql客户端时加上-A参数就行了，如下")]),t._v(" "),t._m(9),t._m(10),t._v(" "),t._m(11),t._v(" "),a("p",[t._v("我们编写SQL时，需要把带有分片的表名写在前面，bigsql会加载第一个表的分片策略。")]),t._v(" "),a("p",[t._v("假如我们对table_b进行了分片，我们要对table_a进行join")]),t._v(" "),t._m(12),a("p",[t._v("也就是说，我们要以分片表为主表进行join。")]),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),a("ul",[a("li",[t._v("一个表中的字段名，不能与表名一致。")]),t._v(" "),a("li",[t._v("不要使用MYSQL中的关键字在数据库中命名。")]),t._v(" "),a("li",[t._v("不要使用bigsql中的关键字在数据库中命名，"),a("router-link",{attrs:{to:"/guide/keyword.html"}},[t._v("bigsql关键字")])],1)]),t._v(" "),t._m(16),t._v(" "),a("p",[t._v("insert语句中，必须写明要插入哪些字段，如下")]),t._v(" "),t._m(17),a("p",[t._v("而不能写成")]),t._v(" "),t._m(18),t._m(19),t._v(" "),a("p",[t._v("对bigsql的分片键，在对应的每个mysql实例中的每个分表，都建议建立相应的索引，这会提高在每个分表的查询速度。")])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"小提示"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#小提示","aria-hidden":"true"}},[this._v("#")]),this._v(" 小提示")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"尽可能的少用join"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#尽可能的少用join","aria-hidden":"true"}},[this._v("#")]),this._v(" 尽可能的少用join")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("合理的设计表结构，当我们考虑某一个表做分片时，我们就该想清楚，这个表该做什么，不该做什么，适用的业务场景是什么。如果涉及报表之类的查询，为什么不用别的方案呢？spark,hadoop，或者一些nosql数据库？")]),this._v(" "),s("li",[this._v("合理的对一些数据进行冗余。这需要我们对目前的数据库非常了解，并且知道当前的业务情况，并且对未来发生的变化有一些规划，才能合理的对数据表进行冗余，这是分布式数据库中常用的方案。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"数据源配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据源配置","aria-hidden":"true"}},[this._v("#")]),this._v(" 数据源配置")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"编码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#编码","aria-hidden":"true"}},[this._v("#")]),this._v(" 编码")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"刷新数据源配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#刷新数据源配置","aria-hidden":"true"}},[this._v("#")]),this._v(" 刷新数据源配置")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"使用mysql命令行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用mysql命令行","aria-hidden":"true"}},[this._v("#")]),this._v(" 使用mysql命令行")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("mysql -P 3307 -h 10.8.1.69 -u root -p\nuse database;\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("mysql> use sharding;\nReading table information for completion of table and column names\nYou can turn off this feature to get a quicker startup with -A\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("mysql -P 3307 -h 10.8.1.69 -u root -p -A\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("加上"),s("code",[this._v("-A")]),this._v("就代表着不会预读数据库信息，就可以正常执行后面的操作")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"sql查询顺序"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sql查询顺序","aria-hidden":"true"}},[this._v("#")]),this._v(" SQL查询顺序")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" table_b b "),a("span",{attrs:{class:"token keyword"}},[t._v("inner")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("join")]),t._v(" table_a "),a("span",{attrs:{class:"token keyword"}},[t._v("on")]),t._v(" a"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("b"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"分片键"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分片键","aria-hidden":"true"}},[this._v("#")]),this._v(" 分片键")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("如果一个语句不带有分片键，那么将会引发全表扫描。")]),this._v(" "),s("li",[this._v("如果"),s("code",[this._v("INSERT")]),this._v("语句中不带有分片键，那么将会返回ERROR，无法执行。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"命名限制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#命名限制","aria-hidden":"true"}},[this._v("#")]),this._v(" 命名限制")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"insert语句写法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#insert语句写法","aria-hidden":"true"}},[this._v("#")]),this._v(" INSERT语句写法")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("INSERT")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("INTO")]),t._v(" tableName"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("name"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("age"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token keyword"}},[t._v("value")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token string"}},[t._v("'name'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token number"}},[t._v("20")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("INSERT")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("INTO")]),t._v(" tableName "),a("span",{attrs:{class:"token keyword"}},[t._v("value")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token string"}},[t._v("'name'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token number"}},[t._v("20")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"对分片键建立索引"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#对分片键建立索引","aria-hidden":"true"}},[this._v("#")]),this._v(" 对分片键建立索引")])}],!1,null,null,null);n.options.__file="tips.md";s.default=n.exports}}]);