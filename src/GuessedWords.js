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
    }else{
        const guessWordRows = props.guessWords.map((word, index)=>(
                <tr key={index} data-test='guessed-word'>
                    <th>{word.guessWord}</th>
                    <th>{word.letterMatchCount}</th>
                </tr>
            ))
        contents = (
            <div data-test='guessed-words'>
                <h3>Guessed Words</h3>
                <table className='table table-sm'>
                    <thead className='thead-light'>
                        <tr>
                        <td>Guess</td>
                        <td>Matching Letter</td>

                        </tr>
                    </thead>
                    <tbody>
                        {guessWordRows}
                    </tbody>
                </table>
            </div>
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
