import React, { useState, useEffect } from 'react';
import './Users.css';


function Users() {
	const [users, setUsers] = useState([]);
	const URL='https://netcraft2.s3-eu-west-1.amazonaws.com/users.json';
	useEffect(() => {
		fetch(URL)
			.then(results => results.json())
			.then((users) => { setUsers(users) })
	}, [])
	return (
		<div className="Users">
			<h3>Users:</h3>
			<p>
				Use the following API to make a list of user names:<br />
				<code>https://netcraft2.s3-eu-west-1.amazonaws.com/users.json</code>
			</p>
			<ul>
				{users.map((user, index) => (
					<li key={index}>{user.name}</li>
				))}
			</ul>
		</div>
	);
}

export default Users;
