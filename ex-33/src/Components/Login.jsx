import React from 'react'
import { useState } from 'react'

function Login() {
    const [input, setInput] = useState({
        username : '',
        password : '',
        remember  : false
    })

    const handleInput = (e) => {
        const {name, value, type, checked } = e.target
        setInput((input) => {
            return {
                ...input,
             [name]: type === 'checkbox' ? checked : value
            }
        })
    }

    const handleSubmit = () => {
        console.log(input);
    }


  return (
    <div >
        <label htmlFor="text">USERNAME</label>
        <input type="text" name='username' value={input.username} onChange={handleInput}/>

        <label htmlFor="text">PASSWORD</label>
        <input type="password" name='password' value={input.password} onChange={handleInput}/>

        <label htmlFor="text">ACCEPT</label>
        <input type="checkbox"  checked={input.remember} onChange={handleInput}/>

        <div>
            <button onClick={handleSubmit}>SIGN IN</button>
        </div>

        <div>
            <ul>
                
            </ul>
        </div>
    </div>
  )
}

export default Login