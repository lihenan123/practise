var Coon=require("./coon.js");

exports.router=function(req,res,newpath){
	switch(newpath){
		case "/":
			Coon.goIndex(res);
			break;
		case "/add":
			Coon.goPost(req,res);
			break;
		case "/img":
			Coon.goImg(res);
			break;
		case "/upload":
			Coon.upload(res);
			break;
		case "/do_upload":
			Coon.do_upload(req,res);
			break;
		default:
			Coon.goFault(res);
			break;
	}
}