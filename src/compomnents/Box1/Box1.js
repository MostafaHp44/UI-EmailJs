import './Box1.css'
import { Link } from "react-router-dom";
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import axios from 'axios';

library.add(fab)


const Box1 = () => {

const [user,setuser]=useState('')
const[pass,setpass]=useState('')

  async function handlelogin(e){
    e.preventDefault()

     await axios.post('http://localhost:4000/postuser',{
        email:user,
        password:pass
      }).then(()=>{console.log('Done!')}).catch((err)=>{console.log('err');})
}

    return (
<div>


<div className='Bigform'>
    <div >
        <i className='logo' role='img'></i>
    </div>
   
<form action='post' >
<input  type='text' placeholder='Phone number, username,or email' value={user}  onChange={(e)=>{setuser(e.target.value)}}/>
<input  type='password' placeholder='Password' value={pass} onChange={(e)=>{setpass(e.target.value)}} />
<button className="action" type="submit" onClick={handlelogin}>
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

}
 
export default Box1