


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
        image: 'images/Laptop.png'
    },
    {
        name: 'Mobile',
        price: 18000,
        description: 'New iphone',
        canBuy: true,
        notAvailable: false,
        makeDate: Date.now(),
        image: 'images/Mobile.png'
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
