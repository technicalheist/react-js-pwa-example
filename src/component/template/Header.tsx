import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class Header extends Component {

    logout()
    {
        localStorage.clear();
        window.location.href = '/';
    }

    render() {
        
        let user_id = localStorage.getItem('user_id');
        console.log(user_id);
        return (
            <React.Fragment>
            <nav className="light-blue lighten-1" role="navigation">
            <div className="nav-wrapper container"><Link id="logo-container" to="/" className="brand-logo">Logo</Link>
            <ul className="right hide-on-med-and-down">
                <li><Link to="/about">About us</Link></li>
            { (user_id === null) ? '' :  <li><a  onClick={this.logout} href="?#" >Logout</a></li>}  
            </ul>
            <ul id="nav-mobile" className="sidenav">
            <li><Link to="/about">About us</Link></li>
              { (user_id === null) ? '' : <li><a  href="?#" >Logout</a></li> }  
            </ul>
            <a href="?#" data-target="nav-mobile" className="sidenav-trigger"><i className="material-icons">menu</i></a>
            </div>
            </nav>
        </React.Fragment>
        )
    }
}
