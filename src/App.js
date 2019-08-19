import React, { Component} from 'react';
import './App.css';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import uuid from 'uuid';

class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'Do some coding',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Grocery shopping',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Make a to do list',
        completed: false
      }
    ]
  }

  //toggle complete
  markComplete = (id) => {
        this.setState({ todos: this.state.todos.map(todo => {
          if(todo.id === id) {
            todo.completed = !todo.completed
          }
          return todo;
        }) });
  }

  //delete todo
  delTodoHandle = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] })
  }

  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] })
  }

  render(){
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo addTodo={this.addTodo}/>
          <Todos todos={this.state.todos} markComplete={this.markComplete} delTodoHandle={this.delTodoHandle}/>
        </div>
      </div>
    );
  }
}

export default App;
