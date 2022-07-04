insert into 表名 value(null,字段1的值,字段2的值,字段3的值,....)
delete from 表名 where id = 你要删除的id的值
update 表名 set 字段1 = 字段1的值,字段2=字段2的值,字段3=字段3的值 .... where id = 你要修改的id的值
select * from 表 #查询所有
select * from A inner join B where A.公共字段 = B.公共字段 and 条件 #多表联合查询
# 条件查询
select * from 表名 where 条件
# 查询性别为男的
select * from student where gender = '男'
# 查询年龄大于30岁的
select * from student where age >= 30;
# 查询年龄在25岁到28岁之间
select * from student where age >=25 and age <= 28
# 排序 Order by 
select * from student order by age asc #从小到大的排序
select * from student order by age desc # 从大到小的排序
# 模糊查询 like '% x %'
select * from student where name like '%三%'
select * from student where name like '%章%'
# 分页 limit
select * from student limit 0,5;# 从索引从0到5的数据              1
select * from student limit 5,5# 从索引从6到10的数据
select * from student limit 10,5# 从索引从10到15的数据
select * from student limit n,m   # 从索引n开始,获取m条数据

# 一页显示5条
select * from student limit (1-1)*5,5                  1
select * from student limit (2-1)*5,5                  2
select * from student limit (3-1)*5,5                  3

前端至少传入两个数 当前页数 x,一页显示多少条 y
select * from student limit (x-1)*y,y
select * from student limit (3-1)*5,5

