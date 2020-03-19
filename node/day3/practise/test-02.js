var http = require("http");
var fs = require("fs");
var url = require("url");

http.createServer(function(req,res){
    var filename = url.parse(req.url).pathname;
    var realpath = __dirname+'/static'+filename;
    if(filename=='/favicon.ico'){
        return;
    }
    else if(filename=="/" || filename=="/index"){
        goIndex(res);
    }
    else{
        goStatic(filename,realpath,res);
    }
}).listen(3000);

console.log("start server");

function goIndex(res){
    var filename = __dirname+'/static/'+url.parse("index.html").pathname;
    var filedata = fs.readFileSync(filename,"utf-8");
    res.writeHead(200,{"Content-type":"text/html"});
    res.end(filedata);
}

function goStatic(filename,realpath,res){
    fs.exists(realpath,function(exists){
        if(!exists){
            res.writeHead(404,{"Content-type":"text/plain"});
            res.end("no page founded");
        }
        else{
            var mmieposition = filename.lastIndexOf(".");
            var mmiename = filename.substring(mmieposition+1);
            var mmietype;
            switch(mmiename){
                case 'css':{
                    mmietype="text/css";
                    break;
                }
                case 'jpg' :
                    mmietype="image/jpeg";
                    break;
                default:{
                    mmiename="text/plain";
                    break;
                }
            }
            fs.readFile(realpath,"binary",function(err,file){
                if(err){
                    res.writeHead(500,{"Content-type":"text/plain"});
                    res.end("error");
                }
                else{
                    res.writeHead(200,{"Content-type":mmietype});
                    res.write(file,'binary');
                    res.end();
                }
            })
        }
    });
}