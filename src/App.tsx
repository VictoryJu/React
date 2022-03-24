import { reverse } from 'dns/promises';
import React,{useState,useContext, createContext} from 'react';
import './App.css';
import Level1 from './module/common/level1';


export const AppContext = createContext({
  status:[
    {name:'pay',level:10},
    {name:'stay',level:20},
  ]
});

const gamePlayer = {
  status:[
    {name:'pay',level:10},
    {name:'stay',level:20},
  ]
};

function App() {
  const [player, setPlayer] = useState(gamePlayer);
  let [title,setTitle] = useState(['리스트3','리스트2','리스트1'])
  let [date,setDate] = useState('날짜')
  let [count,setCount] = useState(0);
  let [index, setIndex] = useState(0);
  let [insertData,setInsertData] = useState('');

  function editTitle(){
    let newArray = [...title];
    newArray.sort();
    setTitle(newArray);
  }

  let [isShow,setIsShow] = useState(false);


  return (
    <AppContext.Provider value={player}>
      <Level1/>
    </AppContext.Provider>
  );
}

function Modal(props:any){
  
  return (
    <div className='modal'>
      <div>{props.title[props.index]}</div>
      <div>날짜</div>
      <div>상세내용</div>
    </div>
  )
}

export default App;
