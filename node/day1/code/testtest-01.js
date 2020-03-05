var fs=require("fs");
fs.readFile("./1.txt","utf-8",function(err,data){
	if(err){
		throw err;
	}else{
        setTimeout(function(){
            console.log(data)
        },2000)
		
	}
})


console.log("end");