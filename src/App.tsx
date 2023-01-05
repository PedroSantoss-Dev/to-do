
import { ChangeEvent, useState } from 'react'
import reactLogo from './assets/react.svg'
import { toast } from 'react-toastify'

interface ITask{
  id: number
  task: string
  checked: boolean
}
function App() {
  const [task, setTask] = useState('')
  const [listTasks, setListTasks] = useState<ITask[]>([])
 
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  }
  const addTask = () => {
    if (!task) return toast.warn("Preencha uma tarefa");
     const newTask = {
      id: Math.random(),
      task: task,
      checked: false
    }
    setListTasks([ ...listTasks, newTask])
    toast.success("Tarefa adicionad com sucesso!")
  }
  const removeTask = () => {

  }
  return (
    <div>
      <h1>Todo app</h1>
      <div >
        <input
        type='text'
        value={task}
        placeholder=' task..'
        onChange={handleInputChange}
        />
        <button onClick={addTask} >add</button>
      </div>
      <ul>
        {listTasks.map((task) => (
          <div key={task.id}>
            <p>{task.task}</p>
          </div>
        ))}
       
      </ul>
    </div>
  )
}

export default App
