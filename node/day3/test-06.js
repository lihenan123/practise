setTimeout(function(){
	console.log(123);
},0);

process.nextTick(()=>{
	console.log(1);
});

Promise.resolve().then(()=>{
	console.log(2);
});

new Promise(function(resolve){
	console.log(456);
	resolve();
}).then(console.log(5));

process.nextTick(()=>{
	console.log(3);
});

Promise.resolve().then(()=>{
	console.log(4);
})

console.log("end");

//end  同步代码  同步跟随代码 

//同步代码、同步跟随代码（代码的先后顺序执行)-->process.nextTck--->Promise(resolve reject)
//---->setTimeout(根据定时时间先后 但是 0和1部分按照代码先后执行)，setInterval
//---->setImmedaite