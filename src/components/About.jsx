import React from 'react';
import portrait from '../assets/moi.jpg';
import rectangle from '../assets/Rectangle.png';
import Pdf from '../assets/cvdevjohanaphoto.pdf';
import Cv from '../assets/cvdevjohananb.pdf';

const About = () => {
    

    return (
        <div className='containerA'>
           
            <img className='rectangleJ' src={rectangle} alt='rectangle jaune'>
            </img>
                <img className='moi' src={portrait} alt='moi'>
                </img>
                <h2 className='propos'>
                    à propos
                </h2>
                <div className='saut'>
                <p className='résumé'>
                Je suis Johana, une mère dévouée de deux enfants, <br/>
                ayant débuté ma carrière avec un diplôme en infographie <br/>qui m'a introduite au développement web<br/> à travers HTML et CSS.
                 <br/>Animée par cette découverte, <br/>j'ai entrepris une formation en développement web, <br/>
                 affinant mes compétences pour <br/>marier créativité et programmation. <br/>
                 Mon portfolio illustre mon parcours, <br />
                fusionnant habilement design et technologie pour créer des <br/>expériences web uniques et esthétiquement enrichissantes.
                </p>
                <div className='buttons'>
                    < a href={Pdf}  download='cvdevjohanaphoto.pdf'>
                <button className='couleur' >
                    CV couleurs
                </button></a>
                <a href={Cv} download='cvdevjohananb.pdf'>
                <button className='nb' >
                    CV noir et blanc
                </button></a>
                </div>
                </div>
                

            
            
        </div>
    );
};

export default About;