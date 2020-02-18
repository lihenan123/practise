console.log("start");

setTimeout(function(){
	console.log(123);
},0);


process.nextTick(function(){
	console.log(456);
})

setImmediate(function(){
	console.log(789);
})

console.log("end");