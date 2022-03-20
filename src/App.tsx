import React,{useState} from 'react';
import './App.css';

function App() {

  let [title,setTitle] = useState(['리스트1','리스트2','리스트3'])
  let [date,setDate] = useState('날짜')
  let [count,setCount] = useState(0);

  function editTitle(){
    let newArray = [...title];
    newArray[0] = "여자코트 추천";
    setTitle(newArray);
  }


  return (
    <div className="App">
      <div className="nav-bar">리액트 튜토리얼</div>
      <div className="main-container">
        <div className='main-wrap'>
          <button onClick={editTitle}>제목바꿈 버튼</button>
          <div className="title">{title[0]} <span onClick={()=>setCount(count+=1)}>👍</span> {count} </div>
          <div>{date}</div>
        </div>
        <div className='main-wrap'>
          <div className="title">{title[1]}</div>
          <div>{date}</div>
        </div>
        <div className='main-wrap'>
          <div className="title">{title[2]}</div>
          <div>{date}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
