 import React from 'react';
import { Outlet } from 'react-router';
import Navbear from '../componentes/Navbear/Navbear';
import Footer from '../Footer/Footer';

const Roots = () => {
    return (
        <div className="flex flex-col min-h-screen">
       
            <Navbear />

            
            <div className="flex-1">
                <Outlet />
            </div>

          
            <Footer />
        </div>
    );
};

export default Roots;
