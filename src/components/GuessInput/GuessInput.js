import React from 'react';

function GuessInput({ handleGuessSubmission }) {
  const [guess, setGuess] = React.useState('');

  function handleChange(event) {
    const upper = event.target.value.toUpperCase();
    setGuess(upper);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log({ guess });
    handleGuessSubmission(guess);
    setGuess('');
  }

  return (
    <form onSubmit={handleSubmit} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        onChange={handleChange}
        minLength={5}
        maxLength={5}
        pattern="[A-Za-z]{5}"
        title="5 alphabetical characters"
        required
      />
    </form>
  );
}

export default GuessInput;
