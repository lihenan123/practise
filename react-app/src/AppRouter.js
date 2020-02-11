import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  Redirect,
  Prompt,
  NavLink
} from "react-router-dom"
import A from './components/A'
import Home from './components/Home'
import Jump from './components/Jump'
import B from './components/B'
import F from './components/F'

import Header from './components/Header'


function App() {
  return (
    <div className="App">
      <Router>
      <Header title="头部头部"></Header>
         
            <NavLink activeClassName="selected" exact to="/" >首页</NavLink> |
            <NavLink to="/a/5">A页面</NavLink> |
            <NavLink to="/f">F页面</NavLink> |
            <hr></hr>
            <Jump to="/b">jump到b</Jump> |
            <Jump to="/c">jump到c</Jump> |
            <Jump to="/d">jump到d</Jump> |
            <hr></hr>
            <Link to="/e">E页面</Link> |
            <Route exact path="/e" render={()=>{
              return <Redirect to="/"></Redirect>
            }}></Route>

            <Route exact path="/b" component={B}></Route>
            <Route exact path="/f" component={F}></Route>

            <Route exact path="/a/:id" component={A}></Route>
            <Route exact path="/" component={Home}></Route>
            
            {/* <Prompt when={true} message="确定离开吗"></Prompt> */}

         
      </Router>
    </div>
  );
}

export default App;
