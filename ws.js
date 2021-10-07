const { WebSocket, WebSocketServer } = require('ws');
const path = require("path");

const wss = new WebSocketServer({ port: 3001 });

wss.on('connection', function connection(ws) {
    ws.on('message', function incoming(temperature) {
        wss.clients.forEach(function each(client){
            if(client.readyState === WebSocket.OPEN){
                client.send(temperature);
            }
        });
    });
});

console.log("Server listening on posrt 3001");



