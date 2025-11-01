import React from 'react';
import { Outlet } from 'react-router';
import Navbear from '../componentes/Navbear/Navbear';

const Roots = () => {
    return (
        <div>
            <Navbear></Navbear>
            <Outlet></Outlet>
        </div>
    );
};

export default Roots;