import React, {useState} from 'react';
import './Filter.css';

function Filter() {
    const[value,setValue]=useState('');
	const [items] = useState([
		'Big fox',
		'Small elephant',
		'Big ant',
		'Small dinosaur',
		'Medium dog'
	]);

	return (
		<div className="Filter">
			<p>Filter the list as you type.</p>
			<input placeholder="Search..." className="Filter__textbox"value={value} onChange={(e)=>setValue(e.target.value)}/>
			<ul>
				{items.filter(x=>x.includes(value)).map((item, index) => {
					return <li key={index}>{item}</li>;
				})}
			</ul>
		</div>
	)
}

export default Filter;
