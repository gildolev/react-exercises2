import React from 'react'
import Task from '../Task/Task'
export default function TaskList(props) {

    const { Tasks } = props;
    return (
        <ul>
            {Tasks.map((task, index) => (
                <Task>
                    <li key={index}>{task}</li>
                </Task>
            ))}
        </ul>
    )
}
