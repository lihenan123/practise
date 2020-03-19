var http = require("http");
var url=require("url");
var fs = require("fs");

http.createServer(function(req,res){

    var pathname = url.parse(req.url).pathname;
    var realpath = __dirname+'/static'+pathname;
    
    if(pathname=='/favicon.ico'){
        return;
    }
    else if(pathname=='/' || pathname=='/index'){
        goIndex(res);
    }
    else{
        goStatic(pathname,realpath,res);
    }
}).listen(3000);

console.log("start server");

function goIndex(res){
    var filename = __dirname+'/static/'+url.parse("index.html").pathname;
    var filedata = fs.readFileSync(filename,"utf-8");
    res.writeHead(200,{"Content-type":"text/html"});
    res.end(filedata);
}

function goStatic(pathname,realpath,res){
    fs.exists(realpath,function(exists){
        if(!exists){
            res.writeHead(404,{"Content-type":"text/plain"});
            res.end("no page founded");
        }
        else{
            var mmieposition = pathname.lastIndexOf("."); //从后判断后缀出现的位置
            var mmiestring = pathname.substring(mmieposition+1); //提取出后缀
            var mmietype;
            switch(mmiestring){
                case 'css' :
                    mmietype="text/css";
                    break;
                case 'jpg' :
                    mmietype="image/jpeg";
                    break;
                default:
                    mmietype="text/plain";
                    break;
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
    })
}