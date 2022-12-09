import React from 'react';
import { Outlet } from 'react-router-dom';
import GetData from './Getdata/GetData';
import Navbar from './Shared/Navbar';

const Home = () => {

    return (
        <div>
            <Navbar></Navbar>
          <Outlet></Outlet>
        
           
        </div>
    );
};

export default Home;