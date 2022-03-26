import React from 'react';
import PropTypes from 'prop-types';

const Congrat = (props) => {
	if (props.success) {
		return (
			<div data-test="components-congrats">
				<span data-test="congrat-message">Congratunlations! You guessed the word!</span>
			</div>
		);
	} else {
		return <div data-test="components-congrats" />;
	}
};

Congrat.propTypes = {
	success: PropTypes.bool.isRequired
};

export default Congrat;