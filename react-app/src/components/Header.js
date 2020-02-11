import React, { Component } from 'react';
import {withRouter} from "react-router-dom"

class Header extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <button onClick={()=>{
                    this.props.history.go(-1);
                }}>&lt;</button>
                this is Header
            </div>
        );
    }
}

export default withRouter(Header);