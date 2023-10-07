import React, { useState } from 'react'
import AddAvatar from '../assets/images/addAvatar.png'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth, db, storage } from '../firebase';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";

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

            const storageRef = ref(storage, displayName);

            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on(
                (error) =>
                {
                    setErr(true)
                },
                () =>
                {
                    getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) =>
                    {
                        await updateProfile(res.user, {
                            displayName,
                            photoURL: downloadURL,
                        });
                        await setDoc(doc(db, "users", res.user.uid), {
                            uid: res.user.uid,
                            displayName,
                            email,
                            photoURL: downloadURL,
                        });

                        await setDoc(doc(db, "userChat", res.user.uid))
                    });
                }
            );


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