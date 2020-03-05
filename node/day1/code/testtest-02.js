// function haveLunch(food,drink,callback){
//     console.log("have lunch of "+food+" "+drink);
//     if(callback && typeof(callback)==="function"){
//         callback();
//     }
// }

// haveLunch("bread","milk",function(){
//     setTimeout(function(){
//         console.log("lunch is finished");   
//     },3000)
// })

var http=require("http");
http.createServer(function(req,res){
    res.writeHead(200,{"Content-type":"text/html"});
    res.end("<h2>123</h2>")
}).listen(3000);

console.log("server start port 3000");