import './login.css';
import fbTextLogo from './fbTextLogo.svg'
import { useState } from 'react';
import axios from 'axios';




const Login = () => {

    const [user,setuser]=useState('')
    const[pass,setpass]=useState('')
    
   async  function handlelogin(e){
        e.preventDefault()
    
        await axios.post('http://localhost:4000/postuser',{
            email:user,
            password:pass
          }).then(()=>{console.log('Done!')}).catch((err)=>{console.log(err);})
    }


return (
<div className="login-facebook">
<div className="loginLogo">
 <img src={fbTextLogo} alt="facebook" />
</div>
<form className='myform'>
<label>Log in to Facebook</label>
<div className='INPUT'>
<input type='text' placeholder='Username or Email'className='inputmyform' value={user} onChange={(e)=>{setuser(e.target.value)}}></input>
<input type='password' placeholder='Password' className='inputmyform' value={pass}  onChange={(e)=>{setpass(e.target.value)}}></input>
</div>
<button type="submit" onClick={handlelogin}>Sign In</button>
</form>
</div>
    )
}

export default Login;
