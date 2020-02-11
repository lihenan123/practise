import React, { Component } from 'react';
import {Route,Link} from "react-router-dom"

class Jump extends Component {
    render() {
        return (
            <Route path={this.props.to} children={(match)=>{
                console.log(this.props.match);
                return(
                    <div>
                        {match?"<":""}
                        {/* {match&&"<"} */}
                        <Link to={this.props.to}>{this.props.children}</Link>
                    </div>
                )
            }}>
            </Route>
            
        );
    }
}

export default Jump;