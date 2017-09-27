

(function () {

    let mod = angular.module('shop.service', []);
    //-------------------------------------------
    mod.factory('productService', function ($http, $q) {
        let serv = {
            loadAllProducts: function () {
                let apiUrl = "http://0.0.0.0:3000/api/products";
                let def = $q.defer();
                let promise = $http.get(apiUrl);
                promise.then((resp) => {
                    def.resolve(resp.data);
                }, (error) => {
                    def.resolve(error);
                });
                return def.promise;
            },
            loadAllReviews: function (id) {
                let apiUrl = `http://0.0.0.0:3000/api/products/${id}/reviews`;
                let def = $q.defer();
                let promise = $http.get(apiUrl);
                promise.then((resp) => {
                    def.resolve(resp.data);
                }, (error) => {
                    def.resolve(error);
                });
                return def.promise;
            },
            submitNewReview: function (product, review) {
                let apiUrl = `http://0.0.0.0:3000/api/products/${product.id}/reviews`;
                let def = $q.defer();
                let promise = $http.post(apiUrl, review);
                promise.then((resp) => {
                    def.resolve(resp.data);
                }, (error) => {
                    def.resolve(error);
                });
                return def.promise;
            }
        };
        return serv;
    });

})();