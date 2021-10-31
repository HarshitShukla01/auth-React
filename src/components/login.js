import React from 'react'
import { loginGoogle } from './auth'
const login = () => {
    const clickbtn = () => {

    }

    return (
        <div>
            <h1>Login Page</h1>
            <button onClick={clickbtn}>submit</button>
            <button onClick={loginGoogle}>Login with Google</button>
        </div>
    )
}

export default login
