import React, { useState, useEffect } from 'react';
import './Timer.css';

function Timer() {
	const [timer, setTimer] = useState(0);
	const [action, setAction] = useState('Pause');
	
	useEffect(() => {
		const interval = setInterval(() => {
			if (action === 'Reset') {
				setTimer(0);
				setAction('Play')
			}
			if (action === 'Play') {
				setTimer(prev => prev + 1)
			}
		}, 1000)
		return () => clearInterval(interval);



	}, [action])
	return (
		<div className="Timer">
			<h3>Timer</h3>
			<ul className="Timer__explanation">
				<li><b>Play:</b> the timer should count the seconds and keep updating</li>
				<li><b>Pause:</b> the timer freeze the timer</li>
				<li><b>Reset:</b> should set the timer to 0</li>
			</ul>
			<div className="Timer__actions">
				<button onClick={() => setAction('Play')}>Play</button>
				<button onClick={() => setAction('Pause')}>Pause</button>
				<button onClick={() => setAction('Reset')}>Reset</button>
			</div>
			<div className="Timer__value">{timer}</div>
		</div>
	);
}

export default Timer;
