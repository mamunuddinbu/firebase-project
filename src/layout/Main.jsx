/* eslint-disable no-unused-vars */
import React from 'react';
import { Outlet } from 'react-router-dom';
import Home from '../components/home/Home';
import Header from '../components/header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            
            <Outlet></Outlet>
            
        </div>
    );
};

export default Main;