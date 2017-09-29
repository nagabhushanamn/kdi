

let mod = angular.module('pm-app', ['ngResource', 'ui.router']);

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
        resolve: {
            products: function (Product) {
                return Product.query();
            }
        },
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
            write: {
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


mod.controller('ViewAllController', function ($scope, $timeout, products, Product) {

    $scope.products = products;

    $scope.deleteItem = function (id) {
        Product.delete({ id: id }, function () {
            let idx = $scope.products.findIndex(item => item.id === id);
            $scope.products.splice(idx, 1);
        })
    }
});

mod.controller('AddNewController', function ($scope, Product, $state) {
    $scope.isOpen = true;
    $scope.product = {};
    $scope.submitForm = function () {
        let newProduct = new Product();
        angular.extend(newProduct, $scope.product);
        newProduct.$save(() => {
            $state.go('all');
        })
    }
});


mod.controller('EditController', function ($scope, Product, $state, $stateParams) {
    $scope.isOpen = true;

    Product.get({ id: $stateParams.id }, function (item) {
        $scope.product = item;
    })

    $scope.submitForm = function () {
        Product.update({ id: $scope.product.id }, $scope.product, function () {
            $state.go('all');
        })
    }
});

mod.controller('ViewController', function ($scope, Product, $state, $stateParams) {
    $scope.isOpen = true;
    Product.get({ id: $stateParams.id }, function (item) {
        $scope.product = item;
    })
});


mod.factory('Product', function ($resource) {
    let apiUrl = "http://localhost:3000/api/products/:id";
    // create Resource(Product) class with apiUrl
    return $resource(apiUrl, { id: '@id' },
        {
            'update': { method: 'PUT' }
        });
});