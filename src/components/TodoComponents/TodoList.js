import React, {Item} from 'react'

import Todo from './Todo'

const TodoList = props => {

    return (
        <div className='todo-list'>
            {props.todo.map(task => (
                <Item key={task.id} todo={todo} toggleTask ={props.toggleTodo} />
            ))}
            <button className ='clear-btn' onclick={props.clearCompleted}>
                Clear Completed Task
            </button>
        </div>
    );
};

export default TodoList;