
const express = require('express');
const app = express();

app.get('/users', async (req, res) => {
    try {
        // Call to database 
        const users = await getUsers();  
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
});



module.exports = app;