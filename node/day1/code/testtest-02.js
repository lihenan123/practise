function haveLunch(food,drink,callback){
    console.log("have lunch of "+food+" "+drink);
    if(callback && typeof(callback)==="function"){
        callback();
    }
}

haveLunch("bread","milk",function(){
    setTimeout(function(){
        console.log("lunch is finished");   
    },3000)
})