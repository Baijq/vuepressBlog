(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{367:function(s,a,t){"use strict";t.r(a);var e=t(45),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"mysql"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mysql"}},[s._v("#")]),s._v(" MySQL")]),s._v(" "),t("h2",{attrs:{id:"一、下载和安装教程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、下载和安装教程"}},[s._v("#")]),s._v(" 一、下载和安装教程")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("官网下载  "),t("a",{attrs:{href:"https://www.mysql.com/downloads/",target:"_blank",rel:"noopener noreferrer"}},[s._v("MySQL"),t("OutboundLink")],1)])]),s._v(" "),t("li",[t("p",[s._v("解压到本地 例如我的 D:\\mysql-8.0.17-winx64")])]),s._v(" "),t("li",[t("p",[s._v("在根目录下创建配置文件 my.ini")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("mysqld"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置端口号")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("port")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3306")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置mysql的安装目录")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("basedir")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("D:"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("mysql-8.0.17-winx64  \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置mysql数据库的数据的存放目录")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("datadir")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("D:"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("mysql-8.0.17-winx64"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Data \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 允许最大连接数")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("max_connections")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("200")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 允许连接失败的次数。这是为了防止有人从该主机试图攻击数据库系统")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("max_connect_errors")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 服务端使用的字符集默认为UTF8/utf8mb4")]),s._v("\ncharacter-set-server"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("utf8\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建新表时将使用的默认存储引擎")]),s._v("\ndefault-storage-engine"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("INNODB\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 默认使用“mysql_native_password”插件认证")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("default_authentication_plugin")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("mysql_native_password\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("mysql"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置mysql客户端默认字符集/utf8mb4")]),s._v("\ndefault-character-set"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("utf8\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("client"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置mysql客户端连接服务端时默认使用的端口/utf8mb4")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("port")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3306")]),s._v("\ndefault-character-set"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("utf8\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("配置环境变量")])]),s._v(" "),t("li",[t("p",[s._v("初始化数据库")]),s._v(" "),t("p",[s._v("在bin目录下执行命令（以管理员方式运行cmd）"),t("strong",[t("code",[s._v("mysqld --initialize --console")])])])]),s._v(" "),t("li",[t("p",[s._v("执行完成后会打印出root用户初始密码，记住这个密码，复制下来后面会用到")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://note.youdao.com/yws/api/personal/file/D1E1CA3C3A7148578CCCCFD2D9CE4615?method=download&shareKey=382cc9102a4b9477d5b482b78c46d4fa",alt:""}})])]),s._v(" "),t("li",[t("p",[s._v("如果手快了，点过去了，或者密码没记住，可以删除初始化的 datadir 目录，重新执行初始化命令")])]),s._v(" "),t("li",[t("p",[s._v("安装服务 "),t("strong",[t("code",[s._v("mysqld --install")])]),s._v("， 成功后出现Service successfully installed")])]),s._v(" "),t("li",[t("p",[s._v("启动服务 "),t("strong",[t("code",[s._v("net start mysql")])])])]),s._v(" "),t("li",[t("p",[s._v("修改密码")]),s._v(" "),t("ul",[t("li",[s._v("登录MySQL  "),t("code",[s._v("mysql -u root -p")])]),s._v(" "),t("li",[s._v("输入第6步记住的密码")]),s._v(" "),t("li",[t("strong",[s._v("ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '新密码';")])])])])]),s._v(" "),t("p",[t("strong",[s._v("至此MySQL已经安装完成")])]),s._v(" "),t("p",[t("a",{attrs:{href:"https://blog.csdn.net/qq_42152399/article/details/80360817",target:"_blank",rel:"noopener noreferrer"}},[s._v("踩过一个坑"),t("OutboundLink")],1)]),s._v(" "),t("h2",{attrs:{id:"二、mysql用户命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、mysql用户命令"}},[s._v("#")]),s._v(" 二、MySQL用户命令")]),s._v(" "),t("ol",[t("li",[s._v("查看数据库 "),t("code",[s._v("show databases;")])]),s._v(" "),t("li",[s._v("切换到相关数据库 "),t("code",[s._v("use mysql;")])]),s._v(" "),t("li",[s._v("展示表 "),t("code",[s._v("show tables;")])]),s._v(" "),t("li",[s._v("查看用户信息 "),t("code",[s._v("select user,host,authentication_string from mysql.user;")])]),s._v(" "),t("li",[s._v("创建用户 "),t("code",[s._v("CREATE USER 'xxh'@'%' IDENTIFIED WITH mysql_native_password BY 'xxh123!@#';")])]),s._v(" "),t("li",[s._v("授权所有权限 "),t("code",[s._v("GRANT ALL PRIVILEGES ON *.* TO 'admin'@'%';")]),s._v(" 这里 "),t("code",[s._v("on testdb.* to'admin'@'%';")]),s._v(" 表示给这个admin某个库的权限。")]),s._v(" "),t("li",[s._v("刷新权限 "),t("code",[s._v("flush privileges;")])]),s._v(" "),t("li",[s._v("查询用户权限 "),t("code",[s._v("show grants for 'admin'@'%';")])]),s._v(" "),t("li",[s._v("删除用户 "),t("code",[s._v("drop user 'admin'@'%';")])]),s._v(" "),t("li",[s._v("创建库 "),t("code",[s._v("create database testdb")])]),s._v(" "),t("li",[s._v("删除库 "),t("code",[s._v("drop database testdb;")])])]),s._v(" "),t("h2",{attrs:{id:"三、jdbc配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、jdbc配置"}},[s._v("#")]),s._v(" 三、JDBC配置")]),s._v(" "),t("blockquote",[t("p",[s._v("MySQL 6 在设定时区的时候，如果设定serverTimezone=UTC，会比中国时间早8个小时，如果在中国，可以选择Asia/Shanghai或者Asia/Hongkong")])]),s._v(" "),t("p",[s._v("MySQL 6")]),s._v(" "),t("div",{staticClass:"language-properties line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-properties"}},[t("code",[t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("mysql.driverClassName")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("com.mysql.cj.jdbc.Driver")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#mysql.url=jdbc:mysql://localhost:3306/testdb?serverTimezone=Asia/Shanghai&useUnicode=true&characterEncoding=utf8&useSSL=false")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("mysql.url")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("jdbc:mysql://localhost:3306/testdb?serverTimezone=UTC&useUnicode=true&characterEncoding=utf8&useSSL=false")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("mysql.username")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("root")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("mysql.password")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("root")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("MySQL 5")]),s._v(" "),t("div",{staticClass:"language-properties line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-properties"}},[t("code",[t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("mysql.driverClassName")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("com.mysql.jdbc.Driver")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("mysql.url")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("jdbc:mysql://127.0.0.1:3306/testdb?useUnicode=true&characterEncoding=utf8&useSSL=false")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("mysql.username")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("root")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("mysql.password")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("root")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h2",{attrs:{id:"四、mysql语句"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#四、mysql语句"}},[s._v("#")]),s._v(" 四、MySQL语句")]),s._v(" "),t("blockquote",[t("p",[s._v("备注：总结")])]),s._v(" "),t("ol",[t("li",[s._v("在Mysql中，只有当表的类型是INNODB的时候，才支持事务")])])])}),[],!1,null,null,null);a.default=n.exports}}]);