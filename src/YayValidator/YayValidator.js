import React,{useState} from 'react';
import './YayValidator.css';

function YayValidator() {
	const[value,setValue]=useState('');
	return (
		<div className="YayValidator">
			<p>
				When the input contains the value "yay",
				change the input's background color to <span className="YayValidator__sample">green</span>:
			</p>
			<input type="text" className={`text-box ${value.includes('yay')?'foundYay':null}`} valuse={value} onChange={(e)=>{setValue(e.target.value)}}/>
		</div>
	);
}

export default YayValidator;
