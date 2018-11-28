using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.Web.WebSockets;
namespace WebSocketServer
{
    public class webSocketHandler:WebSocketHandler
    {
        private static WebSocketCollection clients =
            new WebSocketCollection();

        private string name;
        public override void OnOpen()
        {
            name = this.WebSocketContext.QueryString["chatname"];
            clients.Add(this);
            clients.Broadcast("<strong>"+name+"</strong> has Connected!");
        }
        public override void OnMessage(string message)
        {
            clients.Broadcast(
                string.Format("<strong>{0}</strong>: {1}",name,message));
        }
        public override void OnClose()
        {
            clients.Remove(this);
            clients.Broadcast(
                string.Format("<strong>{0}</strong> leaves the chat!", name));
        }
    }
}