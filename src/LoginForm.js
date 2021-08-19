import React, {useState} from "react";

const LoginForm= () =>{
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("")
    const handleLogin = (e) =>{
        setUsername(e.target.value)
    }
    const handlePassword = (e) =>{
        setPassword(e.target.value)
    }
    const login = (e) =>{
        e.preventDefault()
        if (username === 'admin' && password === 'admin'){
            setMessage('Welcome!')
        }else {
            setMessage('Error authorize!')
        }
        setUsername('')
        setPassword('')
    }
    return (
        <form>
            <label htmlFor='name'>Login:</label>
            <input type='text' id='name' value={username} onChange={handleLogin} />

            <label htmlFor='password'>Password:</label>
            <input type='password' id='password' value={password} onChange={handlePassword}/>

            <input type='submit' value='Login' onClick={login}/>
            <div>{message}</div>
        </form>
    )
}
export default LoginForm;