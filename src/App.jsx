//import { useState } from 'react'

import ToDoApp from './components/ToDoApp.jsx'

function App() {
  //const [count, setCount] = useState(2000)

  return (
    <>
      <div className="grid justify-center	pt-6">
        <h1 className="text-3xl font-bold">To Do App</h1>

        <div className='p-6'>
          <ToDoApp />
        </div>
      </div>
    </>
  )
}

export default App
