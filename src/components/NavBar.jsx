import React from 'react';
import Menu from '../assets/menu.png';
import Logo from '../assets/logodevjohana.png';


const NavBar = () => {
    return (
        <div className='navbar'>
            <img className='logoH' src={Logo} alt="logo dev" />
            <img className='menu' src={Menu} alt="menu" />
            
        </div>
    );
};

export default NavBar;