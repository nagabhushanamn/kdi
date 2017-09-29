


(function () {

    let mod = angular.module('todo-app', ['ngResource', 'ui.router']);

    mod.config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        let homeState = {
            name: 'home',
            url: '/',
            templateUrl: 'templates/todo-home.html'
        };
        let allState = {
            name: 'todos',
            url: '/todos',
            resolve: {
                todos: function (Todo) {
                    return Todo.query();
                }
            },
            controller: 'TodoAppController',
            templateUrl: 'templates/todo-app.html'
        };

        $stateProvider
            .state(homeState)
            .state(allState)

    });

    //-------------------------------------------------

    mod.controller('TodoAppController', function ($scope, todos, Todo) {
        $scope.todos = todos;

        $scope.addNewTodo = function (event) {
            let val = event.target.value;
            if (!val || event.which !== 13) return;
            let newTodo = new Todo();
            angular.extend(newTodo, { title: val, completed: false });
            newTodo.$save(function (todo) {
                todos.push(todo);
                event.target.value = '';
            });
        }
        $scope.deleteTodo = function (id) {
            Todo.delete({ id }, function (resp) {
                let idx = todos.findIndex(todo => todo.id === id);
                todos.splice(idx, 1);
            });
        }


    })


    //-------------------------------------------------


    mod.factory('Todo', function ($resource) {
        let api = "http://localhost:3000/api/todos/:id";
        let Todo = $resource(api, { id: '@id' });
        return Todo;
    });


})();