const express = require('express');
const connectDB = require('./config/db.js');

//Create server
const server = express();
// connect to db
connectDB();

// Server port
const PORT = process.env.PORT || 4000;

// import routes
server.use('/api/users', require('./routes/users.js'));

// Start server
server.listen(PORT, () => {
    console.log(`Server in ${PORT}`);
})