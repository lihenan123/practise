setTimeout(function(){
	console.log(1);
	process.nextTick(function(){
		console.log(2);
	})
},0);

setTimeout(function C(){
	console.log(3)
},0);

/*
process.nextTick(function A(){
	console.log(1);
	process.nextTick(function B(){
		console.log(2);
	})
})*/


//1 3 2
//1 2 3 
