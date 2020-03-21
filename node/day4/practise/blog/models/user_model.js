var db = require("./db.js");

exports.insert_name_pass = function (email,pass,nickname,callback) {
    var sql = "insert into t_users(ACCOUNT,PASSWORD,NAME) values(?,?,?)";
    db.query(sql,[email,pass,nickname],callback);
    // connection.connect();

    // connection.query('select * from t_users', function (error, results, fields) {
    //     if (error) throw error;
    //     callback(error, results);
    //     connection.end();
    // });

}
exports.check_name = function(account,callback){
    var sql = "select * from t_users where ACCOUNT=?";
    db.query(sql,[account],callback);
}
exports.check_login=function(account,pass,callback){
    var sql = "select * from t_users where ACCOUNT=? and PASSWORD=?";
    db.query(sql,[account,pass],callback);
}