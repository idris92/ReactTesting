import React from 'react'
import propTypes from 'prop-types'

const GuessedWords = (props) => {
    let contents
    if(props.guessWords.length == 0){
        contents = (
            <span data-test='guest-instructions'>
                Try to guess the secret words!
            </span>
            )
    }
    return (
        <div data-test='component-guessed-word'>{contents}</div>
   
    )
}

GuessedWords.propTypes={
    guessWords:propTypes.arrayOf(
        propTypes.shape({
            guessWord:propTypes.string.isRequired,
            letterMatchCount:propTypes.number.isRequired
        })
    ).isRequired
}

export default GuessedWords
