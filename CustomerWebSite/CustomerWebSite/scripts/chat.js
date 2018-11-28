var ws;
var sendMessage = document.getElementById("btnSend");
var leaveChat = document.getElementById("btnLeave");

var chatName = prompt("Please type your name!");

leaveChat.addEventListener("click", function () {
    ws.close();
});

window.onload = function () {
    var conversation = document.getElementById("chatbox");
    var url = "ws://localhost:49203/WebSockets.ashx?chatname="+chatName;
    ws = new WebSocket(url);
    ws.onopen = function () {
        var span = document.createElement("span");
        span.innerHTML = "Connected!!";
        conversation.appendChild(span);
    }
    ws.onclose = function () {
        conversation.innerHTML = "Closed Connection!";
    };
    sendMessage.addEventListener("click", function () {
        var message = document.getElementById("txtMessage");
        ws.send(message.value);
        message.value = "";
    });
    ws.onmessage = function (e) {
        if (ws.bufferedAmount==0) {
            var span2 = document.createElement("span");
            span2.innerHTML = "<br> " + e.data.toString();
            conversation.appendChild(span2);
        }
    }

}