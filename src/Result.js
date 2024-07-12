import React from 'react';

function Result({ secretNum, num }) {
  let result = '';

  if (num !== '') {
    const guessedNum = parseInt(num, 10);

    if (isNaN(guessedNum)) {
      result = 'Enter a valid number';
    } else if (guessedNum > secretNum) {
      result = 'Lower';
    } else if (guessedNum < secretNum) {
      result = 'Higher';
    } else if (guessedNum === secretNum) {
      result = 'Congrats, your guess is correct';
    }
  }

  return <h3>You Guessed: {result}</h3>;
}

export default Result;
