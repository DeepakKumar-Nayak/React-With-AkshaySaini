import React from 'react'

function Header() {
    return (
        <div className='navbar'>
            <div className="nav-left">
                <h2>CraveIt</h2>
            </div>
            <div className="nav-right">
                <ul className='list-items'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

export default Header
