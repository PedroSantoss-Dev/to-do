import * as S from "./style"
import { ITask } from "../../App"


interface ICard{
    task: ITask
    deleteTask: (id: number) => void;
}
export const Card = ({task, deleteTask}: ICard) => {
    const handleDeleteTodo = ( ) => {
        deleteTask(task.id)
    }
    return(
        <S.Card>
            <S.Task>{task.task}</S.Task>
            <S.Around>
                <S.Btn>
                    <S.Copleted/>
                </S.Btn>
                <S.Btn>
                    <S.Up/>
                </S.Btn>
                <S.Btn onClick={handleDeleteTodo}>
                    <S.Delete/>
                </S.Btn>
            </S.Around>
        </S.Card>
    )
}