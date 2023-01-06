import styled from "styled-components";
import {FaTrash,FaCheck } from "react-icons/fa"
import {MdUpdate } from "react-icons/md"


export const  Card = styled.section`
 width: 20rem;
 height: 2rem;
 display: flex;
 justify-content: space-between;
 align-items: center;
 background: #2F4F4F;
 margin: 1rem;
 border-radius: 0.3rem;

`
export const Task = styled.h3`
font-size: 0.8em;
margin:  0.5rem;
`
export const Around = styled.div`
display: flex;
justify-content: center;
`
export const Btn = styled.button`
margin:  0.2rem;
background: transparent;
border: none;
`
export const Delete = styled(FaTrash)`
color:#8B008B;
`
export const Up = styled(MdUpdate)`
color:#8B008B;

`
export const  Copleted = styled(FaCheck)`
color:#8B4789;

`