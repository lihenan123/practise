import {createStore} from 'redux';
import reducer from './reducer'

// createStore创建store
// 第一个参数是reducer 第二个参数是state

let initState ={
    num:0
};
let store = createStore(reducer,initState);

export default store;