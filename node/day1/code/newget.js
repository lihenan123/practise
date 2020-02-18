
var http=require("http");
var url=require("url");
var querystring=require("querystring");

http.createServer(function(req,res){
	//console.log(req.method);
	//console.log(req.url);
	var str=url.parse(req.url).query;
	//console.log(str);  //str-->object
	var obj=querystring.parse(str);
	console.log(obj);

}).listen(3000);

console.log("server start");

/*
var str="http://www.163.com/1.rmvb";
var  buffer = Buffer.from(str, 'utf-8');

var base64Str = buffer.toString('base64');
var thunder="thunder://"+base64Str;

console.log(thunder);*/


/*
get post区别
1、get传输数据都在url上
2、get一次性传输数据 不能超过4096个字节

post
1、post传输数据不在url上
2、post一次性传输数据 不限制 */
