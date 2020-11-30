const express = require('express');
const connectDB = require('./config/db.js');
const cors = require('cors');
//Create server
const server = express();
// connect to db
connectDB();

// Enabled cors
server.use(cors());

// Enabled express.json
server.use(express.json({ extended:true }));

// Server port
const port = process.env.port || 4000;

// import routes
server.use('/api/users', require('./routes/users.js'));
server.use('/api/auth', require('./routes/auth.js'));
server.use('/api/projects', require('./routes/projects.js'));
server.use('/api/tasks', require('./routes/tasks.js'));

// Start server
server.listen(port, '0.0.0.0', () => {
    console.log(`Server in ${PORT}`);
})