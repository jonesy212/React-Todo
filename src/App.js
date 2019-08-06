import React, {ListForm} from 'react';
import ReactDOM from 'react-dom';

import ToDoList from './components/TodoComponents/TodoList';
// import './Todo.css';
// import TodoForm from './components/TodoComponents/TodoForm';


const todo = [

  {
    task: 'Clean Bathroom',
    id: 1528817077286,
    completed: false
  },

  {
    task: 'Study',
    id: 1528817084358,
    completed: false
  },

  {
    task: 'Cook Dinner',
    id: 1528817077286,
    completed: false
  },

  {
    task: 'Learn More',
    id: 1528817084358,
    completed: false
  },

];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super ();
    this.state = {
      task: 'Task 2 Complete',
      todo
    };
  }


  toggleTodo =  id => {
    console.log(id);

    this.state ({
      todo: this.state.todo.map(task => {
        if (task.id === id) {
          return {
            ...task, 
            completed: !task.completed
          };
        } else {
            return task;
          }
        
      })
    });

  };

  addTask = taskName => {
    const newTodo = {
      name: taskName,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todo: [...this.state.todo, newTodo]
    });
  };

  deleteTask = () => {
    this.setState({
      todo: this.state.todo.filter(task => !task.completed)
    });
  };
  render() {
    return (
      <div className ='App'>
        <div className = 'header'>
          <h1>To Do List</h1>
          <ListForm addTTodo={this.addTodo} />
        </div>
          <ToDoList
            todo = {this.state.todo}
            toggleTodo = {this.toggleTodo}
        />
      </div>
    );
  }
}

export default App