//dns解析  递归 迭代 ip  ipv4 ipv6 hosts
/*
var dns=require("dns");
var http=require("http");
urls=['http://www.qq.com','http://www.baidu.com','http://www.sohu.com']

function fetchPage(url){
	var start=new Date();
	//http四大关键字  get post put delete
	http.get(url,function(res){
		console.log("Got respone from : "+url);
		console.log("Request took: ",(new Date()-start),'ms');
	})
}

for(var i=0;i<urls.length;i++){
	fetchPage(urls[i]);
}*/


var dns=require("dns");

dns.resolve4("www.qq.com",function(err,addresses){
	if(err){
		console.log(err);
	}else{
		console.log(addresses);
	}
})