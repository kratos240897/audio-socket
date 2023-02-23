import { createServer } from 'http';
const server = createServer();
import { Server } from 'socket.io';
const io = new Server(server);

const PORT = process.env.PORT || 3000;

io.on('connection', (socket) => {
    socket.on('audio-stream-send', (data) => {
        console.log(data);
        io.emit('audio-stream-receive', data);
    });
});

server.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});