var fs = require("fs");
var querystring = require("querystring");

var data = fs.readFileSync("./test.json","utf-8");
var newdata = querystring.parse(data);

module.exports = newdata;

