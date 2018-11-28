var result = document.getElementById("result");
var btnStart = document.getElementById("btnStart");
var btnStop = document.getElementById("btnStop");
var btnSendData = document.getElementById("btnSendData");
var w;
function startWorker() {
    if (typeof (Worker) !== "undefined") {  
        w.postMessage("start");
    } else {
        result.innerHTML = "Web Worker is not supported!";
    }
}
w = new Worker("scripts/webworker.js");
w.onmessage = function (e) {
    result.innerHTML = e.data;
}
function stopWorker() {
    w.terminate();
    w = undefined;

}
function sendData() {
    w.postMessage("reverse");
}
btnStart.addEventListener("click", startWorker);
btnStop.addEventListener("click", stopWorker);
btnSendData.addEventListener("click", sendData);