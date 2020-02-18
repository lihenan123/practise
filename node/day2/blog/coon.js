//把一个文件读取到内存几种方法 fs buffer stream
var fs=require("fs");
var url=require("url");
var querystring=require("querystring");
var formidable = require('formidable');
var util=require("util");
var md5=require("md5");
var moment=require("moment");

exports.goIndex=function(res){
	var indexPath=__dirname+'/static/'+url.parse("index.html").pathname;
	var indexData=fs.readFileSync(indexPath,"utf-8");
	res.writeHead(200,{"Content-type":"text/html"});
	res.end(indexData);
}

exports.goImg=function(res){
	var indexPath=__dirname+'/static/'+url.parse("123.jpg").pathname;
	//var indexData=fs.readFileSync(indexPath);
	res.writeHead(200,{"Content-type":"image/jpeg"});
	fs.createReadStream(indexPath).pipe(res);
	// fs.createReadStream(indexPath).pipe(fs.createWriteStream("./789.jpg"));
	
	//res.end(indexData);
}

exports.goPost=function(req,res){
	var postData="";
	req.setEncoding("utf8");

	req.addListener("data",function(postChunkData){
		postData+=postChunkData;
	});

	req.addListener("end",function(){
		var strobj=querystring.parse(postData);
		var mpass=md5(strobj.pass);
		var indexData="<meta charset='utf-8'> 登录名： "+strobj.uname+" "+"密码: "+mpass;
		res.writeHead(200,{"Content-type":"text/html"});
		res.end(indexData);
	})
}

exports.goFault=function(res){
	res.writeHead(200,{"Content-type":"text/plain"});
	res.end("no page founded");
}

exports.upload=function(res){
	var indexPath=__dirname+'/static/'+url.parse("upload.html").pathname;
	var indexData=fs.readFileSync(indexPath,"utf-8");
	res.writeHead(200,{"Content-type":"text/html"});
	res.end(indexData);
}

//md5 加密密码  处理时间moment
exports.do_upload=function(req,res){
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
    	//console.log(util.inspect({fields: fields, files: files}));
      // res.writeHead(200, {'content-type': 'text/plain'});
      // res.write('received upload:\n\n');
      // res.end(util.inspect({fields: fields, files: files}));
      /*
      var srcname=files.sfile.name;
      var arrname=srcname.split(".");
      var len=arrname.length-1;
      var hou=arrname[len];
      var name="laoshan";//+moment().format("YYYY-MM-DD hh:mm:ss");
      //console.log(hou);
      var srcfile=files.sfile.path;
      var destfile=__dirname+"/upload/"+name+'.'+hou;*/
      //var writefile=fs.createWriteStream(destfile);
      //fs.createReadStream(srcfile).pipe(writefile);
      
      /*
      var bb=fs.copyFileSync(srcfile,destfile);
      if(bb){
      	res.writeHead(200,{"Content-type":"text/plain"});
		res.end("upload success");
      }else{
      	res.writeHead(200,{"Content-type":"text/plain"});
		res.end("upload error");
      }*/

      //console.log(destfile);
    });
}