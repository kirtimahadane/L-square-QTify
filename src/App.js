import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { StyledEngineProvider } from '@mui/material';
//import Hero from './components/Hero/Hero';
//import Card from "./components/Card/Card";
import { Outlet } from 'react-router-dom';
import {  fetchNewAlbums, fetchSongs, fetchTopAlbums } from './api/api';



function App() {
  const [data, setData]= useState({});
  const generateData=(key, source)=>{
    source().then((data)=>{
      setData(prevState=>{
        return {...prevState, [key]:data}
      })
    })
  }
useEffect(()=>{
generateData("topAlbums", fetchTopAlbums);
generateData("newAlbums", fetchNewAlbums);
generateData("songs", fetchSongs);
},[]);
const {topAlbums=[], newAlbums=[], songs=[]}=data;

  return (
    <>
    <StyledEngineProvider injectFirst>
    <Navbar/>
      <Outlet context={{data:{topAlbums, newAlbums, songs}}}/>
    
    </StyledEngineProvider>
     
    </>
    

  );
}

export default App;
