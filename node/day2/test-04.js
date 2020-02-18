var name="xiaojia",age=17;

var obj={
	name:'xiaozhang',
	objAge:this.age,
	myFun:function(fm,t){
		console.log(this.name+"年龄 "+this.age+" 来自 "+fm+" 去哪 "+t);
	}
}

var db={
	name:"laoshan",
	age:99,
}

//call(目标源,param1,param2)  call apply bind区别  caller callee的区别
obj.myFun.call(db,"哈尔滨","北京");
obj.myFun.apply(db,["哈尔滨","北京"]);
obj.myFun.bind(db,"哈尔滨","北京")();
//obj.myFun.bind(db,["哈尔滨","北京"])();


//对象与对象之间的关系 类与类之间的关系 函数与函数之间的关系