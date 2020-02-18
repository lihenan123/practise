var Student=require("./student.js");
var Person=require("./newperson.js");
//第三方模块加载问题
var request=require("request");

var person=new Person();
person.sleep();
person.eat();

var student=new Student();
student.study();
student.sleep();


//npm install request /  npm install request --save node_modules---package.json
//npm install -g cnpm 
//npm init  npm就是node包管理系统 
//rpm  deb redhat yum install gcc 
//debian  apt-get install gcc

//包版本 --- node版本 