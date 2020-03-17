//路由文件

var Coon = require("./coon.js"); 

exports.router = function(req,res,newpath){
    switch(newpath){
    case '/':{
        Coon.goIndex(res);
        break;
    }
    case '/add':{
        Coon.goPost(req,res);
        break;
    }
    case '/img':{
        Coon.goImg(res);
        break;
    }
    default:{
        Coon.goFault(res);
        break;
    }
}
}
