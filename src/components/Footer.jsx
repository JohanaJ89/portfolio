import LogoF from '../assets/logodevjohana.png';
import Gicons from '../assets/gitbl.png';
import linkedin from '../assets/link.png';

import React from 'react';

const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };
const Footer = () => {
    return (
        <div className='footer'>
            <img className='logoF' src={LogoF} alt='logo footer'></img>
            <div className='social'>
                <img className='git' role='link' onClick={()=> openInNewTab ("https://github.com/JohanaJ89")}  src={Gicons} alt="git hub lien" />
                <img className='linked' role = "link" onClick={()=> openInNewTab ("https://www.linkedin.com/in/johana-jupin-7020bb1b1/")} src={linkedin} alt="lien linkedin" />

            </div>
        </div>
    );
};

export default Footer;