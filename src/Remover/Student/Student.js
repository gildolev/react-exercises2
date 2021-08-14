import React from 'react'


export default function Student(props) {
   const{ index,student,removeStudent}=props;
    return (
        <div className='row'>
            <li key={index}>{student}</li><Button index={index} removeStudent={removeStudent} />
        </div>
    )
}



const Button=(props)=>{
    const{ index,removeStudent}=props;
	return(
		<span className='remove' onClick={()=>removeStudent(index)}>X</span>
	)
}
