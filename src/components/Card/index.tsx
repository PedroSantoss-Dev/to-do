import * as S from "./style"
import { ITask } from "../../App"


interface ICard{
    task: ITask
}
export const Card = ({task}: ICard) => {
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
                <S.Btn>
                    <S.Delete/>
                </S.Btn>
            </S.Around>
        </S.Card>
    )
}