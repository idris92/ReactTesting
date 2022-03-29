import React from 'react'
import PropTypes from 'prop-types'

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
                <tr data-test='guessed-word'  key={index} >
                    <td>{word.guessWord}</td>
                    <td>{word.letterMatchCount}</td>
                </tr>
            ))
        contents = (
            <div data-test='guessed-words'>
                <h3>Guessed Words</h3>
                <table className='table table-sm'>
                    <thead className='thead-light'>
                        <tr>
                        <th>Guess</th>
                        <th>Matching Letter</th>
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
    guessWords:PropTypes.arrayOf(
        PropTypes.shape({
            guessWord:PropTypes.string.isRequired,
            letterMatchCount:PropTypes.number.isRequired
        })
    ).isRequired
}

export default GuessedWords
