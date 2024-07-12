
import { useState } from 'react';
import './App.css';
import Result from './Result';

const secretNum=Math.floor(Math.random()*10)+1

function App() {

  const [num,setNum]=useState()

  function handleChange(e){
    setNum(e.target.value)
  }
  return (
    <>
    <div className='App'>
      <div className='container'>
            <div className='head'>
              <label>Guess the number between 1 to 10 (answer:{secretNum})
<br/><br/>
                  <input style={{padding:'10px', width:"400px", textAlign:'center'}}type='text' name='term' 
                  placeholder='enter your guessed number here!!' onChange={handleChange}/>

              </label>
            </div>
            <Result num={num} secretNum={secretNum}/>
      </div>
    </div>

    </>
  );
}

export default App;
