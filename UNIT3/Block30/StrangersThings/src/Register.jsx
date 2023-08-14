import { useState } from "react"


export default  function Register(props){

const [username, setUsername] = useState('')
const [password, setPassword] = useState('')
const [email, setEmail]        = useState('')

const handleSubmit =(e)=>{
    e.preventDefault()
    console.log(username)
    
}

    return(


<div className ="auth-form-container">

    <h2>Register</h2>
<form className="register-form"onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input value={username}onChange ={(e)=>setUsername(e.target.value)}type="text" name ="username" placeholder="username" id="username"/>
        <label htmlFor="password">Password</label>
        <input value={password} onChange ={(e)=>setPassword(e.target.value)} type="password" name ="password" placeholder="********" id="password"/>
        <button type="submit">Log In</button>
        <label htmlFor="Email">Email</label>
        <input value={email}onChange ={(e)=>setEmail(e.target.value)}type="email" name ="email" placeholder="email" id="email"/>

    </form>
    <button className ="link-btn" onClick={() =>props.onFormSwitch('login')}> Already have an account? Sign In.</button>
</div>



    )

}