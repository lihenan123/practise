/*
for(var i=1;i<10;i++){
	setTimeout(function(){
		console.log(i);
	},200);
}*/

//通过上面的循环 延迟两秒输出 1～10
for(var i=1;i<10;i++){
	var m=i;
	exec(m,function(m){
		console.log(m);
	});
}

function exec(param,callback){
	setTimeout(function(){
		callback(param);
	},200);
}

//将异步转换成同步 array
var A=new Array();
for(var i=0;i<A.length;i++){
	a=A[i];
	B(a,function(a){
		console.log(a);
	})
}