
import React,{useState,useContext} from 'react';
import { AppContext } from '../../App';
import './App.css';

function Level2() {

  const player = useContext(AppContext);

  return (
    <div className="App">
      <div className="nav-bar">리액트 튜토리얼</div>
      <div className="main-container">
        {
          player.status.map((item,index)=>{
            return(
              <div key={index}>
                <span>{item.name}</span>
                <span>{item.level}</span> 
              </div>
            )
          })
        }
      </div>
    </div>
  );
}


export default Level2;
