var http=require("http");
var url=require("url");
var Router=require("./router.js");
http.createServer(function(req,res){
	var newpath=url.parse(req.url).pathname;
	Router.router(req,res,newpath);
}).listen(3000);

console.log("server start port 3000");