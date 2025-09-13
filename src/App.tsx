import { useState, type ChangeEvent } from "react";
import "./App.css";

function App() {
	const [text, setText] = useState<string>("");

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		setText(e.target.value);
	};

	return (
		<>
			<h1>Deploy Vite + React</h1>
			<div className='card'>
				<input
					data-testId='input'
					value={text}
					onChange={handleInputChange}
				/>
				<p data-testId='input-content'>Your input is {text}</p>
			</div>
			<p className='read-the-docs'>
				Click on the Vite and React logos to learn more
			</p>
		</>
	);
}

export default App;
