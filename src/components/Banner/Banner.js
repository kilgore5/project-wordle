import React from 'react';
import { PLAYING, WIN, LOSE } from '../../constants';

function Banner({ gameState, answer }) {
  function bannerClass() {
    const classMap = {
      WIN: 'happy',
      LOSE: 'sad',
      PLAYING: '',
    };

    return classMap[gameState];
  }

  return (
    [WIN, LOSE].includes(gameState) && (
      <div className={`${bannerClass()} banner `}>
        {gameState === WIN ? (
          <p>
            <strong>Congratulations!</strong> Got it in{' '}
            <strong>3 guesses</strong>.
          </p>
        ) : (
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        )}
      </div>
    )
  );
}

export default Banner;
