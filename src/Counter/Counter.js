import React,{useState} from 'react';
import './Counter.css';

function Counter() {
	const[number,setNumber]=useState(0);
	return (
		<div className="Counter">
			<p>Make the button increase the value:</p>
			<button onClick={()=>setNumber(number+1)}>Increase</button>
			<div className="Counter__value">{number}</div>
		</div>
	);
}

export default Counter;
