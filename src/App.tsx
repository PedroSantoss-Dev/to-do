
import { ChangeEvent, useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import { Card } from './components/Card'
import * as S from "./GlobalStyle"

export interface ITask{
  id: number
  task: string
  checked: boolean
}
function App() {
  const [task, setTask] = useState('')
  const [listTasks, setListTasks] = useState<ITask[]>(() => {
    const storedTasks = localStorage.getItem('@taskList:task');
     
    if(storedTasks){
      return JSON.parse(storedTasks);
    } 
    return[]
  }) 
 
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
    setTask('')
  }
  
  const removeTask = (id:number) => {
     setListTasks((previusTasks) => previusTasks.filter((task) => task.id !== id))
     toast.success("Tarefa deletada com sucesso",{
      theme: "dark"
    })
  }
  const checkedTask = ( id:number) => {
    setListTasks((previsTask) => 
    previsTask.map((task) => task.id !== id ? task : { ...task, checked : !task.checked})) 
  }
  useEffect(() => {
   localStorage.setItem('@taskList:task', JSON.stringify(listTasks))
  },[listTasks])
  return (
    <S.App>
      <h1>Todo app</h1>
      <div >
        <input
        type='text'
        value={task}
        placeholder=' task..'
        onChange={handleInputChange}
        />
        <button className='btn' onClick={addTask} >add</button>
      </div>
      <ul>
        {listTasks.map((task) => (
          <Card key={task.id} task={task} checkedTask={checkedTask} deleteTask={removeTask} />
        ))}
       
      </ul>
    </S.App>
  )
}

export default App
