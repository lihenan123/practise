var util = require("util");

function Person(){
    this.eat = function(){
        console.log("I can eat");
    }
    this.sleep = function(){
        console.log("I can sleep");
    }
}

function Student(){
    Person.call(this);
    util.inherits(Student,Person);
    this.doing = function(){
        console.log("I'm student. I can study.");
    }
}
function Teacher(){
    Person.call(this);
    util.inherits(Teacher,Person);
    this.doing = function(){
        console.log("I'm teacher. I can teaching.");
    }
}
function Coder(){
    Person.call(this);
    util.inherits(Coder,Person);
    this.doing = function(){
        console.log("I'm coder. I can codeing.");
    }
}

var student = new Student();
student.eat();
student.doing();

var teacher = new Teacher()
teacher.eat();
teacher.doing();

var coder = new Coder();
coder.eat();
coder.doing();