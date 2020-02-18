var Person=require("./newperson.js");
var util=require("util");
function Student(){
	Person.call(this);
	this.study=function(){
		console.log("studying");
	}
}

util.inherits(Student,Person);

module.exports=Student;

