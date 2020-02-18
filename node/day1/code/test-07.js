/*
function Demo(){
	this.a=123;
	this.bb=function(){
		console.log("laoxie");
	}
}

module.exports=Demo;*/

//将方法、类公布给外部  module.exports 类 object array string

// module.exports={
// 	'a':123,
// 	'bb':function(){
// 		console.log("laoxie");
// 	}
// }

exports.bb=function(){
	console.log("laoxie");
}

// exports={
// 	'bb':function(){
// 		console.log("laoxie");
// 	}
// }