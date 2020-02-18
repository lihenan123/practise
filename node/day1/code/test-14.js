function haveLunch(food,drink,callback){
	console.log("having lunch of "+food+" "+drink);
	if(callback  && typeof(callback)==='function'){
		setTimeout(function(){
			callback();
		},5000);
	}

}


haveLunch('toast','coffee',function(){
	console.log("lunch finished");
})