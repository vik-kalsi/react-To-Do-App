import { useState } from 'react'


function ToDoApp() {


    const [tasks, setTasks] = useState(["Eat Food", "Drink Water", "Listen to Music"])


    function handleNameChange(event){
        setTasks(event.target.value)
    }

    return(
        <>
            <input type="text" onChange={handleNameChange} placeholder="Add Task Here" className="input input-bordered input-primary w-full max-w-xs" />
            <button className="btn btn-outline btn-success mt-3">Add Task</button>

            <div className="border-2 mt-6 p-3">
                <ul>
                    {tasks.map((task, index) => 
                        <li key={index}> {task} <button className='border-2 p-1'> Delete </button></li>
                    )}
                </ul>
            </div>
        </>
    )
}


export default ToDoApp