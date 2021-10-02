import React from 'react'

interface TodoProps {
    title:string,
    done: boolean
}

const Todo = ({title ,done} : TodoProps) => {
    return (
        <div>
            <h2>{title}</h2>
            <h3>{done}</h3>
        </div>
    )
};

export default Todo;
