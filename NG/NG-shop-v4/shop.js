

(function () {

    let mod = angular.module('shop', ['shop.service']);

    //--------------------------------------------

    // Controller - class
    mod.controller('ShopController', function ($scope, productService) {
        productService.loadAllProducts()
            .then((items) => {
                $scope.products = items;
            }, (error) => {
                $scope.error = error;
            });
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

    mod.directive('productTabs', function (productService) {
        return {
            restrict: 'E',
            templateUrl: 'templates/product-tabs.html',
            controller: function ($scope) {
                $scope.tab = 1; // ng-init="tab=1"
                $scope.changeTab = function (tabIndx, product) {
                    $scope.tab = tabIndx;
                    if (tabIndx === 3) {
                        productService.loadAllReviews(product.id)
                            .then((reviews) => {
                                product.reviews = [...reviews];
                            })
                    }
                }
                $scope.isTabSelected = function (tabIdx) {
                    return $scope.tab === tabIdx;
                }
            }
        }
    });

    mod.directive('productReviewForm', function (productService) {
        return {
            restrict: 'E',
            templateUrl: 'templates/product-review-form.html',
            controller: function ($scope) {
                $scope.isReviewFormOpen = false;
                $scope.newReview = {
                    stars: 5,
                    author: '',
                    message: ''
                };
                $scope.toggleReviewForm = function () {
                    $scope.isReviewFormOpen = !$scope.isReviewFormOpen;
                }
                $scope.submitNewReview = function (product) {
                    productService.submitNewReview(product,$scope.newReview)
                        .then((review) => {
                            product.reviews.push(review);
                            $scope.isReviewFormOpen = false;
                        });

                }
            }
        }
    });


})();