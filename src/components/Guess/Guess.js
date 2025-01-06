import React from 'react';
import { range } from '../../utils';

function Guess({ text }) {
  const numOfLetters = 5;

  return (
    <p className="guess">
      {range(numOfLetters).map((num, index) => (
        <span key={index} className="cell">
          {text && text[index]}
        </span>
      ))}
    </p>
  );
}

export default Guess;
