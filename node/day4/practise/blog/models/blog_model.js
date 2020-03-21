var db = require("./db.js");

exports.show_articles_by_name = function(uid,callback){
    var sql="select * from t_users,t_blogs where t_users.USER_ID=t_blogs.WRITER and t_blogs.WRITER=?";
    db.query(sql,[uid],callback);
}
exports.show_catalogs=function(uid,callback){
    var sql = "select * from t_users,t_blog_catalogs where t_users.USER_ID=t_blog_catalogs.USER_ID and t_blog_catalogs.USER_ID=?";
    db.query(sql,[uid],callback);
}

exports.add_blog_catalog= function(name,uid,callback){
    var sql="insert into t_blog_catalogs(CATALOG_NAME,USER_ID) values(?,?)";
    db.query(sql,[name,uid],callback);
}
exports.search_catalog = function(cid,callback){
    var sql = "select * from t_blog_catalogs where CATALOG_ID=?";
    db.query(sql,[cid],callback);
}
exports.modify_catalog = function(name,cid,callback){
    var sql = "update t_blog_catalogs set CATALOG_NAME=? where CATALOG_ID=?";
    db.query(sql,[name,cid],callback);
}