import React,{ useState } from 'react'
import './bulma-0.9.0/css/bulma.css'
import './main.css'
import AddTaskForm from './AddTaskForm'
import TaskList from './TaskList'

const Main = (props) =>{

	const [tasks,setTasks] = useState([])

	var tasksObj = [];
	const receiveTask = (task,category) =>{
		localStorage.setItem("tasks",tasksObj)
		if(task){
			tasksObj = [
				{		
					task : task,
					category : category
				},
			]
			// console.log(tasksObj)
			setTasks([...tasks,tasksObj[0]])
			
			
		}
			

	}


		return(
			<center>
				<h1>My Todo App</h1>
				<AddTaskForm sendTask = {receiveTask}/>
				<TaskList tasks = {tasks}/>

			</center>
		)
}

export default Main