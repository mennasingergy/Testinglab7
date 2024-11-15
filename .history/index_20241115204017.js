
const express = require('express');
const app = express();

app.use(express.json());

app.get('/users', (req, res) => {
    res.status(200).json([{ id: 1, name: 'Menna Singergy' }, { id: 2, name: 'Nadeen Serag' }]);
});
app.listen(process.env.PORT || 5001, async () => {
    console.log("The server is running on")
    // await connectDB();
});




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
