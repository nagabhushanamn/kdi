

define('pack1/mod1', 
['pack1/mod2'],
function (m2) {
   
    m2.doWork();
    //m3.doWork();

    var o = {
        doWork: function () {
            console.log('im Mod-1');
        }
    }
    return o;
});