var Blog_model = require("../models/blog_model.js");
exports.index = function (req, res, next) {
    var uid = req.session.id;
    Blog_model.show_articles_by_name(uid,function(err,data){
        if(data.length>0){
            res.render("/index_logined",{
                'sess':req.session,
                'blogs':data
            })
        }
    })
}