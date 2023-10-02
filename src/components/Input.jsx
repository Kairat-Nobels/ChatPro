import React from 'react'
import Img from '../assets/images/img.png'
import Attach from '../assets/images/attach.png'
function Input()
{
    return (
        <div className='input'>
            <input type="text" placeholder='Type somithing...' />
            <div className="send">
                <img src={Attach} alt="img" />
                <input style={{ display: 'none' }} type="file" id="fileChat" />
                <label htmlFor="fileChat">
                    <img src={Img} alt="img" />
                </label>
                <button>Send</button>
            </div>
        </div>
    )
}

export default Input