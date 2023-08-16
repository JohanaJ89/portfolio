import {useState} from 'react';
import Modale from '../components/Modale'



function BannerInfo(){
const [open, setOpen] = useState(false);
  function handleClose(){
    setOpen (false);
  }
  function handleOpen(){
    setOpen(true);
  }

    return (
        <div className='containerB'>

            <h1 className='hello'>
                Bienvenue sur mon site, je suis
            </h1>
            <h2 className='identity'>
                Johana Jupin
            </h2>
            <h3 className='job'>
                Développeuse web
            </h3>
            <div className='boutons'>
                <a href='#About'>
            <button className='about'>
                à propos
            </button>
                </a>
            <button className='contact' onClick={handleOpen}>
                me contacter
            </button>
            <Modale open = {open} close = {handleClose}/>
            </div>

            
        </div>
    );
}

export default BannerInfo;