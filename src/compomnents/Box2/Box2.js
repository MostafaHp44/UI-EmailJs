import './Box2.css'
import screen1 from './screen/screenshot1.png'
import screen2 from './screen/screenshot2.png'
import screen3 from './screen/screenshot3.png'
import home from './screen/phone.png'
import { useEffect,useState } from 'react';

const Box2 = () => {
    const screens=[screen1,screen2,screen3]
    const [currentImage, setCurrentImage] = useState(null);
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImage(screens[Math.floor(Math.random() * screens.length)]);
        }, 2000)
        
        return () => clearInterval(intervalId);
    }, [])
    return (
    <div>

<div className='Phone'>
<div className='home'>
    <img  className='home' src={home}></img>
</div>
<div className="phone1">
<img alt="" className="screen1" src={currentImage}></img>

</div>

</div>


    </div> 
     );
}
 
export default Box2;