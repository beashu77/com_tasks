import React from 'react'
import { Route,Routes } from "react-router-dom";
import Home from './Home';
import Restaurent from './Restaurent';

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path="/restaurent/:id" element={<Restaurent/>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes

