'use strict';

var _TodoService = require('./service/TodoService');

var _TodoService2 = _interopRequireDefault(_TodoService);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let todos = [];
let todoService = new _TodoService2.default();

todoService.addTodo('item1');
todoService.addTodo('item2');
todoService.addTodo('item3');
todoService.completeAll();
todoService.viewAll('ALL');
todoService.completeAll();
todoService.viewAll('ALL');