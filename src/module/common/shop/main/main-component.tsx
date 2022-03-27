import { reverse } from 'dns/promises';
import React,{useState,useContext, createContext} from 'react';

import BannerComponent from './banner-component';
import ProductListComponent from './product-list-component';

function MainComponent() {

  return (
    <>
      <BannerComponent/>
      <ProductListComponent/>
    </>
  );
}

export default MainComponent;
