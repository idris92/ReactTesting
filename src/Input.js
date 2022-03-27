import React from 'react'
import PropTypes from 'prop-types'

const Input = ({guessWord}) => {
    return (
        <div data-test='input-component'/>
    )
}
Input.propTypes={
    guessWord:PropTypes.string.isRequired
}

export default Input
