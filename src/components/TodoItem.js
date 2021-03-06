import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    getStyleHandle = () => {
        return {
            background: 'rgb(193, 253, 255)',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    render() {
        const { id, title } = this.props.todo;
        return (
            <div style = {this.getStyleHandle()}>
              <p>
              <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/> {' '}
              { title }
              <button onClick={this.props.delTodoHandle.bind(this, id)} style={btnStyle}>x</button>
              </p>  
            </div>
        )
    }
}

//PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

const btnStyle = {
    background: 'black',
    color: 'white',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

export default TodoItem
