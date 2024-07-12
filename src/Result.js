import React from 'react'

const Result = ({num,secretNum}) => {

    
    let result;
    if(num){
        if(num<secretNum){
            result='Lower'
        }
        else if(num>secretNum){
            result='Higher'
        }
        else if(num===secretNum){
            result='Congrats your guess is correct'
        }
        else{
            result='enter valid number'
        }
    }

    

    
  return (
    <>
      <div>
        <p>Your guess is: {result}</p>
        <button >Submit</button>
      </div>
     
    </>
  )
}

export default Result
