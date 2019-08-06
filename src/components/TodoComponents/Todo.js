import React from 'react';

const Todo = props => {
    return (
        <div
            className={`todo${props.todo.completed ? 'completed' : ''}`}
            onClick ={()=> props.toggleTask(props.task.id)}
        >

            <p>{props.task.name}</p>
        </div>
    );
};

export default Todo;