import React from "react"
// import App from "../App"
import {Link,NavLink,withRouter} from 'react-router-dom'

const Navbar=(props)=>{
    // console.log(props)
    // setTimeout(()=>{
    //     props.history.push('./about')},2000);
    return(
        <nav className="nav-wrapper black darken-3">
            <div className="container">
                {/* <a className="brand-logo">Track IT</a> */}
                <ul className="right">
                    <li><NavLink to="/">Weather</NavLink></li>
                    <li><NavLink to="/wildfire">Wildfire Tracker</NavLink></li>
                   
                </ul>

            </div>

        </nav>



    )
}
export default withRouter(Navbar);