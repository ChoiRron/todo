// import React, {useState} from "react";
import styled from "styled-components";
import DeleteImg from "./delete.png";

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
`;

const DeleteImage = styled.img`
width: 20px;
heigth: 30px;
padding-left:265px;
`;

const Text = styled.div`
font-size: 24px;
margin-top:-5px;
`;
function TodoItems() {
    return (
        <Container>
            <Check></Check>
            <Text>hello</Text>
            <DeleteImage type="checkbox" src={DeleteImg} onClick={deleteItem}></DeleteImage>
        </Container>
    )
}
const deleteItem =(e) => 
    document.getElementsByTagName('div')[0].remove();
    // const {value} = e.target;
    // setTodo({
    //     id: '',
    //     text: '',
    //     isDone: false
    // })

export default TodoItems;
// import React, {useState} from "react";