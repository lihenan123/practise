var aa=function(){
	console.log(123);
}

function aa(){
	console.log(456);
}


aa();

/*
1、var aa=undefine function aa(){} ---0x1a2b3c
2、function aa(){}  ---0x1a2b3c*/


//Array String Math Date 正则 Function ----Object

// var a=123;
// var obj={
// 	a:123;
// }

// a=456;
// obj.a=456;

// Object.prototype产生{}
// Function.prototype产生的是function(){}
// Object.prototype.write=function(){

// }

// Object.prototype={
// 	'write':function(){

// 	}
// }