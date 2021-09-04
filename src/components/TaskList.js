import React,{useState} from 'react'
import Task from './Task'

const TaskList = (props) =>{
	const [state,setState] = useState(false)
	var tasks = props.tasks


	const deleteTask = (id) =>{
		tasks.splice(id,1)
		console.log(props)
		setState(!state)
		localStorage.setItem("tasks",JSON.stringify(tasks))
	}	
	// console.log(props.tasks)

	var taskList = tasks.map((task,index) => <Task deleteTask = {deleteTask} key = {index} id = {index} task = {task.task} taskCategory = {task.category}/>)

	return(
		<>
			<div className = "box">
				<ul>
					{taskList}
				</ul>
			</div>
		</>
	)
}


export default TaskList