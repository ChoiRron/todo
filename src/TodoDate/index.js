import React, {useState} from "react";
import styled from "styled-components";

const Title = styled.div`

`;

const Dates = styled.div`
`;
function TodoDate() {
    const today = new Date();
    const dateString = today.toLocaleString("Chinese", {
        year: "numeric",
        month: 'long',
        day: "numeric"
    });
    const dayName = today.toLocaleString("en-US", {weekday: "long"})
    return (
        <>
        <Title>{dateString}</Title>
        <Dates>{dayName}</Dates>
        </>
    )
}
export default TodoDate;