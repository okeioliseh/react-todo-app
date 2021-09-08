import React,{ useState } from 'react'
import {FaPlusCircle} from 'react-icons/fa'

const AddTaskForm = (props) =>{
	const [input,setInput] = useState("")
	const [category,setCategory] = useState("Normal Task")
	const [modalClass,setModalClass] = useState("modal")

	var cat = category
	const handleInputChange = (event) =>{
		var inputValue = event.target.value
		setInput(inputValue)
	}

	const handleCategoryChange = (event) =>{
		var categoryVal = event.target.value
		setCategory(categoryVal)
	}

	const showModal = () =>{
		setModalClass("modal is-active")
	}

	const hideModal = () =>{
		setModalClass("modal")
	}

	const send = (task,category) =>{
		props.sendTask(input,cat)
		setInput("")
		hideModal()

	}

	return(
		<>
			<div className = {modalClass}>
				<div className = "modal-background">
					<div className = "modal-content">
						<div className = "card">
							<br/>
							<input className = "input is-small" type = "text" value = {input} placeholder = "Add Task" onChange = {handleInputChange}/> 
							<br/>
							<br/>
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
							<br/>
							<FaPlusCircle onClick = {send} className = "addbtn" color = "blue" size = "30px"/>
							
							<hr/>
						</div>
					</div>
					<button onClick = {hideModal} className = "modal-close"></button>
				</div>
			</div>
			
			<FaPlusCircle color = "blue" size = "40px" onClick = {showModal}/>
		</>
	)
}

export default AddTaskForm