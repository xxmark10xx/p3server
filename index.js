require('dotenv').config();
require('./models');
const express = require('express');
const cors = require('cors');

const multer = require('multer')
const upload = multer()
// socket stuff
const io = require("socket.io")(4004, {
	cors: {
		origin: ["http://localhost:3000"]
	}
})


io.on("connection", socket => {
	console.log(socket.id)
	socket.on('send-message', (string) => {
		console.log("testing socket log " + string)
		socket.emit("received-message", string)
	})
})


const app = express();
const PORT = process.env.PORT || 3001;

// const io = require('socket.io')(8900, {
// 	cors: {
// 		origin: 'http://localhost:3001',
// 		credentials: true
// 	}
// });

// io.on('connection', (socket) => {
// 	console.log('a user connected');
// });

// middlewares
app.use(cors());
app.use(express.json());
app.use(upload.array());
app.use(express.static('public'));

const myMiddleWare = (req, res, next) => {
	// console.log(`incoming request: ${req.method} - ${req.url}`);
	// move along there
	next();
};

app.use(myMiddleWare);

app.get('/', (req, res) => {
	res.json({ msg: 'welcome to the user app 👋' });
});


// controllers
app.use('/api-v1/users', require('./controllers/api-v1/users'));
app.use('/api-v1/profile', require('./controllers/api-v1/profile'));
app.use('/api-v1/rooms', require('./controllers/api-v1/rooms'));
app.use('/api-v1/timeline', require('./controllers/api-v1/timeline'));
app.use('/api-v1/images', require('./controllers/api-v1/images'));

const server = app.listen(PORT, () => console.log(`listening to the smooth sounds of port ${PORT} in the morning 🌊`));

const io = require('socket.io')(server, {
	pingTimeout: 60000,
	cors: {
		origin: 'http://localhost:3000'
	}
});

io.on('connection', (socket) => {
	console.log('connected to socket.io');

	socket.on('setup', (currentUser) => {
		socket.join(currentUser.id);
		console.log(currentUser.id);
		socket.emit('connected');
	});

	// socket.on('main chat', (room) => {
	// 	socket.join(room);
	// 	console.log('User joined room: ' + room);
	// });

	socket.on('send message', (message) => {
		socket.join(message);
		console.log('this is message' + message);
	});
});
