import {useState} from 'react';
import Congrat from './Congrat';
import GuessedWords from './GuessedWords';
import './App.css';

function App() {
	
	return (
		<div className="container">
			<h1>Jotto</h1>
			<Congrat success={true}/>
			<GuessedWords guessWords={[{ guessWord: 'train', letterMatchCount: 3 }]}/>
		</div>
	);
}

export default App;
