
const express = require('express');
const app = express();

app.use(express.json());

app.get('/users', (req, res) => {
  res.status(200).json([{ id: 1, name: 'John Doe' }, { id: 2, name: 'Jane Doe' }]);
});
app.listen(process.env.PORT || 500, async () => {
    console.log("The server is running on")
    // await connectDB();
  });

module.exports = app;
