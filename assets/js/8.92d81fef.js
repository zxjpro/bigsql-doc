(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{202:function(s,a,n){"use strict";n.r(a);var t=n(0),p=Object(t.a)({},function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("div",{staticClass:"content"},[s._ssrNode('<h1 id="读写分离"><a href="#读写分离" aria-hidden="true" class="header-anchor">#</a> 读写分离</h1><p>读写分离是将操作的sql分为查询操作与写操作，写操作(包括修改与删除)会操作主库，而查询操作则查询从库，从而提升数据库的效率，\n另一方面，因为使用了读写分离，所以数据库锁记录的情况可以减少非常多，从而优化数据库性能及速度。</p><div class="tip custom-block"><p class="custom-block-title">提示</p><p>bigsql并不会实现主从复制，这一部分需要配置mysql的二进制日志自行实现，bigsql只是作为读写分离的应用场景</p></div><div class="tip custom-block"><p class="custom-block-title">提示</p><p>bigsql中的读写分离是以数据库为单位的，也就是说bigsql中的逻辑库和物理库是一一对应的，但是数据库名可以不一样。\n不支持配置单个表作为读写分离操作</p></div><h2 id="强制读主库"><a href="#强制读主库" aria-hidden="true" class="header-anchor">#</a> 强制读主库</h2><p>在任何应用产品的主从复制中，数据从主库同步到从库时，都是需要时间的，哪怕是毫秒级别的同步，这个一般会受制于当前的网络环境。如果在插入一条数据后，立即去查询这条数据，\n因为插入的是主库，而查询的是从库，在查询的时候，有可能数据还没有同步到从库。</p><p>所以bigsql提供了一种强行读取主库的操作，也就是把一条查询语句，不读从库，强制读主库，避免这样的查询会查找不到数据的情况。\n代码示例如下:</p><div class="language-sql extra-class"><pre class="language-sql"><code><span class="token keyword">SELECT</span> MASTER <span class="token operator">*</span> <span class="token keyword">FROM</span> table_name\n</code></pre></div><p>我们可以看到不同的地方是这条语句多了一个<code>MASTER</code>关键字，当bigsql检测到这个关键字时，就会把这条语句强行在主库执行，关键字不区分大小写。</p><h2 id="配置读写分离"><a href="#配置读写分离" aria-hidden="true" class="header-anchor">#</a> 配置读写分离</h2><h3 id="配置数据源"><a href="#配置数据源" aria-hidden="true" class="header-anchor">#</a> 配置数据源</h3>'),s._ssrNode("<p>","</p>",[s._ssrNode("我们需要在bigsql的数据源目录建立相应的数据源，分别是主库的数据源和从库的数据源。"),n("router-link",{attrs:{to:"/guide/config_datasource.html"}},[s._v("查看建立方式")])],2),s._ssrNode('<h2 id="配置读写分离-2"><a href="#配置读写分离-2" aria-hidden="true" class="header-anchor">#</a> 配置读写分离</h2>'),s._ssrNode("<p>","</p>",[s._ssrNode("我们"),n("router-link",{attrs:{to:"/guide/create_logic_database.html"}},[s._v("建立一个逻辑库")]),s._ssrNode("，并且不添加任何表配置。前面也提到读写分离的逻辑库与物理库是一一对应的，所以我们新建的这个逻辑库只能是读写分离库，而<strong>不能添加逻辑表配置</strong>。")],2),s._ssrNode('<p>然后在逻辑库目录建立一个<code>default.xml</code>文件，文件配置如下:</p><div class="language-xml extra-class"><pre class="language-xml"><code><span class="token comment">&lt;!-- 开头就是一个default标签，但是有一个type属性，标志这是配置一个主从库 --&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>default</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">&quot;</span>masterSlave<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n\n\n    <span class="token comment">&lt;!-- 对当前数据库应用的策略，这是一个全类名 --&gt;</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>strategy</span><span class="token punctuation">&gt;</span></span>SimpleMasterSlaveStrategy<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>strategy</span><span class="token punctuation">&gt;</span></span>\n\n    <span class="token comment">&lt;!-- 此标签代表主从配置 --&gt;</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>masterSlave</span><span class="token punctuation">&gt;</span></span>\n        <span class="token comment">&lt;!-- 这里配置的是属性列表 --&gt;</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>properties</span><span class="token punctuation">&gt;</span></span>\n\n            <span class="token comment">&lt;!-- 主库的配置 --&gt;</span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span><span class="token punctuation">&gt;</span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>key</span><span class="token punctuation">&gt;</span></span>master<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>key</span><span class="token punctuation">&gt;</span></span>\n                <span class="token comment">&lt;!-- 主库的数据源名称 --&gt;</span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>value</span><span class="token punctuation">&gt;</span></span>idc49<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>value</span><span class="token punctuation">&gt;</span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">&gt;</span></span>\n\n            <span class="token comment">&lt;!-- 从库的配置 --&gt;</span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span><span class="token punctuation">&gt;</span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>key</span><span class="token punctuation">&gt;</span></span>slave<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>key</span><span class="token punctuation">&gt;</span></span>\n                <span class="token comment">&lt;!-- 从库的数据源名称 --&gt;</span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>value</span><span class="token punctuation">&gt;</span></span>idc44<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>value</span><span class="token punctuation">&gt;</span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">&gt;</span></span>\n\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>properties</span><span class="token punctuation">&gt;</span></span>\n\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>masterSlave</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>default</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><p>如上就配置完成了，重新加载bigsql即可。</p>')],2)},[],!1,null,null,"1fb39384");a.default=p.exports}}]);