import React, { Component } from 'react';

import TodoItem from '../TodoItem';
import './index.css'
import todoService from '../../services/todo'

class TodoList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            items: [],
            selectedItem: null,
            inputText: '',
            submitDisabled: false,
            alert: false,
        };

        this.submit = this.submit.bind(this)
        this.inputChanged = this.inputChanged.bind(this)
        this.updateItem = this.updateItem.bind(this)
    }

    componentDidMount() {
        this.updateItem()
    }

    submit(e) {
        e.preventDefault()

        this.disableSubmit()

        if (this.validItem()) {
            todoService
                .addItem(this.state.inputText)
                .then(this.updateItem)
                .then(() => {
                    this.setState({
                        inputText: '',
                    })
                    this.textInput.value = ''
                    this.enableSubmit()
                    this.toggleAlert(false)
                })
                .catch(() => {
                    this.enableSubmit()
                    this.toggleAlert(false)
                })
        } else {
            this.toggleAlert(true)
            this.enableSubmit()
        }
    }

    toggleAlert(state) {
        this.setState({ alert: state })
    }

    disableSubmit() {
        this.setState({
            submitDisabled: true,
        })
    }

    enableSubmit() {
        this.setState({
            submitDisabled: false,
        })
    }

    deleteItem(item) {
        const idx = this.state.items.indexOf(item)
        todoService.deleteItem(idx).then(this.updateItem)
    }

    updateItem() {
        todoService.items().then(response => {
            console.log(response)
            this.setState({
                items: response.data
            })
        })
    }

    validItem() {
        return this.state.inputText !== ''
    }

    inputChanged(e) {
        this.setState({
            inputText: e.target.value
        })
    }

    render() {
        return (
            <div className="todoList">
                {this.state.alert && <div className="redAlert">
                    <p>Input tidak boleh kosong</p>
                </div>}
                <form className="inputGroup" onSubmit={this.submit}>
                    <input ref={(input) => { this.textInput = input; }} onChange={this.inputChanged} className="input" />
                    <button
                        disabled={this.state.submitDisabled}
                        className="button"
                    >
                        Simpan
                    </button>
                </form>

                {this.state.items.map(item => <TodoItem
                    onDelete={() => this.deleteItem(item)}
                    selected={item === this.state.selectedItem}
                    text={item.item}
                    onPress={() => this.selectItem(item)}
                />)}
            </div>
        );
    }

    selectItem(selectedItem) {
        this.setState({ selectedItem });
    }
}

export default TodoList;
