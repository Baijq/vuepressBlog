# oralce
 
## 索引

**作用:** 加快数据查询的速度

**说明:** 

1.  由数据库自行决定走不走索引

2. 主键列上面默认会加入索引

- 创建索引

```sql 
CREATE INDEX index_name ON table_name (column_name);
```

- 删除索引

```sql
drop index index_name;
```
 
 ## 模糊查询
 
 ```sql
 select * from table t where t.tag LIKE '%' || #{tag} || '%'
 ```
 
 ## 时间格式
 
 || 用来拼接字符串

 ```sql
 select sysdate, to_char(sysdate, 'yyyy-mm-dd hh24:mi:ss') from dual;
 ```
 
 ## 树形查询
 
>注意1和3使用了树查询，并且改动只有【prior】位置，当parentid = prior id时，数据库根据当前id去迭代出所有parentid=id的记录，查询结果是迭代出了所有的子类
 
 ```sql
 SELEC [LEVEL], column, expr...
  FROM table
[WHERE condition(s)]
[START WITH condition(s)]
[CONNECT BY PRIOR condition(s)]
 ```
 
 1. 查找一个节点的所有 直属子节点（所有后代）
 
 ```sql
--查询id=347的所有子类菜单(包括自己本身)
select level, m.*
  from onlinedb.tb_wechat_menu m 
 start with m.id = 347 --根节点
 connect by m.parentid = prior m.id
 ```
 
 2. 查找一个节点的直属父节点（父亲）
 
 ```sql
 --查询一个节点的直属父节点
select b.*
  from onlinedb.tb_wechat_menu a
  join onlinedb.tb_wechat_menu b
    on a.parentid = b.ID
 where a.ID = 454;
 ```
 
 3. 查找一个节点的所有直属父节点（祖宗）
 
```sql
--查询id=347的所有子类菜单(包括自己本身)
select level, m.*
  from onlinedb.tb_wechat_menu m 
 start with m.id = 454 
 connect by prior m.parentid = m.id
 ```
 
 4. [oracle树形查询参考](https://www.cnblogs.com/ao-xiang/p/5790342.html)
 
## 查看sql是否使用了索引

```sql
--需要分析有无索引的SQL语句，for后面的
EXPLAIN PLAN FOR SELECT sex FROM people where sex like '男%'; 
SELECT * FROM TABLE(DBMS_XPLAN.DISPLAY);
```

## 约束

 1. 非空约束（NOT NULL）

 2. 唯一性约束（UNIQUE）

 3. 主键约束（PRIMARY KEY）

 4. 外键约束（FOREIGN KEY）

 5. 检查性约束（CHECK）
 
## 利用子查询创建一个新表

```sql
--创建一个(空表)
create table emp1
	as
	select id,last_name,salary,dept_id
	from s_emp 
	where 1=2;--（恒为假的条件，条件为真就会把数据也复制进去）
```

## 添加列删除列

```sql
--给表tb_user添加valid字段
alter table tb_user add valid number(1);
--给字段加个注释
comment on column tb_user.valid is '是否有效，1：有效；0：无效' 
--删除字段
alter table tb_user drop column valid;
```

## 数据字典表

1. 查看当前用户有哪些表

```sql
--查看当前用户有哪些表	  
select table_name from user_tables;
```

2. 查询当前用户的数据

```sql
select object_name from user_objects where object_type = 'TABLE';

select distinct object_type from user_objects;
```

3. 查询当前用户下面所创建的所有约束的名字

```sql
SELECT constraint_name FROM user_constraints;
```

## sql语句分类

### 1. DML（insert delete update）

**执行DML语句的时候会产生事务(commit后修改的数据才会生效)**

- insert语句

```sql
--子查询插入数据
insert into test
  (id, last_name, salary)
  select id, last_name, salary from s_emp where id < 5;
```

- update语句

```sql
update table_name
set col1=val1,
	col2=val2 ...
where ...
```

- delete语句

```sql
delete from s_emp
where last_name='李四';
```

>例如:
	truncate table test;
相当于:
	delete from test;
	commit;

### 2. DDL （create alter drop truncate ...）

修改表结构

### 3. DCL（grant...）

## 序列

在oracle中sequence就是可以每次产生一个唯一数字的对象，每次取的时候它会自动增加。(用来主键id的生成)

1. 序列的操作

```sql
--创建
create sequence seq_name;
--删除
drop sequence seq_name;
--查询
select my_seq.nextval from dual;
select my_seq.currval from dual;
```

## 视图 （作用就是安全点）

视图是一条查询语句的结果集，相当于一张虚拟表

1. 创建

```sql
create view emp_dept
as 
select e.last_name,e.salary,d.name
from s_emp e
left outer join s_dept d
on e.dept_id=d.id;
```

2. 删除

```sql
drop view view_name
```

## 表的注释

1. 添加表注释
```sql
comment on table tb_student is '学生表'
```
2. 修改表注释
```sql
comment on table tb_student is '学生信息表'
```
3. 添加字段注释
```sql
comment on column tb_student.name is '学生的姓名'
```
4. 修改字段注释
```sql
comment on column tb_student.name is '学生姓名'
```
