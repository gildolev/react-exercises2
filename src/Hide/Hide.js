import React,{useState} from 'react';
import './Hide.css';

function Hide() {
	const [hideText,setHidetext]=useState(true);
	return (
		<div className="Hide">
			<button onClick={()=>(setHidetext(false))}>Hide text now!</button>
			{hideText&&	<p>
			You can read this text,
				but if you click the button it should disappear. Forever.
			</p>}
		</div>
	);
}

export default Hide;
