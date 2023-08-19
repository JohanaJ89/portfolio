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
        <p className="legend">HTLM/CSS<br/><p>J'ai réalisé l'intégration de maquettes graphiques en utilisant HTML/CSS 
        pour créer des pages web interactives conformes aux spécifications.</p>
        <p>J'ai réalisé la création d'un carousel de photos en utilisant HTML, 
        CSS  avec des défis spécifiques à relever.</p>
        <p>J'ai également veillé à ce que le carousel soit réactif et fonctionne correctement sur différentes tailles d'écran.
         une base de code à compléter, et l'utilisation de Git/GitHub
        versions mobile/tablette/desktop.</p>
        <a href='https://github.com/JohanaJ89/booki'target="_blank" rel="noopener noreferrer">https://github.com/JohanaJ89/booki</a>
        </p>
      </div>
      <div>
        <img src={sophie} alt='sophie'/>
        <p className="legend">Javascript<br/><p>
        J'ai travaillé sur l'ajout d'une fenêtre modale pour permettre l'ajout de projets via un formulaire interactif.
        J'ai surmonté des défis liés à l'affichage,</p> 
       <p> à la fermeture et à la gestion des interactions à l'intérieur de la modale en utilisant des écouteurs d'événements JavaScript
         et en optimisant la structure HTML et les classes CSS.
         Mes compétences en HTML, </p>
        CSS et JavaScript ont été mobilisées pour ce projet.
        <a href='https://github.com/JohanaJ89/sophiebluel'target="_blank" rel="noopener noreferrer">https://github.com/JohanaJ89/sophiebluel</a>
        </p>
      </div>
      <div>
        <img src={nina} alt='nina'/>
        <p className="legend">Wave,Lighthouse<br/><p>
        Dans le projet de débogage et d'optimisation d'un site de photographe, j'ai suivi un guide en plusieurs étapes. 
        J'ai débuté en analysant le code avec Lighthouse et GTMetrix, puis débogué l'application avec les Chrome DevTools. 
        Ensuite, j'ai identifié et listé les améliorations possibles, </p><p>
        optimisé les performances en se focalisant sur les priorités de Lighthouse, 
        amélioré le SEO technique et ajouté le référencement local ainsi que les balises meta pour les réseaux sociaux. 
        J'ai assuré l'accessibilité du site avec WAVE Evaluation Tool et généré des rapports complets pour le client.</p>
        <a href='https://github.com/JohanaJ89/debugphotos'target="_blank" rel="noopener noreferrer">https://github.com/JohanaJ89/debugphotos</a>
        </p>
      </div>
      <div>
      <img src={kasa} alt='kasa'/>
        <p className="legend">React,SASS<br/><p>
        Le projet "Créez une application web de location immobilière avec React" est structuré en 10 étapes. 
        J'ai démarré en initialisant le projet avec Create React App, puis ajouté React Router pour gérer les routes. 
        Ensuite, j'ai créé les pages, géré le routage, et utilisé Sass pour la mise en page.</p><p>
        J'ai développé la page d'accueil avec banner et card, et la page À propos avec Collapse. 
        J'ai aussi fait une page d'erreur,</p><p>
         un carrousel pour les propriétés, et géré les erreurs d'identifiants. 
         Enfin, j'ai vérifié et finalisé le projet.</p>
         <a href='https://github.com/JohanaJ89/Kasa'target="_blank" rel="noopener noreferrer">https://github.com/JohanaJ89/Kasa</a>
        </p>
      </div>
      <div>
      <img src={grimpire} alt='grimoire'/>
        <p className="legend">Backend<br/><p>
        J'ai suivi le guide pour créer le back-end d'un site de notation de livres avec Node.js,
        Express et MongoDB. </p><p>
        J'ai réalisé les étapes recommandées, comme la mise en place du serveur, 
        l'authentification utilisateur et la gestion des fichiers.</p><p>
        J'ai aussi implémenté la fonctionnalité de notation des livres, 
        y compris le calcul de la moyenne. Malgré quelques ajustements nécessaires 
        et défis rencontrés par exemples fautes de frappe, 
        j'ai réussi à compléter le développement du back-end.</p> 
        <a href='https://github.com/JohanaJ89/monvieuxgrimoire'target="_blank" rel="noopener noreferrer">https://github.com/JohanaJ89/monvieuxgrimoire</a>
        </p>
      </div>
    </Carousel>
  );
};

export default Caroussel;