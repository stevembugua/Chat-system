import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import SignUp from './components/SignUp';
import PrivateRoute from './PrivateRoutes';
import Profile from './components/Profile';
import Home from './components/Home';


function App() {
  return (
    <>

    <Routes>
      <Route  element={<PrivateRoute />}>
        <Route path='/' element={<Login/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/Profile' element={<Profile/>}/>
      </Route>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/SignUp' element={<SignUp/>}/>
    </Routes>
    
    

    </>
  );
}

export default App;
