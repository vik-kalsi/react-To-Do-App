import { useState } from 'react'


function ToDoApp() {


    const [tasks, setTasks] = useState([])
    const [newTask, setNewTask] = useState("")


    function handleInputChange(event){
        setNewTask(event.target.value)
    }

    function addTask(){
        if (newTask.trim() !== "") {
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }
    }

    function deleteTask(index){
        setTasks(t => t.filter((_, i) => i !== index));
    }

    
    return(
        <>
            <input 
                type="text"
                placeholder="Add Task Here" 
                value={newTask} 
                onChange={handleInputChange} 
                className="input input-bordered input-primary w-full max-w-xs" />

            <button className="btn btn-outline btn-success mt-3" onClick={addTask}>Add Task</button>




            <div className="border-2 mt-6 p-3">
                <ul>
                    {tasks.map((task, index) => 
                        <li key={index}> 
                            {task} 
                            <button className='border-2 p-1 mb-5' onClick={() => deleteTask(index)}>
                                Delete 
                            </button>
                        </li>
                    )}
                </ul>
            </div>
        </>
    )
}


export default ToDoApp