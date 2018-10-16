var io = require('socket.io')(3300);

let i = 0;

setInterval(() => {
  i++;
  console.log(i);
  io.emit('activity-feed', { tick: i});
}, 1000);

console.log("tick stated......");