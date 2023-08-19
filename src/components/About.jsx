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
    Je m'appelle Johana, une mère dévouée de deux enfants, et mon parcours a débuté avec un diplôme en infographie,<br/>
    qui m'a ouvert les portes du développement web via HTML et CSS. Cette première incursion m'a captivée et m'a conduit<br/>
    à poursuivre ma formation en développement web avec OpenClassrooms. Au cours de cette formation, j'ai approfondi mes compétences
    dans divers domaines, notamment :<p>
    Intégration de contenu selon des maquettes avec HTML et CSS,
    création d'interfaces réactives et adaptables,
    suivi de projet grâce à des outils de gestion de projet,
    rédaction de spécifications techniques à partir de besoins fonctionnels,
    découpage de fonctionnalités en tâches pour le développement,
    présentation de solutions techniques,</p>
    <p>mise en place d'une veille technologique,
    versionnage de projets avec Git et Github,
    installation d'environnements de développement front-end,
    optimisation des performances de sites web,
    débogage de sites web avec Chrome DevTools,
    rédaction de cahiers de recette pour tester des sites,</p>
    <p>récupération de données utilisateurs en JavaScript via des formulaires,
    manipulation d'éléments du DOM et gestion d'événements utilisateurs avec JavaScript,
    configuration de la navigation entre les pages d'une application avec React Router,
    initialisation d'applications avec Create React App,
    développement d'éléments d'interface web via des composants React,
    implémentation sécurisée d'un modèle logique de données,
    mise en œuvre sécurisée des opérations CRUD,
    stockage sécurisé de données,</p>
    déploiement en ligne de sites statiques.
    Mon portfolio reflète mon parcours, 
    en fusionnant habilement design et technologie pour créer des expériences web uniques
    et esthétiquement enrichissantes.
     Mon objectif est de marier créativité et programmation pour offrir des solutions web
    captivantes et fonctionnelles.             
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