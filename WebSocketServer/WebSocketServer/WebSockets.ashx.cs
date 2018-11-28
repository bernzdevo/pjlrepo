using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

using Microsoft.Web.WebSockets;
namespace WebSocketServer
{
    /// <summary>
    /// Summary description for WebSockets
    /// </summary>
    public class WebSockets : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            if (context.IsWebSocketRequest)
            {
                context.AcceptWebSocketRequest(
                    new webSocketHandler());
            }
        }

        public bool IsReusable
        {
            get
            {
                return false;
            }
        }
    }
}