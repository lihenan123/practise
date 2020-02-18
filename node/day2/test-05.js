function parent(param1,param2){
	child(param1,param2);
}


function child(){
	console.log(arguments);
	console.log(arguments.callee);
	console.log(child.caller);
	console.log(child.caller.arguments.callee);
}


parent("laoshan","laoxie");

//function 有return叫函数 没有return叫过程
/*
function aa(){
	 var b=123;
	 console.log(b);
	 var a=13;
	 return;
	 console.log(a);
}

aa();*/
