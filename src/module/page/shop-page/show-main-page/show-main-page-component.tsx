import { reverse } from 'dns/promises';
import React,{useState,useContext, createContext} from 'react';
import Footer from '../../../common/layout/footer';
import Header from '../../../common/layout/header';
import MainComponent from '../../../common/shop/main/main-component';

function ShowMainPageComponent() {

  return (
    <>
      <MainComponent/>
    </>
  );
}

export default ShowMainPageComponent;
