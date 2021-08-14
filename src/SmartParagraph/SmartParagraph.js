import React, { useState, useEffect } from 'react';
import './SmartParagraph.css';

function SmartParagraph() {
	const [text] = useState(
		`I must explain to you how all this mistaken idea of
		denouncing pleasure and praising pain was born and I will give
		you a complete account of the system and expound the actual
		teachings of great explorers.`
	);
	const [show100Char, setShow100Char] = useState('');
	const[toggle,setToggle]=useState(false);

	function get100Char() {
		let Arr = [];
		let counter = 0;
		text.split('').forEach(char => {
			if (counter < 100) {
				Arr.push(char);
				if (char != ' ') {
					counter++;
				}
			}
		});
		return Arr;
	}

	useEffect(() => {
		setShow100Char(get100Char());
	}, [])



	return (
		<div className="SmartParagraph">
			<p className="SmartParagraph__explanation">
				When clicking on "Toggle" button,
				the following paragraph should display only 100 characters.
				The challenge is cutting between words!
				Clicking again should show all of the text back.
			</p>
			<p className="SmartParagraph__value">
				{toggle?text:show100Char}
			</p>
			<button onClick={()=>{setToggle(!toggle)}}>Toggle</button>
		</div>

	);
}

export default SmartParagraph;
