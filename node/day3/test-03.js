process.nextTick(()=>{
	console.log(1);
})

Promise.resolve().then(()=>{
	console.log(2);
})

process.nextTick(()=>{
	console.log(3);
})

Promise.resolve().then(()=>{
	console.log(4);
})

//1 3 2 4

//同步最快 同-->异  process.nextTick  Promise(resolve  reject)  
//setTimeout  setInterval --->当前这个异步消息循环  setImmediate