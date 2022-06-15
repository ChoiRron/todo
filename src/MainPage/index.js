import React, {useState} from "react";
import styled from "styled-components";
import TodoDate from "../TodoDate";
import TodoAdd  from "../TodoAdd";
import TodoLeft from "../TodoLeft";
// import TodoItems from "../TodoItems"
import TodoList from "../TodoList"
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
    const [todos, setTodos] = useState([]);

     const addTodo =(todo) => {
        setTodos([...todos, todo]);
    };
    //.filter 
    //.map --> iterate the array
  const removeTodo = (id) => {
      console.log(id);
      const newTodos = todos.filter((todo) => todo.id != id);
      setTodos(newTodos);
    //   const newTodos = [];
    //   setTodos ([newTodos]);
  };
    return (

        
        <Container>
            <TodoContainer>
            <TodoDate />
            <TodoLeft todos={todos} />
            <TodoAdd todos={todos} updateTodo={addTodo}/>
            <TodoList todos={todos} deleteTodo={removeTodo}/>
            {/* <TodoItems todos={todos} deleteTodo={removeTodo}/> */}
            </TodoContainer>
         </Container>
    );

};

export default MainPage;
