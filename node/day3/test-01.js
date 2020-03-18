//字符串 md5  ---Hash（rc6 md5 sha1 sha256 RSA128 RSA256 RSA2048）
//createHash  createHmac
//cnpm install md5   jiami('明文')  jiami('明文',key)  
//jiami('明文',publickey)  server('密文',privatekey)  
//privatekey  publickey ---证书  https  ssl/tls
var crypto=require("crypto");

/*
var hash=crypto.createHash('sha256');   //md5  sha256
hash.update("12345");
console.log(hash.digest('hex'));*/   
//md5(md5+salt);

localStorge  setItem
//本地化存储  localStorage sessionStorage cookie IndexDB WebSQL



//827ccb0eea8a706c4c34a16891f84e7b
//f6a0e1616c0e3df78b9ae7aec463cb0a

/*
var hmac=crypto.createHmac('md5','');
hmac.update('12345');
console.log(hmac.digest('hex'));*/