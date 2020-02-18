//exports module.exports 文件彼此之间调用的封装性 
//node 继承 （1）父类能被继承方法 全部copy子类  (2)实现一种方法 让子类的构造函数能访问父类构造函数
//extends  construct() 

function Cat(){

}

Cat.prototype={
	'name':'fish',
	'eat':function(){
		console.log("I love "+this.name);
	}
}

var blackcat=new Cat();
blackcat.eat();

var whiteDog={
	'name':'bone',
}

blackcat.eat.call(whiteDog);
whiteDog.eat;

//call bind apply


//类里面 有动态的成员方法 有静态的成员方法
/*
classA extends CI_Controller{
	public function __construct(){
		//parent::__construct();
		super()
	}

	public function reg(){

	}

	public static function login(){

	}
}

var classa=new classA();
classa.reg();

classA::login()*/