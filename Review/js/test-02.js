console.log('1');

setTimeout(function(){ //宏任务
    console.log('2');
    
    new Promise(function(resolve){
        console.log('4');
        resolve();
    }).then(function(){
        console.log('5');
    })
    process.nextTick(function(){
        console.log('3');
    })
})

process.nextTick(function(){ //微任务
    console.log('6');
})
//1 6 2 4 3 5