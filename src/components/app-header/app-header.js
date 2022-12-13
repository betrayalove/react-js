import React from 'react';
import './app-header.css'
import { NavLink } from 'react-router-dom';
import '../../index.css'

const AppHeader = () => {
    
    return (
        <body>
        <header className='main-header'>
            <nav className="nav-menu">
                <ul>
                    <li><NavLink activeClassName="active" to="/" className="nav-item nav-image">FTD</NavLink></li>
                    <li><NavLink to="/buy" className="nav-item nav-right">BUY</NavLink></li>
                    <li><NavLink to="/sold" className="nav-item">SOLD</NavLink></li>
                    <li><NavLink to="/favorite" className="nav-item">FAVORITE</NavLink></li>
                    {/*<li><NavLink to="/collab" className="nav-item">COLLAB</NavLink></li>*/}
                    <li><NavLink to="/contacts" className="nav-item">CONTACTS</NavLink></li>
                    <li><NavLink to="/test" className="nav-item">TEST</NavLink></li>
                </ul>
            </nav>
        </header>
        </body>
    );
}


export default AppHeader;