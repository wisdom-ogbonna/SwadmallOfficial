const express = require('express');
const env = require('dotenv');
const app = express();
const bodyParser = require('body-parser')
const mongoose = require('mongoose');

//Routs
const userRoutes = require('./routes/user')


env.config();

//mongodb+srv://<username>:<password>@swadmall.ifk7i1v.mongodb.net/?retryWrites=true&w=majority

mongoose.connect(`mongodb+srv://Swadmall:${process.env.MONGO_DB_PASSWORD}@swadmall.3ktunnd.mongodb.net/?retryWrites=true&w=majority`,
).then(() => { console.log('Database connected')})

app.use(bodyParser());

app.use('/api', userRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});