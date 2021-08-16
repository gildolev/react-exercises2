import React, { useState, useEffect } from 'react';
import './Weather.css';

function Weather() {
	const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
	const [weekForcast, setWeekForcast] = useState([]);
	const [minDay, setMinDay] = useState(null);
	const [maxDay, setMaxDay] = useState(null);
	const URL = 'https://netcraft2.s3-eu-west-1.amazonaws.com/weather.json';
	useEffect(() => {
		fetch(URL)
			.then(results => results.json())
			.then(weekForcast => setWeekForcast(weekForcast))
	}, [])
	// useEffect(() => {
	// 	if (weekForcast.length > 0) {
	// 		let minDay = 0;
	// 		let maxDay = 0;
	// 		setMaxDay(days[0])
	// 		setMinDay(days[0])
	// 		for (let currentDay = 0; currentDay < weekForcast.length; currentDay++) {
	// 			if (weekForcast[currentDay].temperature > weekForcast[maxDay].temperature) {
	// 				maxDay = currentDay;
	// 				setMaxDay(days[weekForcast[currentDay].day - 2]);
	// 			}
	// 			if (weekForcast[currentDay].temperature < weekForcast[minDay].temperature) {
	// 				minDay = currentDay;
	// 				setMinDay(days[weekForcast[currentDay].day - 2]);
	// 			}
	// 		}
	// 	}
	// }, [weekForcast])
	useEffect(() => {
		if (weekForcast.length > 0) {
		let min=weekForcast[0].day;
	    let max=weekForcast[0].day;
		
			const initialValue = weekForcast[0].temperature;
			 weekForcast.reduce((accumulator, currentValue) => {
				if(currentValue.temperature<accumulator){
					min=currentValue.day;
				}
			return	Math.min(accumulator, currentValue.temperature)
			}, initialValue);

			 weekForcast.reduce((accumulator, currentValue) => {
				if(currentValue.temperature>accumulator){
					max=currentValue.day;
				}
			return	Math.max(accumulator, currentValue.temperature)
			}, initialValue);


 
			setMinDay(days[min - 2]);
			setMaxDay(days[max - 2]);
		}
		
	}, [weekForcast])
	return (
		<div className="Weather">
			<p>
				Use the following API to display the hottest and coldest days:<br />
				<code>https://netcraft2.s3-eu-west-1.amazonaws.com/weather.json</code>
			</p>
			<div className="Weather__stats">
				<strong>Hottest day is:{maxDay}</strong>
			</div>
			<div className="Weather__stats">
				<strong>Coldest day is:{minDay}</strong>
			</div>
		</div>
	);
}

export default Weather;
