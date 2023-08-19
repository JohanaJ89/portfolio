import React from 'react';
import BannerInfo from '../components/BannerInfo';
import About from '../components/About';
import Caroussel from '../components/Caroussel';


const Home = () => {
    return (
        <div>
            <BannerInfo/>
            <About/>
            <Caroussel/>
        </div>
    );
};

export default Home;