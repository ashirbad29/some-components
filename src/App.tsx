import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className='w-full h-screen flex items-center justify-center'>
			<h1 className='text-2xl text-pink-500'>Hello world</h1>
		</div>
	);
}

export default App;
