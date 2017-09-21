'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Todo = require('../model/Todo');

var _Todo2 = _interopRequireDefault(_Todo);

var _todoFilters = require('../constants/todo-filters');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class TodoService {

    addTodo(title) {
        //let id = Math.floor(Math.random() * 100);
        let maxId = todos.reduce((id, todo) => id > todo.id ? id : todo.id, 0);
        let newTodo = new _Todo2.default(maxId + 1, title);
        //todos.push(newTodo);
        todos = [...todos, newTodo];
    }
    completeTodo(id) {
        todos = todos.map(todo => todo.id === id ? Object.assign(todo, { completed: true }) : todo);
    }
    deleteTodo(id) {
        todos = todos.filter(todo => todo.id !== id);
    }
    editTodo(id, title) {
        todos = todos.map(todo => todo.id === id ? Object.assign(todo, { title }) : todo);
    }
    clearCompleted() {
        todos = todos.filter(todo => !todo.completed);
    }
    completeAll() {
        let isAllCompleted = todos.every(todo => todo.completed);
        todos = todos.map(todo => {
            todo.completed = !isAllCompleted;
            return todo;
        });
    }

    viewAll(filter) {
        if (filter === _todoFilters.ALL) {
            todos.forEach(todo => console.log(todo));
        }
    }

}
exports.default = TodoService;