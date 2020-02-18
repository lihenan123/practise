var http=require("http");
var url=require("url");
var fs=require("fs");
var path=require("path");

http.createServer(function(req,res){
	var newpath=url.parse(req.url).pathname;
	switch(newpath){
		case "/" :
			getIndex(res);
			break;
		case "/img":
			getImg(res);
			break;
		default:
			getFault(res);
			break;
	}
}).listen(3000);

console.log("server start");

function getIndex(res){
	var indexPath=__dirname+"/static/"+url.parse("index.html").pathname;
	var indexdata=fs.readFileSync(indexPath,"utf-8");
	res.writeHead(200,{"Content-type":"text/html"});
	res.end(indexdata);
}

function getImg(res){
	var indexPath=__dirname+"/static/"+url.parse("123.jpg").pathname;
	fs.createReadStream(indexPath).pipe(process.stdout);
	//console.log(ss);
	/*
	var imgdata=fs.readFileSync(indexPath);
	res.writeHead(200,{"Content-type":"image/jpeg"});
	res.end(imgdata);*/
	//var indexPath=__dirname+"/"+path.join("static",url.parse("123.jpg").pathname);
	//console.log(indexPath);
}

function getFault(res){
	res.writeHead(404,{"Content-type":"text/plain"});
	res.end("no page founded");
}