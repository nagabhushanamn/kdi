


function doTeach() {
    let tnrName = "Nag";  // will get moved to heap
    try {
        console.log(tnrName + ' teaching topic-1');
        //throw new Error('hate topic-1');
        function topic2() {
            console.log(tnrName + ' teaching topic-2');
            //throw new Error('hate topic-2');
        }
        setTimeout(topic2, 5000);
        console.log('topic-1 end..');
    } catch (e) {
        console.log('i caught - ' + e.message);
    }
}

doTeach();