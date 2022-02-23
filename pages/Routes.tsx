import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '.';
import RickAndMorty from './rickandmorty';


const  Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='./rickandmorty' element={<RickAndMorty />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;