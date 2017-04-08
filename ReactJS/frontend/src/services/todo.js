import axios from './axios'

class Todo {
    items() {
        return axios.get('/')
    }

    addItem(item) {
        return axios.post('/', { item }, {
            headers: {
                'Content-Type': 'application/json',
                'accept': 'application/json',
            }
        })
    }

    deleteItem(idx) {
        return axios.delete('/' + idx)
    }
}

const todo = new Todo()

export default todo

