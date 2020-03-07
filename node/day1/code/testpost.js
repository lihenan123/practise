var http = require("http");
var url = require("url");
var fs = require("fs");
var querystring = require("querystring");

http.createServer(function(req,res){
    var newname = url.parse(req.url).pathname;
    if(newname=='/'){
        goIndex(res); 
    }else if(newname=='/sub'){
        goPost(req,res);
    }
    else{
        res.writeHead(404,{"Content-type":"text/plain"});
        res.end("no page");
    }
}).listen(3000);

console.log("server start");

function goIndex(res){
    var indexPath = __dirname+"/practice/"+url.parse("index.html").pathname;
    var indexData = fs.readFileSync(indexPath,"utf-8");
    res.writeHead(200,{"Content-type":"text/html"});
    res.end(indexData);
}

function goPost(req,res){
    var postData="";
    req.addListener('data',function(newdata){
        postData+=newdata;
    })

    req.addListener('end',function(){
        var Params = querystring.parse(postData);
        if(Params.uname=="1234" && Params.ps=="1234"){
            res.writeHead(200,{"Content-type":"text/html"});
            res.end("success");
        }else{
            res.writeHead(200,{"Content-type":"text/html"});
            res.end("failed");
        }
    })
}