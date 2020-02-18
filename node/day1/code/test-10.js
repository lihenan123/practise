//读取1.txt文件  读文件API
//nodejs模块 三种  原生模块  第三方模块 自定义模块 mysql request formidable

//模块加载 原生模块 第三方模块 加载时不需要写路径 自定义模块需要
//是不是所有的原生模块都需要用require加载？ global timer buffer module 
//process stream console
/*
var fs=require("fs");
var data=fs.readFileSync("./1.txt","utf-8");
console.log(data);
console.log("end");*/

//按照缓冲区方式读
//按照stream的pipe的方式读  include “stdio.h”;  include "iostream.h"
/*
var fs=require("fs");
fs.readFile("./1.txt","utf-8",function(err,data){
	if(err){
		throw err;
	}else{
		console.log(data);
	}
})

console.log("end");*/

//读1.txt 然后停2S再结束
/*
var fs=require("fs");
fs.readFile("./1.txt","utf-8",function(err,data){
	if(err){
		console.log(err);
	}else{
		getData(data);
	}
})

function getData(data){
	setTimeout(function(){
		console.log(data);
	},2000);
}*/