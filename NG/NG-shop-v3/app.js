


let mod = angular.module('shop', []);


// Model
//--------------------------------
let items = [
    {
        name: 'Laptop',
        price: 198000,
        discount: 10000,
        description: 'New mac pro',
        canBuy: true,
        notAvailable: false,
        makeDate: Date.now(),
        image: 'images/Laptop.png',
        reviews: [
            { stars: 5, author: 'nag@gmail.com', comment: 'good one' },
            { stars: 3, author: 'indu@gmail.com', comment: 'costly one' }
        ]
    },
    {
        name: 'Mobile',
        price: 18000,
        description: 'New iphone',
        canBuy: true,
        notAvailable: false,
        makeDate: Date.now(),
        image: 'images/Mobile.png',
        reviews: [
            { stars: 5, author: 'nag@gmail.com', comment: 'good one' },
            { stars: 3, author: 'indu@gmail.com', comment: 'costly one' }
        ]
    }
];
//--------------------------------------------

// Controller - class
mod.controller('ShopController', function ($scope) {
    console.log('ShopController-instance created...');
    // this.product = item;
    $scope.products = items;  // ViewModel
});

//--------------------------------------------

// Filter

mod.filter('priceDiscount', function () {
    return function (price, discount) {
        if (discount) return price - discount;
        return price - 1;
    }
});

//--------------------------------------------

mod.directive('productTitle', function () {
    return {
        restrict: 'E',
        templateUrl: 'templates/product-title.html',
        link: function (scope, ele, attr) {
            ele.on('mouseenter', function () {
                ele.find('div').css('background-color', '#def');
            });
            ele.on('mouseleave', function () {
                ele.find('div').css('background-color', '#fff');
            });
        }
    }
});

mod.directive('productTabs', function () {
    return {
        restrict: 'E',
        templateUrl: 'templates/product-tabs.html',
        controller: function ($scope) {
            $scope.tab = 1; // ng-init="tab=1"
            $scope.changeTab = function (tabIndx) {
                $scope.tab = tabIndx;
            }
            $scope.isTabSelected = function (tabIdx) {
                return $scope.tab === tabIdx;
            }
        }
    }
});

mod.directive('productReviewForm', function () {
    return {
        restrict: 'E',
        templateUrl: 'templates/product-review-form.html',
        controller: function ($scope) {
            $scope.isReviewFormOpen = false;
            $scope.newReview = {
                stars: 5,
                author: '',
                comment: ''
            };
            $scope.toggleReviewForm = function () {
                $scope.isReviewFormOpen = !$scope.isReviewFormOpen;
            }
            $scope.submitNewReview = function (product) {
                //..send to server-side with prduct identity
                product.reviews.push($scope.newReview);
                $scope.isReviewFormOpen = false;
            }
        }
    }
});
