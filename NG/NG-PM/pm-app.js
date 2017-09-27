

let mod = angular.module('pm-app', ['ui.router']);

mod.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/");

    let homeState = {
        name: 'home',
        url: '/',
        templateUrl: 'templates/pm-home.html'
    }
    let allState = {
        name: 'all',
        url: '/view-all',
        templateUrl: 'templates/pm-grid.html',
        controller: 'ViewAllController'
    }
    let newState = {
        name: 'new',
        url: '/new-product',
        templateUrl: 'templates/pm-product-form.html',
        controller: 'AddNewController'
    }
    let editState = {
        name: 'all.edit',
        url: '/edit-product/:id',
        views: {
            read: {
                templateUrl: 'templates/pm-product-view.html',
                controller: 'ViewController'
            },
            edit: {
                templateUrl: 'templates/pm-product-form.html',
                controller: 'EditController'
            }
        }
    }
    let viewState = {
        name: 'all.view',
        url: '/view-product/:id',
        views: {
            read: {
                templateUrl: 'templates/pm-product-view.html',
                controller: 'ViewController'
            }
        }

    }

    $stateProvider
        .state(homeState)
        .state(allState)
        .state(newState)
        .state(editState)
        .state(viewState)

});


mod.controller('ViewAllController', function ($scope, productService) {
    productService.loadAll()
        .then((products) => {
            $scope.products = products;
        })

    $scope.deleteItem = function (id) {
        productService.delete(id)
            .then((resp) => {
                let idx = $scope.products.findIndex(item => item.id === id);
                $scope.products.splice(idx, 1);
            });
    }
});

mod.controller('AddNewController', function ($scope, productService, $state) {
    $scope.isOpen = true;
    $scope.product = {};
    $scope.submitForm = function () {
        productService.save($scope.product)
            .then((resp) => {
                //$scope.isOpen = false;
                //$scope.message = `product - ${resp.name} , added successfully`;
                $state.go('all');
            });
    }
});


mod.controller('EditController', function ($scope, productService, $state, $stateParams) {
    $scope.isOpen = true;
    productService.load($stateParams.id)
        .then(item => {
            $scope.product = item;
        });
    $scope.submitForm = function () {
        productService.update($scope.product)
            .then((resp) => {
                //$scope.isOpen = false;
                //$scope.message = `product - ${resp.name} , added successfully`;
                $state.go('all');
            });
    }
});


mod.controller('ViewController', function ($scope, productService, $state, $stateParams) {
    $scope.isOpen = true;
    productService.load($stateParams.id)
        .then(item => {
            $scope.product = item;
        });
});



mod.factory('productService', function ($http, $q) {
    let apiiUrl = "http://localhost:3000/api/products";
    let service = {
        loadAll: function () {
            let defer = $q.defer();
            let promise = $http.get(apiiUrl);
            promise.then((resp) => {
                defer.resolve(resp.data);
            });
            return defer.promise;
        },
        load: function (id) {
            let defer = $q.defer();
            let promise = $http.get(apiiUrl + '/' + id);
            promise.then((resp) => {
                defer.resolve(resp.data);
            });
            return defer.promise;
        },
        save: function (product) {
            let defer = $q.defer();
            let promise = $http.post(apiiUrl, product);
            promise.then((resp) => {
                defer.resolve(resp.data);
            });
            return defer.promise;
        },
        update: function (product) {
            let defer = $q.defer();
            let promise = $http.put(apiiUrl, product);
            promise.then((resp) => {
                defer.resolve(resp.data);
            });
            return defer.promise;
        },
        delete: function (id) {
            let defer = $q.defer();
            let promise = $http.delete(apiiUrl + "/" + id);
            promise.then((resp) => {
                defer.resolve(resp.data);
            });
            return defer.promise;
        }
    };
    return service;
});