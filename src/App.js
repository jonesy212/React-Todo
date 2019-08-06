import React, {ListForm} from 'react';
import ReactDom from 'react-dom';

// import './Todo.css';
import ToDoList from './components/TodoComponents/TodoList';

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
      task: 'Task2Complete',
      todo
    };
  }


  toggleTask =  id => {
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
    const newTask = {
      name: taskName,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todo: [...this.state.task, newTask]
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
          <ListForm addTask={this.addTask} />
        </div>
          <ToDoList
            todo = {this.state.todo}
            toggleTask = {this.toggleTask}
        />
      </div>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDom.render(<App />, rootElement);

