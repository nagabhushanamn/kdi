
import TodoService from './service/TodoService';

let todos = [];
let todoService = new TodoService();

todoService.addTodo('item1');
todoService.addTodo('item2');
todoService.addTodo('item3');
todoService.completeAll();
todoService.viewAll('ALL');
todoService.completeAll();
todoService.viewAll('ALL');




