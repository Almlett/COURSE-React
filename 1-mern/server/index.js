const express = require('express');
const connectDB = require('./config/db.js');

//Create server
const server = express();
// connect to db
connectDB();

// Enabled express.json
server.use(express.json({ extended:true }));

// Server port
const PORT = process.env.PORT || 4000;

// import routes
server.use('/api/users', require('./routes/users.js'));

// Start server
server.listen(PORT, () => {
    console.log(`Server in ${PORT}`);
})