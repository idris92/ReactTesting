import React from 'react';
import PropTypes from 'prop-types';

const Congrat = (props) => {
	if (props.success) {
		return (
			<div data-test="components-congrats" className='alert alert-success'>
				<span data-test="congrat-message">Congratulations! You guessed the word!</span>
			</div>
		);
	} else {
		return <div data-test="components-congrats" />;
	}
};

Congrat.propTypes = {
	success: PropTypes.bool
};

export default Congrat;
