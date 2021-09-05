import React,{ useState } from 'react'
import { FaTimesCircle } from 'react-icons/fa';

const Task = (props) =>{
	const [category,setCategory] = useState(props.taskCategory)

	const handleChange = (event) =>{
		setCategory(event.target.value)
	}

	const deleteTask = (id)  =>{
		props.deleteTask(props.id);
	}


	return(
		<>
			<li className = "container">
		
				<FaTimesCircle className = "closebtn" color = "red" size = "30px"/>


				<input className = "checkbox" type = "checkbox"/>

				{props.task} 
				<select  value = {category} type = "select" className = "select is-small" onChange = {handleChange}>
					<option>
						React
					</option> 

					<option>
						Python
					</option>

					<option>
						JavaScript
					</option>

					<option>
						Normal Task
					</option> 
				</select>
			</li>
			<hr/>
			
		</>
	)
}

export default Task