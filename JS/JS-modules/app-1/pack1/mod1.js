
var kongs = kongs || {};

(function () {

    kongs.mod2.doWork();
    kongs.mod3.doWork();

    var o = {
        doWork: function () {
            console.log('im Mod-1');
        }
    }

    kongs.mod1 = o;

})();