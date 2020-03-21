var db=require("./db.js");

exports.insert_name_by_pass=function(uname,pass,nickname,callback){
	//var sql="select * from t_users where ACCOUNT=? and PASSWORD=?";
	var sql="insert into t_users(ACCOUNT,PASSWORD,NAME) values(?,?,?)";
	db.query(sql,[uname,pass,nickname],callback);
}

exports.check_name=function(account,callback){
	var sql="select * from t_users where ACCOUNT=?";
	db.query(sql,[account],callback);
}

exports.get_name_by_pass=function(account,pass,callback){
	var sql="select * from t_users where ACCOUNT=? and PASSWORD=?";
	db.query(sql,[account,pass],callback);
}

/*
数据库--->表--->列---->数值   
mysql关系型数据库 约束  not null,default,主键约束，外键约束 主外键关联
表 只能有一个主键 多个外键
主键 not null，自增长 int

列 类型  int char(8) varchar(8)  text  date

增 
insert into 表名(列名,列名,....)  values(值,值,....)

删
delete from 表名 where id=1

改
update 表名 set 列名=值,列名=值 where id=1

查

select * from t_users
select * from t_users where id=1*/

/*
t_users(uid,uname,pass,nickname,flag,gender,header)
t_blogs(bid,title,content,date,hits,catalog_id,fen)
t_blog_catalog(catalog_id,catalog_name)
t_comments(cid,ccontent,cdate,uid,bid)
t_messages(mid,mcontent,mdate,sid,rid);
t_blog_love(lid,bid,uid);
t_blog_collection(clid,bid,uid);
t_duty()
t_duty_catalog()
t_score()
t_gift()
t_gift_catalog()*/

