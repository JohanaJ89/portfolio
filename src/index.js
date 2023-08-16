import React from 'react';
import ReactDOM from 'react-dom/client';
import{BrowserRouter,Routes,Route} from "react-router-dom";
import "./styles/main.scss";
import Home from "./pages/Home";
import NavBar from './components/NavBar';
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <NavBar/>
    <Routes>
        <Route path="/" element={<Home/>} />
       
    </Routes>
    <Footer/>
    </BrowserRouter>
  </React.StrictMode>
);
