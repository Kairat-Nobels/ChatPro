import React from 'react'
import ava from '../assets/images/profile.jpg'
function Navbar()
{
    return (
        <div className='navbar'>
            <span className="logo">Kaira Chat</span>
            <div className="user">
                <img src={ava} alt="img" />
                <span>Kaira</span>
                <button>logout</button>
            </div>
        </div>
    )
}

export default Navbar