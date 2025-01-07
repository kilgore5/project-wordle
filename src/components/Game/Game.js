import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import { PLAYING, WIN, LOSE, NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  // 'playing' / 'win' / 'lose'
  const [gameState, setGameState] = React.useState(PLAYING);

  function checkWinOrLose(guessText) {
    if (guessText === answer) {
      setGameState(WIN);
    } else if (guesses.length >= NUM_OF_GUESSES_ALLOWED - 1) {
      setGameState(LOSE);
    }
  }

  function handleGuessSubmission(guessText) {
    setGuesses([...guesses, guessText]);
  }

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput
        gameState={gameState}
        answer={answer}
        handleGuessSubmission={handleGuessSubmission}
        checkWinOrLose={checkWinOrLose}
      />
    </>
  );
}

export default Game;
