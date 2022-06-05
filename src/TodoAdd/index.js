import React, {useState} from "react";
import styled from "styled-components";

const Container = styled.div`
display:flex;
flex-direction:row;
margin-bottom: 20px;
margin-top: 30px;
`;
const Input = styled.input`
width:250px;
font-size: 18px;
border : 1px solid black;
border-radius: 10px;
padding: 9px;
height:30px;
`;

const Button = styled.button`
border: none;
width: 20%;
font-weigth: 700;
`;
function TodoAdd({ todos, updateTodo}) {
    const [todo, setTodo] = useState({
        id: null,
        text: "",
        isDone: false
    })
    // const onClickChange = () => {
    //     updateTodo(todo);//used as a function
    // };

    const addTodo =(e) => {
        const {value} = e.target;
        setTodo({
            id: todos.length + 1,
            text: value,
            isDone: false
        })

    }
    const onClickChange = () => {
        const todo = this.todoInput.value.trim()
        if(!todo) {return}
        this.props.addTodo(todo)
        this.todoInput.value = ''
    }
    return (
        <Container>
        <Input
        type="text"
        name="text"
        // ref={input => todoInput = input}
        onChange={addTodo}
        ></Input>
        <Button onClick={onClickChange}>Add</Button>
        </Container>
        
    )
};

export default TodoAdd;