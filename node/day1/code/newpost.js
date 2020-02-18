var http=require("http");
var url=require("url");
var fs=require("fs");
var querystring=require("querystring");

http.createServer(function(req,res){
	var newpath=url.parse(req.url).pathname;
	if(newpath=="/"){
		goIndex(res);
	}else if(newpath=="/add"){
		goPost(req,res);
	}else{
		res.writeHead(404,{"Content-type":"text/plain"});
		res.end("no page founded");
	}

}).listen(3000);

console.log("server start");

function goIndex(res){
	var indexPath=__dirname+'/static/'+url.parse("post.html").pathname;
	var indexData=fs.readFileSync(indexPath,"utf-8");
	res.writeHead(200,{"Content-type":"text/html"});
	res.end(indexData);
}

function goPost(req,res){
	//name password
	//1、什么时候也开始传  2、什么时候传递结束  3、拼接缓冲区
	var postData="";
	req.setEncoding('utf8');

	req.addListener('data',function(postChunkData){
		postData+=postChunkData;
	});

	req.addListener("end",function(){
		//console.log(postData);
		var Params=querystring.parse(postData);
		if(Params.uname=="laoshan" && Params.pass=="12345"){
			res.writeHead(200,{"Content-type":"text/plain"});
			res.end("login success");
		}else{
			res.writeHead(200,{"Content-type":"text/plain"});
			res.end("login error");
		}
	})

}