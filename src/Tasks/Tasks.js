import React, { useState } from 'react';
import './Tasks.css';
import TaskList from './TaskList/TaskList';

function Tasks() {
	const [tasks, setTasks] = useState([]);
	const [value, setValue] = useState('');
	const createTask = (e)=> {
		debugger
		e.preventDefault();
		setTasks([...tasks,value]);
	}
	return (
		<div className="Tasks">
			<h3>Tasks:</h3>
			<p>Make a Todo list (add only):</p>
			<form onSubmit={createTask}>
				<input placeholder="Your task..." value={value} onChange={(e) => setValue(e.target.value)} /> <button>Add task</button>
			</form>
			<TaskList Tasks={tasks}/>
		</div>
	);
}

export default Tasks;
