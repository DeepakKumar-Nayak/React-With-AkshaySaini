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
                    <li className='desktop-only'>About us</li>
                    <li className='desktop-only'>Contact Us</li>
                    <li className='desktop-only'>Cart</li>
                </ul>
            </div>
        </div>
    )
}

export default Header
