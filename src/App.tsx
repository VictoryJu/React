import { reverse } from 'dns/promises';
import React,{useState,useContext, createContext} from 'react';
import './App.css';
import Footer from './module/common/layout/footer';
import Header from './module/common/layout/header';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import ShowMainPageComponent from './module/page/shop-page/show-main-page/show-main-page-component';

function App() {

  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<ShowMainPageComponent/>}></Route>
          <Route></Route>
          <Route></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
