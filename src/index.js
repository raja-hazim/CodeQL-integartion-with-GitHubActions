const express = require('express');
const mongoose = require('mongoose');
const authRouter = require('./controllers/authController');
const app = express();
// Connect to database (replace with your connection string)
mongoose.connect('mongodb://localhost:27017/my-secure-app', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});
app.use('/api/auth', authRouter);
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
