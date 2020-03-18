var url = require("url");
var fs = require("fs");
var querystring = require("querystring");
var formidable = require("formidable");
var md5=require("md5");

exports.goIndex = function(res){
    var filename = __dirname+"/static/"+url.parse("index.html").pathname;
    var filedata = fs.readFileSync(filename,"utf-8");
    res.writeHead(200,{"Content-type":"text/html"});
    res.end(filedata);
}
exports.goPost = function(req,res){
    var postdata="";
    req.setEncoding("utf8");
    req.addListener("data",function(data){
        postdata+=data;
    })
    req.addListener("end",function(){
        var strobj = querystring.parse(postdata);
        var Indexdata = "<meta charset='utf-8'/>登录名："+strobj.uname+" 密码："+strobj.pass;
        res.writeHead(200,{"Content-type":"text/html"});
        res.end(Indexdata);
    })
}
exports.goImg = function(res){
    var filepath = __dirname+"/static/"+url.parse("123.jpg").pathname;
    var filedata = fs.readFileSync(filepath);
    res.writeHead(200,{"Content-type":"image/jpeg"});
    res.end(filedata);

    //或者通过管道符
    // var indexPath=__dirname+'/static/'+url.parse("123.jpg").pathname;
	// res.writeHead(200,{"Content-type":"image/jpeg"});
	// fs.createReadStream(indexPath).pipe(res);
}
exports.goFault = function(res){
    res.writeHead(200,{"Content-type":"text/html"});
    res.end("no page founded");
}
exports.goUpload = function(res){
    var filename = __dirname+"/static/"+url.parse("upload.html").pathname;
    var filedata = fs.readFileSync(filename,"utf-8");
    res.writeHead(200,{"Content-type":"text/html"});
    res.end(filedata);
}
exports.goDoupload = function(req,res){
    var form = new formidable.IncomingForm();
	var destfile=__dirname+"/upload/"
 	form.uploadDir = destfile;
    form.parse(req, function(err, fields, files) {
    	if(files.sfile.name){
    		var oldpath=files.sfile.path;
    		var newpath=__dirname+"/upload/laoxie.jpg";
    		fs.rename(oldpath,newpath,function(err,data){
    			if(err){
    				console.log(err);
    			}else{
    				console.log("success");
    			}
    		});
    		
        }
    });
}