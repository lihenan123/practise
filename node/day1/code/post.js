var http = require("http");
var url = require("url");
var querystring = require("querystring");
var fs = require("fs");

http.createServer(function(req,res){
    var newpath = url.parse(req.url).pathname;
    if(newpath == '/'){
        goIndex(res);
    }else if(newpath == "/sub"){
        goPost(req,res);
    }else{
        res.writeHead(404,{"Content-type":"text/plain"});
        res.end("no page founded");
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
    req.setEncoding("utf-8");

    req.addListener('data',function(postChunkData){
        postData += postChunkData;
    })

    req.addListener('end',function(){
        var Params = querystring.parse(postData);
        if(Params.uname=="123" && Params.ps=="123"){
            res.writeHead(200,{"Content-type":"utf-8"});
            res.end("success");
        }else{
            res.writeHead(200,{"Content-type":"utf-8"});
            res.end("failed");
        }
    })
}