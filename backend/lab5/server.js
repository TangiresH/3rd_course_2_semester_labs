const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const carRoutes = require('./routes/car-route');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://crazysparrow:564793@cluster0.8aeyxsx.mongodb.net/BE_lab6?retryWrites=true&w=majority')
    .then(() => console.log('Successfully connected to MongoDB'))
    .catch(err => console.error('Connection error', err));

app.use('/car', carRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
