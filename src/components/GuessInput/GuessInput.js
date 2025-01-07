import React from 'react';

import Banner from '../Banner';

import { PLAYING, WIN, LOSE } from '../../constants';

function GuessInput({
  gameState,
  answer,
  handleGuessSubmission,
  checkWinOrLose,
}) {
  const [tentativeGuess, setTentativeGuess] = React.useState('');

  function handleChange(event) {
    const upper = event.target.value.toUpperCase();
    setTentativeGuess(upper);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log({ tentativeGuess });
    handleGuessSubmission(tentativeGuess);
    setTentativeGuess('');
    checkWinOrLose(tentativeGuess);
  }

  return (
    <form onSubmit={handleSubmit} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <Banner gameState={gameState} answer={answer} />
      <input
        id="guess-input"
        type="text"
        value={tentativeGuess}
        onChange={handleChange}
        minLength={5}
        maxLength={5}
        pattern="[A-Za-z]{5}"
        title="5 alphabetical characters"
        required
        disabled={[WIN, LOSE].includes(gameState)}
      />
    </form>
  );
}

export default GuessInput;
