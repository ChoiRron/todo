import React, {useState} from "react";
import styled from "styled-components";
import TodoDate from "../TodoDate";
import TodoAdd  from "../TodoAdd";
import TodoLeft from "../TodoLeft";
import TodoItems from "../TodoItems"

const Container = styled.div`
background-color:#588157;
// width:100%;
height:100vh;
display:flex;
justify-content:center;

`;

const TodoContainer = styled.div`
    border-radius: 20px;
    background-color:white;
    width: 370px;
    padding: 30px;
`;


function MainPage () {
    const [todos, setTodos] = useState([
        { isDone: false, text: "hello", id:1 }
    ]);

     const addTodo =(todo) => {
        setTodos([...todos, todo]);
    };
  
    return (

        
        <Container>
            <TodoContainer>
            <TodoDate />
            <TodoLeft todos={todos} />
            <TodoAdd todos={todos} updateTodo={addTodo}/>
            <TodoItems/>
            </TodoContainer>
         </Container>
    );

};

export default MainPage;
