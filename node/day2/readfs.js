var fs=require("fs");
var querystring=require("querystring");

var data=fs.readFileSync("./xd.json","utf-8");
var dataobj=querystring.parse(data);

//console.log(dataobj);
module.exports=dataobj;