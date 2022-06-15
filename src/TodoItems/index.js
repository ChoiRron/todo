import DeleteImg from "./delete.png";
import styled, {css} from "styled-components";

const Container =  styled.div`
display:flex;
flex-direction:row;
margin-bottom: 20px;
`;

const Check = styled.button`
border-radius: 50px;
border: 3px solid blue;
width: 20px;
height: 20px;
margin-right: 10px;
${(props) =>
props.isDone &&
css`
background-color:#f4acb7;
`}
`;

const DeleteImage = styled.img`
width: 20px;
heigth: 30px;
margin-left:340px;
position:absolute;
`;

const Text = styled.div`
font-size: 24px;
margin-top:-5px;
`;
function TodoItems({todo, deleteTodo, modifyIsDone}) {
    const onClickRemove = () => {
        deleteTodo(todo.id);
    };
    function IsDoneChange(){
        modifyIsDone(todo.id)
    }
    return (
        <Container>
            <Check isDone={todo.isDone} onClick={IsDoneChange}></Check>
            <Text>{todo.text}</Text>
            <DeleteImage type="checkbox" src={DeleteImg} onClick={onClickRemove}></DeleteImage>
        </Container>
    )
}

export default TodoItems;
// import React, {useState} from "react";