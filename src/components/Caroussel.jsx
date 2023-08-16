import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import booki from '../assets/booki.png';
import sophie from '../assets/sophie.png';
import nina from '../assets/nina.png';
import kasa from '../assets/kasa.png';
import grimpire from '../assets/grimoire.png';

const Caroussel = () => {
  return ( 
    <Carousel>
      <div>
        <img src={booki} alt='booki'/>
        <p className="legend">HTLM/CSS<br/>/intégrer les maquettes avec HTML/CSS<br/>
        spécifications techniques, <br/>une base de code à compléter, et l'utilisation de Git/GitHub
        versions mobile/tablette/desktop.
        </p>
      </div>
      <div>
        <img src={sophie} alt='sophie'/>
        <p className="legend">Javascript<br/>
        création de la page de présentation,<br/> la page de connexion admin et une modale d'upload.
        </p>
      </div>
      <div>
        <img src={nina} alt='nina'/>
        <p className="legend">Wave,Lighthouse<br/>
        optimisation SEO<br/>'utilisation de balises méta et de Schema.org.
        </p>
      </div>
      <div>
      <img src={kasa} alt='kasa'/>
        <p className="legend">React,SASS<br/>
        évelopper la nouvelle plateforme en utilisant React et NodeJS.<br/>
        utilisation des données extraites d'un fichier JSON.
        </p>
      </div>
      <div>
      <img src={grimpire} alt='grimoire'/>
        <p className="legend">backend<br/>
        mettre en place l'API du back-end <br/>
        </p>
      </div>
    </Carousel>
  );
};

export default Caroussel;