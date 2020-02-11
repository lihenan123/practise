export let Add = ()=>{
    console.log('ADD action');
    return{
        type:'ADD'
    }
}
export let Reduce = ()=>{
    console.log('Reduce action');
    return{
        type:'REDUCE'
    }
}
