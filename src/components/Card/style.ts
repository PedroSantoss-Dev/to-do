import styled from "styled-components";
import {FaTrash,FaCheck } from "react-icons/fa"
import {MdUpdate } from "react-icons/md"



export const  Container = styled.section`
 width: 20rem;
 height: 2rem;
 border-radius: 0.3rem;
 .card{
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 0.3rem;
    background :#2F4f2F4F;
    margin: 1rem;
 }
 h3{
    font-size: 0.8em;
    margin:  0.8rem;
 }
 .done{
    background :#2F4f;
    color:#8B008B;
 }
 

`
export const Task = styled.h3`
font-size: 0.8em;
margin:  0.5rem;
`
export const Around = styled.div`
display: flex;
justify-content: center;
`
export const Btn = styled.div`
width: 2rem;
height: 1.5rem;
margin:  0.3rem;
background: transparent;
border: none;
`
export const Delete = styled(FaTrash)`
color:#8B008B;
&:hover{
    color:#8B4789;
    transform: scale(1.2);
}
`
export const Up = styled(MdUpdate)`
color:#8B008B;
&:hover{
    color:#8B4789;
    transform: scale(1.2);
}

`
export const  Copleted = styled(FaCheck)`
color:#8B008B;
&:hover{
color:#8B4789;
    transform: scale(1.2);
}
`