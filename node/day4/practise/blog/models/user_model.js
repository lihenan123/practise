var db = require("./db.js");

exports.insert_name_pass = function (email,pass,callback) {
    var sql = "insert into t_users values (?,?)";
    db.query(sql,[email,pass],callback);
    // connection.connect();

    // connection.query('select * from t_users', function (error, results, fields) {
    //     if (error) throw error;
    //     callback(error, results);
    //     connection.end();
    // });

}
exports.check_name = function(account,callback){
    var sql = "select * from t_users where user=?";
    db.query(sql,[account],callback);
}