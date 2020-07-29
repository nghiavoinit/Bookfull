import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './MainNav.css';
import AuthContext from "../context/auth-context"
class MainNav extends Component {
    render() {
        return (
            <AuthContext.Consumer>
                {(context) => {
                    return<header>
                    <div className= "mainNav-logo">
                            Nick Brendon
                    </div>
                    <nav className="mainNav">
                    <ul >
                                    {context.token && <li>
                                        <NavLink to="/bookings">Bookings</NavLink>
                                    </li>}
                        <li>
                            <NavLink to="/events">Events</NavLink>
                        </li>
                        
                    </ul>
                    <ul>
                        {!context.token && <li>
                            <NavLink to="/auth">Login</NavLink>
                                </li>}
                        {context.token && <li>
                            <NavLink to="/auth" onClick={context.logout}>Logout</NavLink>
                        </li>}
                    </ul>
                    </nav>
                        </header>
                }}
            
            </AuthContext.Consumer>
        );
    }
}

export default MainNav;