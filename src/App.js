import {useState} from 'react';
import './App.css';

function App() {
	const [count, setCount]=useState(0);
	const [error, setError]=useState('');
	return (
		<div className="App" data-test='component-app'>
			
		</div>
	);
}

export default App;
