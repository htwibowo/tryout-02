import React, { Component } from 'react';

import './index.css'

class TodoItem extends Component {

  render() {
    return (
        <div onClick={() => this.props.onPress()} className={"todoItem" + (this.props.selected ? ' selected' : '') }>
            <div className='floatingAction'>
                <button onClick={() => this.props.onDelete()}>X</button>
            </div>
            <p>{this.props.text}</p>
        </div>
    );
  }
}

export default TodoItem;
