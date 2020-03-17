var url = require("url");
var fs = require("fs");
var querystring = require("querystring");

exports.goIndex = function(res){
    var filename = __dirname+"/static/"+url.parse("index.html").pathname;
    var filedata = fs.readFileSync(filename,"utf-8");
    res.writeHead(200,{"Content-type":"text/html"});
    res.end(filedata);
}
exports.goPost = function(req,res){
    var postdata="";
    req.sendEncoding("utf-8");
    req.startListener("data",function(data){
        postdata+=data;
    })
    req.startListener("end",function(){

    })
}
exports.goImg = function(res){
    res.writeHead(200,{"Content-type":"text/html"});
    res.end("img");
}
exports.goFault = function(res){
    res.writeHead(200,{"Content-type":"text/html"});
    res.end("no page founded");
}