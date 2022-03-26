import React from 'react';

const Congrat = ({ success }) => {
	if (success) {
		return (
			<div data-test='components-congrats'>
				<span data-test='congrat-message'>Congratunlations! You guessed the word!</span>
			</div>
		);
	} else {
		return <div data-test='components-congrats' />;
	}
};

export default Congrat;
