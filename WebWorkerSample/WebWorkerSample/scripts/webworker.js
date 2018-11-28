
//function Count(direction) {
//    if (direction == "reverse") {
//        i = i - 1;
//    } else {
//        i = i + 1;
//    }
//    postMessage(i);
//    console.log(i);
//}
var i = 0;
onmessage = function (e) {
    msg = e.data;
    function Count() {
        if (msg == "reverse") {
            i = i - 1;
            postMessage(i);
        } else if (msg == "start") {
            i = i + 1;
            postMessage(i);
        }
    }
    setInterval(Count, 1000);
}