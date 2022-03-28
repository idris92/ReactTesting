import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ success, guessWord }) => {
	const [ currentGuess, setCurrentGuess ] = React.useState('');
	if (success) {
		return <div data-test="input-component" />;
	}
	return (
		<div data-test="input-component">
			<form className="form-inline">
				<input
					data-test="input-box"
					className="mb-2 mx-sm-3"
					type="text"
					placeholder="enter guess"
					value={currentGuess}
					onChange={(e) => setCurrentGuess(e.target.value)}
				/>
				<button
					data-test='submit-button'
					onClick={(e) => {
						//this is used to prevent default button clicked
						e.preventDefault();
						//TODO: update guessword
						//TODO: check against secret word and update success if needed
						setCurrentGuess('');
					}}
					className="btn btn-primary mb-2"
				>
					Submit
				</button>
			</form>
		</div>
	);
};
Input.propTypes = {
	guessWord: PropTypes.string.isRequired
};

export default Input;
