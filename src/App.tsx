import { reverse } from 'dns/promises';
import React,{useState} from 'react';
import './App.css';

function App() {

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
    <div className="App">
      <div className="nav-bar">리액트 튜토리얼</div>
      <div className="main-container">
        
        {
          title.map((item,i)=>{
            return(
              <div className='main-wrap' key={i} onClick={()=>setIndex(i)}>
                <div className="title">{item} <span onClick={()=>setCount(count)}>👍</span> {count} </div>
                <div>{date}</div>
              </div>
            )
          })
        }
      </div>

      <div className='input-line'>
        <input onChange={(e)=>{setInsertData(e.target.value)}}></input>
        {/* 방법 1 */}
        <button onClick={()=>{setTitle([insertData, ...title])}} >글 발행</button>
        {/* 방법 2 */}
        <button onClick={()=>{
          let titleArr = [...title];
          titleArr.push(insertData);
          setTitle(titleArr);
          }} >글 발행</button>
      </div>

      <button className='modal-btn' onClick={()=>setIsShow(isShow?false:true)}>모달 출현 버튼</button>
      
      {
        isShow ? <Modal title={title} index={index}></Modal> : null
      }

    </div>
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
