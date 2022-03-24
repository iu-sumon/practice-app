import React from 'react';
import'./Header.css'
import logo from '../../images/logo-small.png'
const Header = () => {
    return (
         <header>
             <img src={logo} alt="" />
             <nav>
                 <a href="/">Home</a>
                 <a href="/">Shop</a>
                 <a href="/">Contact Us</a>
                 <a href="/">About Us</a>
             </nav>
         </header>
    );
};

export default Header;