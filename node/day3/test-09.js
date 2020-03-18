async function async1(){
	console.log("async1 start");
	await async2();
	console.log('async1 end');
}

async function async2(){
	console.log('async2');
}

console.log('script start');

setTimeout(function(){
	console.log('setTimeout');
},0);

async1();

new Promise(function(resolve){
	console.log('Promise1');
	resolve();
	console.log('Promise new');
}).then(function(){
	console.log('Promise1');
})

new Promise(function(resolve){
	console.log('Promise Old');
	resolve();
}).then(console.log('old'));

console.log('script end');

process.nextTick(function(){
	console.log('nextTick');
})

//script start-->async1 start-->async2-->Promise1-->Promise new-->Promise Old-->old-->script end 
//-->nextTick-->async1 end-->Promise1-->setTimeout-->