import React from 'react';
import Navber from '../Navbar/Navber';
import Layout from './Layout';
import Footer from '../Footerer/Footer';
import About from '../About/About';
import { Outlet } from 'react-router';

const lay = () => {
    return (
        <div>
            <Navber/>
            <Outlet/>
            <Footer/>
        </div>
    );
}

export default lay;
