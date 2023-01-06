
import { ChangeEvent, useState } from 'react'
import reactLogo from './assets/react.svg'
import { toast } from 'react-toastify'
import { Card } from './components/Card'

export interface ITask{
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
    toast.success("Tarefa adiciona com sucesso!",{
      theme: "dark"
    })
  }
  const removeTask = (id:number) => {
     setListTasks((previusTasks) => previusTasks.filter((task) => task.id !== id))
     toast.success("Tarefa deletada com sucesso",{
      theme: "dark"
     })
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
          <Card key={task.id} task={task} deleteTask={removeTask}/>
        ))}
       
      </ul>
    </div>
  )
}

export default App
