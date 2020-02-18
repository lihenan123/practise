var Animal=require("./animal.js");
var util=require("util");

function Bird(){
	Animal.call(this);
	this.say=function(){
		console.log("ji....ji");
	}
}

util.inherits(Bird,Animal);

module.exports=Bird;

