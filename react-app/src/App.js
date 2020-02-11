import React, { Component } from 'react';
import store from './store';
import {Add,Reduce} from './action';
import {connect} from 'react-redux';

// 触发action需要使用store.dispatch(action);

class App extends Component {
    render() {
        return (
            <div>
                haha
                <button onClick={()=>{
                    store.dispatch(Add());
                }}>add</button>
                <button onClick={()=>{
                    store.dispatch(Reduce());
                }}>reduce</button>
            </div>
        );
    }
}

let mapStateToProps = (state) =>({
    num:state.num
})

export default connect(mapStateToProps)(App);