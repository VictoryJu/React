import React from 'react';
import './header.css';
function Header(){
  return (
    <>
      <div className='header-container'>

        <div>
          <div className='title'>BRANDI</div>
        </div>

        <div>
          <div className='header-search'>
            <input></input>
          </div>
        </div>

      </div>

      <div className='category-container'>
        <div className='item'>홈</div>
        <div className='item'>카테고리</div>
        <div className='item'>하루배송</div>
        <div className='item'>혜택존</div>
        <div className='item'>베스트</div>
        <div className='item'>신상</div>
      </div>
    </>
  )
}


export default Header;