import React,{ useState } from 'react'
import {FaPlusCircle} from 'react-icons/fa'

const AddTaskForm = (props) =>{
	const [input,setInput] = useState("")
	const [category,setCategory] = useState("Normal Task")

	var cat = category
	const handleInputChange = (event) =>{
		var inputValue = event.target.value
		setInput(inputValue)
	}

	const handleCategoryChange = (event) =>{
		var categoryVal = event.target.value
		setCategory(categoryVal)
	}

	const send = (task,category) =>{
		props.sendTask(input,cat)
		setInput("")
	}
	return(
		<>
			<input className = "input is-small" type = "text" value = {input} placeholder = "Add Task" onChange = {handleInputChange}/> 

			<select value = {category} onChange = {handleCategoryChange} className = "select">
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

			<br/>
			<FaPlusCircle onClick = {send} className = "addbtn" color = "blue" size = "30px"/>
			
			<hr/>
		</>
	)
}

export default AddTaskForm