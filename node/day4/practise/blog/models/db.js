var mysql = require('mysql');
var pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: 'lihenan1999',
    database: 'blog'
});

exports.query=function(sql,params,callback){
    pool.getConnection(function (err, connection) {
        // var sql = "select * from t_users where user='"+email+"' and pass='"+pass+"'";
        
        if (err) throw err;
        connection.query(sql,params, function (error, results, fields) {
            connection.release();
            if (error) throw error;
            callback(error, results);
        });
    });
}