import * as SocketIo from 'socket.io-client';

class SocketClient {
  constructor() {
    // get url from config
    this.socketClient = new SocketIo("http://localhost:3300");
  }

  subscribe = (event, callback) => {
    this.socketClient.on(event, (data) => {
      callback(data);
    });  
  }
}

export const socketClient = new SocketClient();

export default socketClient;