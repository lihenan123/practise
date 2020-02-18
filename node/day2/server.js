var util=require("util");
var events=require("events");

function MyStream(){
	events.EventEmitter.call(this);
}

util.inherits(MyStream,events.EventEmitter);

MyStream.prototype.write=function(data){
	this.emit("laoshan",data);
}

var mystream=new MyStream();

console.log(mystream instanceof events.EventEmitter);
console.log(MyStream.super_===events.EventEmitter);

mystream.on("laoshan",function(data){
	console.log("Received data "+data);
});

mystream.write("It work!");
