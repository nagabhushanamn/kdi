

describe('async test-suite', function () {
    it('shud return biryani', function (done) {
        let promise = getFood();
        promise.then(food => {
            expect(food).toEqual('biryani');
            done();
        });
    })
});