# MySQL

## 一、下载和安装教程

1. 官网下载  [MySQL](https://www.mysql.com/downloads/)

2. 解压到本地 例如我的 D:\mysql-8.0.17-winx64

3. 在根目录下创建配置文件 my.ini

   ```bash
   [mysqld]
   # 设置端口号
   port=3306
   # 设置mysql的安装目录
   basedir=D:\\mysql-8.0.17-winx64  
   # 设置mysql数据库的数据的存放目录
   datadir=D:\\mysql-8.0.17-winx64\\Data 
   # 允许最大连接数
   max_connections=200
   # 允许连接失败的次数。这是为了防止有人从该主机试图攻击数据库系统
   max_connect_errors=10
   # 服务端使用的字符集默认为UTF8/utf8mb4
   character-set-server=utf8
   # 创建新表时将使用的默认存储引擎
   default-storage-engine=INNODB
   # 默认使用“mysql_native_password”插件认证
   default_authentication_plugin=mysql_native_password
   [mysql]
   # 设置mysql客户端默认字符集/utf8mb4
   default-character-set=utf8
   [client]
   # 设置mysql客户端连接服务端时默认使用的端口/utf8mb4
   port=3306
   default-character-set=utf8
   ```

4. 配置环境变量

5. 初始化数据库

   在bin目录下执行命令（以管理员方式运行cmd）**`mysqld --initialize --console`**

6. 执行完成后会打印出root用户初始密码，记住这个密码，复制下来后面会用到

   ![](https://note.youdao.com/yws/api/personal/file/D1E1CA3C3A7148578CCCCFD2D9CE4615?method=download&shareKey=382cc9102a4b9477d5b482b78c46d4fa)

7. 如果手快了，点过去了，或者密码没记住，可以删除初始化的 datadir 目录，重新执行初始化命令

8. 安装服务 **`mysqld --install`**， 成功后出现Service successfully installed

9. 启动服务 **`net start mysql`**

10. 修改密码

    - 登录MySQL  `mysql -u root -p`
    - 输入第6步记住的密码
    - **ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '新密码';** 

**至此MySQL已经安装完成**

[踩过一个坑](https://blog.csdn.net/qq_42152399/article/details/80360817)

## 二、MySQL用户命令

1. 查看数据库 `show databases;`
2. 切换到相关数据库 `use mysql;`
3. 展示表 `show tables;`
4. 查看用户信息 `select user,host,authentication_string from mysql.user;`
5. 创建用户 `CREATE USER 'xxh'@'%' IDENTIFIED WITH mysql_native_password BY 'xxh123!@#';`
6. 授权所有权限 `GRANT ALL PRIVILEGES ON *.* TO 'admin'@'%';` 这里 `on testdb.*  to'admin'@'%';` 表示给这个admin某个库的权限。
7. 刷新权限 `flush privileges;`
8. 查询用户权限 `show grants for 'admin'@'%';`
9. 删除用户 `drop user 'admin'@'%';`
10. 创建库 `create database testdb`
11. 删除库 `drop database testdb;`


## 三、JDBC配置
>MySQL 6 在设定时区的时候，如果设定serverTimezone=UTC，会比中国时间早8个小时，如果在中国，可以选择Asia/Shanghai或者Asia/Hongkong   

MySQL 6
```properties
mysql.driverClassName=com.mysql.cj.jdbc.Driver
#mysql.url=jdbc:mysql://localhost:3306/testdb?serverTimezone=Asia/Shanghai&useUnicode=true&characterEncoding=utf8&useSSL=false
mysql.url=jdbc:mysql://localhost:3306/testdb?serverTimezone=UTC&useUnicode=true&characterEncoding=utf8&useSSL=false
mysql.username=root
mysql.password=root
```

MySQL 5
```properties
mysql.driverClassName=com.mysql.jdbc.Driver
mysql.url=jdbc:mysql://127.0.0.1:3306/testdb?useUnicode=true&characterEncoding=utf8&useSSL=false
mysql.username=root
mysql.password=root
```