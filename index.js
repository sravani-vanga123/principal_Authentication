const express = require('express');
const mongoose = require('mongoose');

const principalRoute = require('./routes/principalRoute');
const teacherRoute = require('./routes/teacherRoute');
const studentRoute = require('./routes/studentRoute');

const app = express();

app.use(express.json());

// Routes
app.use('/api/principal', principalRoute);
app.use('/api/teacher', teacherRoute);
app.use('/api/student', studentRoute);

// MongoDB Connect
mongoose.connect('mongodb://127.0.0.1:27017/schoolDB')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log("DB Error:", err.message));

// Server
app.listen(9000, () => console.log("Server running on port 9000"));
