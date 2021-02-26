import React from 'react'
import logo from '../../images/logo.png'
import './Header.css'

function Header() {
    return (
        <div className='header-section'>
            <img src={logo} alt='Logo'/>  
            <nav>
                <a href="/shop">Shope</a>
                <a href="/reviwe">Our Reviwe</a>
                <a href="/manage">Manage Inventory</a>
            </nav>
        </div>
    )
}

export default Header