import React from "react";

const ChildComponent = ({name, counter})=>{
    return (
        <span>Привет, {name}! Текущее значение счётчика: {counter}</span>
    )
}
export default ChildComponent;