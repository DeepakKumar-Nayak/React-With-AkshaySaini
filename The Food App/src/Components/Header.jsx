import React, { use, useState } from 'react'
import { Link } from 'react-router-dom'


function Header() {

    const [userLogin, setUserLogin] = useState('Login')

    // function userLogout(){
    //     if(userLogin === 'Login'){
    //         setUserLogin('Logout')
    //     }else{
    //         setUserLogin('Login')
    //     }
    // }

    return (
        <div className='navbar'>
            <div className="nav-left">
                <h2>CraveIt</h2>
            </div>
            <div className="nav-right">
                <ul className='list-items'>
                    
                    <li><
                        Link to="/">Home</Link>
                    </li>

                    <li className='desktop-only'>
                        <Link to="/about">About</Link>
                    </li>
                    
                    <li className='desktop-only'>
                        <Link to="/contact">Contact</Link>
                    </li>

                    <li className='desktop-only'>Cart</li>
                    <li onClick={()=>{
                        userLogin === "Login" ? setUserLogin('Logout') : setUserLogin('Login')
                    }}>{userLogin}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header
