import { useState } from "react"


 export default function Login(props){
const [username, setUsername] = useState('')
const [password, setPassword] = useState('')

const handleSubmit =(e)=>{
e.preventDefault()
console.log(username)

}

    return (
<div className ="auth-form-container"> 
    
    <h2>Login</h2>

    <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input value={username}onChange ={(e)=>setUsername(e.target.value)}type="text" name ="username" placeholder="username" id="username"/>
        <label htmlFor="password">Password</label>
        <input value={password} onChange ={(e)=>setPassword(e.target.value)} type="password" name ="password" placeholder="********" id="password"/>
        <button type="submit">Log In</button>

    </form>
    <button className ="link-btn" onClick={()=>props.onFormSwitch('register')}> Dont have an account? Register Here.</button>
</div>

    )





    
}