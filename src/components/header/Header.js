import React from 'react';
import './Header.css';
import logo from '../../Logo.svg';

const Header = () => {
    return ( 
        <nav className = 'nav-container'>
            <img src={logo} alt=''></img>
            <div className = 'menu-item'>
                <a href = 'aa' > Order </a>
                <a href = 'a' > Order Review </a>
                <a href = 'a' > Manage Inventory </a>
                <a href = 'a' > Login </a>
            </div> 
        </nav>
    );
};

export default Header;