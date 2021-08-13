import { Component } from "react";

class Nav extends Component{
    
    render() {
        // console.log(this.props);
        return (
           <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand mb-0 h1" href="#">Navbar{" " }
                    <span className="badge badge-pill badge-secondary">{this.props.totalCounters} </span>
                </a>
            </nav>
        );
    }

}

export default Nav;