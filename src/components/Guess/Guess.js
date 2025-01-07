import React from 'react';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Guess({ text, answer }) {
  const numOfLetters = 5;

  let guessCheckData = [];
  if (text && answer) {
    guessCheckData = checkGuess(text, answer);
  }

  function statusForIndex(index) {
    return guessCheckData[index]['status'];
  }

  function hasBeenChecked() {
    return !!guessCheckData.length;
  }

  return (
    <p className="guess">
      {range(numOfLetters).map((num, index) => (
        <span
          key={num}
          className={`cell ${hasBeenChecked() ? statusForIndex(index) : ''}`}
        >
          {text && text[num]}
        </span>
      ))}
    </p>
  );
}

export default Guess;
