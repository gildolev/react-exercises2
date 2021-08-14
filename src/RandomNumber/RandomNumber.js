import React, { useState } from 'react';
import './RandomNumber.css';

function RandomNumber() {
	const [number, setNumber] = useState(0);
	const makeRandomNumber = () => {
		setNumber(Math.random() * 100)
	}
	return (
		<div className="RandomNumber">
			<p className="RandomNumber__explanation">
				When clicking on the button, make a random number (between 1-100) to appear in the box.
			</p>

			<button onClick={makeRandomNumber}>Generate number!</button>
			<div className="box">
				{Math.floor(number)}
			</div>
		</div>
	);
}

export default RandomNumber;
