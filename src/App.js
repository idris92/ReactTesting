import { useState, useEffect } from 'react';
import Congrat from './Congrat';
import GuessedWords from './GuessedWords';
import './App.css';
import Input from './Input';
import {getSecretWord} from './actions'

//we will be doing functional test
//Note:either using redux or context they use the same method, the only difference is the setup(how to apply initial state)
function App() {
	//TODO get props from shared
	//let hard code it for now
	const success = false;
	const secretWord = 'party';
	const guessWords = [];

	useEffect(()=>{
		getSecretWord();
	}, [])

	return (
		<div data-test="component-app" className="container">
			<h1>Jotto</h1>
			<Congrat success={success} />
			<Input success={success} secretWord={secretWord} />
			{/* we will be giving this an empty array [{ guessWord: 'train', letterMatchCount: 3 }] */}
			<GuessedWords guessWords={guessWords} />
		</div>
	);
}

export default App;
