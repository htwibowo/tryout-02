import React, { Component } from 'react';
import './App.css';
import PageHeader from './components/PageHeader';
import TodoList from './components/TodoList';

class App extends Component {

    render() {
        return (
            <div className="App">
                <PageHeader title="To-do List" />

                <TodoList />
            </div>
        );
    }
}

export default App;
