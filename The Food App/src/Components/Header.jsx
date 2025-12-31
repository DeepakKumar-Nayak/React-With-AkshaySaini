import React from 'react'

function Header() {
    return (
        <div className='navbar'>
            <div className="nav-left">
                <h2>CraveIt</h2>
            </div>
            <div className="nav-right">
                <li>
                    <div><i className="ri-search-line"></i></div>
                    <div><p>CraveIt Corporate</p></div>
                </li>
                <li>
                    <div><i className="ri-refund-2-line"></i></div>
                    <div><p>Search</p></div>
                </li>
                <li>
                    <div><i className="ri-refund-2-line"></i></div>
                    <div><p>Offers</p></div>
                </li>
                <li>
                    <div><i className="ri-alipay-line"></i></div>
                    <div><p>Help</p></div>
                </li>
                <li>
                    <div><i className="ri-shopping-bag-line"></i></div>
                    <div><p>Cart</p></div>
                </li>
            </div>
        </div>
    )
}

export default Header
