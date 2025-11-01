import React from 'react';
import { Outlet } from 'react-router';
import Navbear from '../componentes/Navbear/Navbear';
import Footer from '../Footer/Footer';

const Roots = () => {
    return (
        <div>
            <Navbear></Navbear>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Roots;