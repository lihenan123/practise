setTimeout(function(){
	console.log('setTimeout')
},0);

process.nextTick(function(){
	console.log('nextTick');
})

new Promise(function(resolve){
	console.log("promise1");
	resolve();
	console.log("Promise end");
}).then(function(){
	console.log("promise2");
})

//promise1  nextTick  promise2  setTimeout  Promise end