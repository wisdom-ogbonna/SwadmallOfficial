const express = require('express');
const env = require('dotenv');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
//Routs
const authRoutes = require('./routes/auth');
const adminRoutes = require('./routes/admin/auth');
const categoryRoutes = require('./routes/category');
const productRoutes = require('./routes/product');
const cartRoutes = require('./routes/cart');



env.config();

//mongodb+srv://<username>:<password>@swadmall.ifk7i1v.mongodb.net/?retryWrites=true&w=majority

mongoose.connect(`mongodb+srv://Swadmall:${process.env.MONGO_DB_PASSWORD}@swadmall.3ktunnd.mongodb.net/?retryWrites=true&w=majority`,
).then(() => { console.log('Database Connected')})

app.use(cors());
app.use(express.json());
app.use('/public', express.static(path.join(__dirname, 'uploads')));
app.use('/api', authRoutes);
app.use('/api', adminRoutes);
app.use('/api', categoryRoutes);
app.use('/api', productRoutes);
app.use('/api', cartRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});