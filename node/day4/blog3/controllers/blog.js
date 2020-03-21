var Blog_model=require("../models/blog_model.js");
var moment=require("moment");

//pl(plid,plcon,pltime,uid,bid)
//msg(msgid,msgcon,msgtime,sid,rid)
/*
collection(cid,singid,uid,ctime,singlistid,flag)  
---flag 0--(无收藏 无点赞) 1--（收藏） 2--（点赞）3--（收藏 点赞）
resend(reid,resid,ssid,url)  --转发
singlist(singlistid,singname,uid)

mysql  person1(personid)  fav(favid favname personid)
mongodb person1(mongodbid,fav:['singe','dancer'])
Hadoop(hive,mapreduce---spark  sparkSQL)
图数据库 Neo4j*/

exports.sendMsgOK=function(req,res,next){
	var sid=req.session.id;
	var rid=req.body.rid;
	var content=req.body.content;
	Blog_model.insert_msg(content,sid,rid,function(err,data){
		if(data.affectedRows==1){
			res.render("sendMsgOK");
		}
	})

}

exports.msg=function(req,res,next){
	var uid=req.query.uid;
	Blog_model.sel_name_by_uid(uid,function(err,data){
		if(data.length>0){
			res.render("sendMsg",{
				'sess':req.session,
				'umsg':data[0],
			});
		}
	})
	
	//var bid=req.params.bid;
	//console.log(bid);
	//console.log(123);

}

exports.getjson=function(req,res,next){
	res.json({
		'id':1,
		'name':'laoxie',
	})
}

exports.send_comments=function(req,res,next){
	var bid=req.body.hbid;
	var uid=req.session.id;
	var content=req.body.content;
	Blog_model.insert_comment(bid,uid,content,function(err,data){
		if(data.affectedRows==1){
			var str="/viewPost_logined/"+bid;
			res.redirect(str);
		}
	})
}


exports.show_detail_by_page=function(req,res,next){
	var bid=req.params.bid;
	var uid=req.session.id;
	//console.log(bid);
	
			Blog_model.update_hits_by_bid(bid,function(err,data){
				if(data.affectedRows==1){
					Blog_model.sel_blogs_by_bid(bid,function(err,data){
						var newdata=data;
						if(data.length>0){
							//查找当前文章的评论
							Blog_model.sel_comments_by_bid(bid,function(err,data){
								res.render("viewPost_logined",{
									'sess':req.session,
									'blog':newdata[0],
									'comments':data,
									//'predata':predata[0],
									//'backdata':backdata[0],
								})
							})
						}
		
					})
				}
			})

			
			
			//console.log(data);
			/*
			var times=moment(data[0].ADD_TIME).valueOf();
			console.log(times);
			var now=new Date();
			var newtimes=moment(now).valueOf();
			console.log(newtimes);

			var hours=(newtimes-times)/3600;
			console.log(hours);*/
		
}

exports.do_search=function(req,res,next){
	var search_name=req.query.q;
	Blog_model.search_article_by_name(search_name,function(err,data){
		if(data.length>0){
			//console.log(data);
			res.render("index_logined",{
				'sess':req.session,
				'blogs':data,
			});
		}
	})
}

exports.perindex=function(req,res,next){
	var cataid=req.params.cataid;
	var uid=req.session.id;
	//console.log(cataid);
	Blog_model.show_articles_by_cataid(uid,cataid,function(err,data){
		if(data.length>0){
			//console.log(data);
			//查找出分类数据
			var blogs=data;
			Blog_model.sel_cata_by_uid(uid,function(err,data){
				if(data.length>0){
					res.render("index_logined",{
						'sess':req.session,
						'blogs':blogs,
						'catas':data,
					});
				}
			})
			
		}
	})
}


exports.index=function(req,res,next){
	//console.log(req.session);
	//把index主页加载
	var uid=req.session.id;
	Blog_model.show_articles_by_name(uid,function(err,data){
		if(data.length>0){
			//console.log(data);
			//查找出分类数据
			var blogs=data;
			Blog_model.sel_cata_by_uid(uid,function(err,data){
				if(data.length>0){
					res.render("index_logined",{
						'sess':req.session,
						'blogs':blogs,
						'catas':data,
					});
				}
			})
			
		}
	})
	
}

exports.do_add=function(req,res,next){
	var title=req.body.title;
	var cataid=req.body.catalog;
	var con=req.body.newcontent;
	var uid=req.session.id;

	Blog_model.insert_data_by_name(cataid,title,con,uid,function(err,data){
		if(data.affectedRows==1){
			//console.log(123);
			Blog_model.update_catas_by_cataid(cataid,function(err,data){
				if(data.affectedRows==1){
					res.redirect("/index");
				}
			})

		}
	})

	//console.log(title+"||"+cataid+"||"+con);
}

exports.add=function(req,res,next){
	//调用Blog_model下的分类查询方法
	var uid=req.session.id;
	Blog_model.sel_cata_by_uid(uid,function(err,data){
		console.log(data);
		if(data.length>0){
			res.render("newBlog",{
				'sess':req.session,
				'catas':data,
			});
		}
		
	})
	
}

exports.add_catalog=function(req,res,next){
	var uid=req.session.id;
	Blog_model.sel_cata_by_uid(uid,function(err,data){
		if(data.length>0){
			res.render("blogCatalogs",{
				'sess':req.session,
				'catas':data,
			});
		}
	});
}

exports.addBlogCatalog=function(req,res,next){
	var uid=req.session.id;
	var cataname=req.body.name;
	Blog_model.insert_catalog(cataname,uid,function(err,data){
		if(data.affectedRows==1){
			res.redirect("/blogCatalogs");
		}
	})
}


exports.editCatalog=function(req,res,next){
	var cid=req.query.cid; 
	//var uid=req.session.id;
	Blog_model.sel_catadata(cid,function(err,data){
		if(data.length>0){
			res.render("editCatalog",{
				'sess':req.session,
				'cata':data[0],
			});
		}
	});
	

}

exports.updateCatalog=function(req,res,next){
	var cid=req.body.hcid;
	var cname=req.body.name;
	Blog_model.update_cataname(cid,cname,function(err,data){
		if(data.affectedRows==1){
			res.redirect("/blogCatalogs");
		}
	})
}

exports.delCatalog=function(req,res,next){
	var cid=req.query.cid;
	//var uid=req.session.id;
	Blog_model.del_cataname(cid,function(err,data){
		if(data.affectedRows==1){
			res.redirect("/blogCatalogs");
		}
	})
}