import React from 'react'
import Cam from '../assets/images/cam.png'
import Add from '../assets/images/add.png'
import More from '../assets/images/more.png'
import Messages from './Messages'
import Input from './Input'

function Chat()
{
    return (
        <div className='chat'>
            <div className="cahtInfo">
                <span>Emma</span>
                <div className="chatIcons">
                    <img src={Cam} alt="img" />
                    <img src={Add} alt="img" />
                    <img src={More} alt="img" />
                </div>
            </div>
            <Messages />
            <Input />
        </div>
    )
}

export default Chat