import React, {useState} from 'react';
import './President.css';

function President() {
    const[selected,setSelected]=useState(null)
	const [presidents] = useState([
		{
			firstName: 'Bill',
			lastName: 'Clinton',
			image: 'bill.jpeg'
		},
		{
			firstName: 'George',
			lastName: 'Bush',
			image: 'george.jpeg'
		},
		{
			firstName: 'Barack',
			lastName: 'Obama',
			image: 'barack.jpeg'
		}
	]);

	return (
		<div className="President">
			<p>When clicking on a president, display his <strong>full</strong> name below.</p>
			<div className="president-list">
				{presidents.map((president, index) => {
					return <img key={index} src={require('./images/' + president.image).default} alt="" onClick={()=>setSelected(president.firstName+" "+president.lastName)} />
				})}
			</div>
			<div>
				<strong>You selected: </strong> {selected}
			</div>
		</div>
	);
}

export default President;
