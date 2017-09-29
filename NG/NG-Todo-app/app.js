
(function () {

    let mod = angular.module('todo-app', ['ngResource', 'ui.router']);


    mod.config(function ($stateProvider, $urlRouterProvider, $httpProvider) {

        //$httpProvider.interceptors.push('myInterceptor');

        $urlRouterProvider.otherwise('/');

        let homeState = {
            name: 'home',
            url: '/',
            templateUrl: 'templates/home.html'
        };
        let loginState = {
            name: 'login',
            url: '/login',
            templateUrl: 'templates/login.html',
            controller: function ($scope, $state, authService) {
                $scope.loginForm = {};
                $scope.doLogin = function () {
                    authService.login($scope.loginForm)
                        .then(() => {
                            $state.go('todos');
                        });
                }
            }
        };
        let todosState = {
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
            .state(todosState)
            .state(loginState)

    });

    //-------------------------------------------------

    mod.controller('TodoAppController', function ($scope, $http, todos, Todo, authService) {
        $scope.todos = todos;

        $scope.addNewTodo = function (event) {
            let val = event.target.value;
            if (!val || event.which !== 13) return;
            let newTodo = new Todo();
            angular.extend(newTodo, { title: val, completed: false });
            // newTodo.$save(function (todo) {
            //     todos.push(todo);
            //     event.target.value = '';
            // });
            console.log(authService.getToken());
            let apiUrl = "http://localhost:3000/api/todos?access_token=" + authService.getToken();
            $http.post(apiUrl, newTodo)
                .then((resp) => {
                    todos.push(resp.data);
                    event.target.value = '';
                });
        }
        $scope.deleteTodo = function (id) {
            Todo.delete({ id }, function (resp) {
                let idx = todos.findIndex(todo => todo.id === id);
                todos.splice(idx, 1);
            });
        }

        $scope.toggleCompleteTodo = function (todo) {
            Todo.update({ id: todo.id }, todo, function (todo) {
            });
        }

    })


    //-------------------------------------------------


    mod.factory('Todo', function ($resource) {
        let api = "http://localhost:3000/api/todos/:id";
        let Todo = $resource(api, { id: '@id' }, { 'update': { method: 'PUT' } });
        return Todo;
    });


    mod.factory('authService', function ($http, $q) {
        let loginUrl = "http://0.0.0.0:3000/api/Users/login";

        return serv = {
            token: '',
            setToken: function (token) {
                this.token = token
            },
            getToken: function () {
                return this.token;
            },
            isAuthenticated() {
                return this.token !== "";
            },
            login: function (loginForm) {
                let defer = $q.defer();
                $http.post(loginUrl, loginForm)
                    .then((resp) => {
                        console.log(resp);
                        this.setToken(resp.data.id);
                        defer.resolve();
                    }, (error) => {
                        console.log('login fail');
                    });
                return defer.promise;
            }
        }

    });

    mod.factory('myInterceptor', ['$log', function ($log) {
        var myInterceptor = {
            request: function (config) {
                console.log('request interceptor...');
            }
        };
        return myInterceptor;
    }]);





})();