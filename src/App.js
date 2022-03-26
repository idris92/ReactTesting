import {useState} from 'react';
import './App.css';

function App() {
	const [count, setCount]=useState(0);
	const [error, setError]=useState('');
	return (
		<div className="App" data-test='component-app'>
			<h1 data-test='counter-display'>Learn react Testing</h1>
			<h4 data-test='count'>{count}</h4>
			{
				error && <h4 data-test='error'>{error}</h4>
			}
			<button data-test='increment-button' onClick={()=>{
				if(error){
					setError('');
					setCount(count+1)
				}else{
					setCount(count+1)
				}
			}}>Increment</button>
			<button data-test='decrement-button' onClick={()=>{if(count == 0){
				setError('Count cannot be less than 0');
			}else{
				setCount(count-1);
			}
			}}>Decrement</button>
		</div>
	);
}

export default App;
