import React from 'react';

function GuessInput({ handleGuessSubmission }) {
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
  }

  return (
    <form onSubmit={handleSubmit} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
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
      />
    </form>
  );
}

export default GuessInput;
