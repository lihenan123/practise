var db = require("./db.js");

exports.show_articles_by_name = function(uid,callback){
    var sql="select * from t_users,t_blogs where t_users.USER_ID=t_blogs.WRITER and t_blogs.WRITER=?";
    db.query(sql,[uid],callback);
}
exports.show_catalogs=function(uid,callback){
    var sql = "select * from t_users,t_blog_catalogs where t_users.USER_ID=t_blog_catalogs.USER_ID and t_blog_catalogs.USER_ID=?";
    db.query(sql,[uid],callback);
}