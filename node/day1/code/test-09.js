//node 写后端 webServer  node是单进程 异步回调 事件循环  
//同步产生阻塞 异步不会 thread 2M 10G

var http=require("http");

http.createServer(function(req,res){
	res.writeHead(200,{"Content-type":"text/html"});
	res.end("<h1>hello world</h1>");
}).listen(3000);

console.log("server start port 3000");

//jpg  image/jpeg  mime

//执行前端页面  file:///   Vue npm run dev http://localhost:8080  tinyserver
//webpack  启动server  热更新  watch child_process

//从chrome向server发送的请求 request  req
//从server向chrome发送的请求 respone  res

//数据包（请求行 包头 空格 包体） status code  2 3 4 5
//200 301 302 304 307 404 500 501 502 503 

//npm install -g supervisor  开发环境 supervisor nodemon 生产环境 pm2

//select * from user where name=? and pass= or 1%3c2 

//三码一致  文件编码 ANSI Unicode UTF-8
// 浏览器解码  GBK/GB18030/GB2312  UTF-8
// 数据库编码 UTF-8