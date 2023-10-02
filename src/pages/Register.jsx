import React, { useState } from 'react'
import AddAvatar from '../assets/images/addAvatar.png'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

function Register()
{
    const [err, setErr] = useState(false)
    const handleSubmit = async (event) =>
    {
        event.preventDefault();
        const displayName = event.target[0].value
        const email = event.target[1].value
        const password = event.target[2].value
        const file = event.target[3].files[0]
        try {
            const res = await createUserWithEmailAndPassword(auth, email, password);

        } catch (error) {
            setErr(true)
        }

    }

    return (
        <div className='formContainer'>
            <div className='formWrapper'>
                <span className="logo">Kaira Chat</span>
                <span className="title">Register</span>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder='display name' />
                    <input type="email" placeholder='email' />
                    <input type="password" placeholder='password' />
                    <input style={{ display: 'none' }} type="file" placeholder='file' id='file' />
                    <label htmlFor="file">
                        <img src={AddAvatar} alt="img" />
                        <span>Add an avatar</span>
                    </label>
                    <button>Sing up</button>
                    {err && <span>Something went wrong</span>}
                </form>
                <p>You do have an account? Login</p>
            </div>
        </div>
    )
}

export default Register