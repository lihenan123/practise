/*
A(b,function(){
		function(){
			function(){

			}
		}
})

// async waterfall---bluebird  ---async/await*/

async function async1(){
	console.log('async1 start');
	await async2();
	console.log('async1 end');
}

async function async2(){
	console.log('async2');
}

console.log("script start");
async1();
console.log("script end");



// async sqlUser(uname,pass,function(err,data){
	
// 		var ss=await sqlSafe(uname);
// 		if(ss){
// 			console.log(aa);
// 		}

// })
