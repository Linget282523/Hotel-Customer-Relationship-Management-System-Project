import './App.css';
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { fetchAccounts, fetchRooms } from "./actions";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import RoomsTable from './components/RoomsTable';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/register' element={<RegisterPage/>}/> 
        <Route path='/table' element={<TableRooms/>}/>
        <Route path='/rooms' element={<Room/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
