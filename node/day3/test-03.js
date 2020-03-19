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

// 先执行同步代码
// 同步转向异步时 执行process.nextTick  Promise(resolve  reject)  
// 然后是setTimeout  setInterval  最后执行setImmediate