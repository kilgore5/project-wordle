import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

import WonBanner from '../WonBanner';
import LostBanner from '../LostBanner';
import ResetButton from '../ResetButton';

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  // 'running' / 'won' / 'lost'
  const [gameState, setGameState] = React.useState('running');

  // Pick a random word on every pageload.
  // const answer = sample(WORDS);
  const [answer, setAnswer] = React.useState(() => {
    console.log('inside answer callback');
    return sample(WORDS);
  });

  // To make debugging easier, we'll log the solution in the console.
  console.info({ answer });

  function handleGuessSubmission(tentativeGuess) {
    const nextGuesses = [...guesses, tentativeGuess];
    setGuesses(nextGuesses);

    if (tentativeGuess.toUpperCase() === answer) {
      setGameState('won');
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameState('lost');
    }
  }

  function resetAnswer() {
    setAnswer(sample(WORDS));
  }

  function resetGame() {
    resetAnswer();
    setGuesses([]);
    setGameState('running');
  }

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <ResetButton resetGame={resetGame} />
      <GuessInput
        gameState={gameState}
        handleGuessSubmission={handleGuessSubmission}
      />
      {gameState === 'won' && <WonBanner numOfGuesses={guesses.length} />}
      {gameState === 'lost' && <LostBanner answer={answer} />}
    </>
  );
}

export default Game;
