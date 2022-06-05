
import React, {useState} from "react";
import styled from "styled-components";

const Text = styled.div`
color: red;
`;

function TodoLeft ({todos}) {
return (
    <>
    <Text>{todos.length} todos left</Text>
    {/* <Text>{age}</Text> */}
    </>
)
};

export default TodoLeft;