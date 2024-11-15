
const express = require('express');
const app = express();

app.use(express.json());

app.get('/users', (req, res) => {
    res.status(200).json([{ id: 1, name: 'Menna Singergy' }, { id: 2, name: 'Nadeen Serag' }]);
});
app.listen(process.env.PORT || 5004, async () => {
    console.log("The server is running on")

});

module.exports=




