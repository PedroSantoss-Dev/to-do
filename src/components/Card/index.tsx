import * as S from "./style"
import { ITask } from "../../App"


export interface ICard{
    task: ITask
    deleteTask: (id: number) => void;
    checkedTask: (id: number) => void;
    
}
export const Card = ({task, deleteTask,checkedTask}: ICard) => {
    const handleDeleteTodo = ( ) => {
        deleteTask(task.id)
    }
    const handleChecked = ( ) => {
        checkedTask(task.id)

    }
   
    
    
    return(
        <S.Container>
            <div className={`card ${task.checked ? 'done' : ''}`}>
            <h3 >{task.task}</h3>
            <S.Around>
                <S.Btn  onClick={handleChecked}>
                    <S.Copleted />
                </S.Btn>
                
                <S.Btn onClick={handleDeleteTodo}>
                    <S.Delete/>
                </S.Btn>
            </S.Around>
        </div>
        </S.Container>
    )
}