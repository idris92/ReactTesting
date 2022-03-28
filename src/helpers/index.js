import React from 'react'

const getLetterMatchCount = (guessWords, secretWord) => {
    const secretLetters = secretWord.split('');
    const guessedLetterSet = new Set(guessWords);
    return secretLetters.filter((letter)=>guessedLetterSet.has(letter)).length
  
}

export default getLetterMatchCount
