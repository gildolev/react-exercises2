import React, { useState } from 'react';
import './Remover.css';
import Student from './Student/Student';

export default function Remover() {

	const [students, setStudents] = useState([
		'Abby Mecoil',
		'Toni Zuck',
		'Peter Hanshfield',
		'Rose Tobernak'
	]);
	const removeStudent = (index) => {
		setStudents(students.filter((student, i) =>
			i !== index
		));


	}
	return (
		<div className="Remover">
			<h3>Remover:</h3>
			<p>Add a delete button for each student to remove it from the list.</p>
			<ul className="Remover__list">
				{students.map((student, index) => {
					return <Student student={student} index={index} removeStudent={removeStudent} key={index}/>;
				})}
			</ul>
		</div>
	);
}
