//callback就一定是异步  
function waitFive(name,function_name){
	var pus=0;
	var currentDate=new Date();
	while(pus<5000){
		var now=new Date();
		pus=now-currentDate;
	}

	function_name(name);
}

waitFive("laoshan",echo);
console.log("is over");

function echo(name){
	console.log(name);
}