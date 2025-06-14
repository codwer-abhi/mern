require('dotenv').config()
const express = require('express');
const cors = require('cors');
const app = express();
const { connectToDatabase } = require('./utils/db');
const contactrouter=require('./Router/Contact-route');
const servicerouter = require('./Router/Service-router');
const adminrouter = require('./Router/admin-router');
app.use(cors( ));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
const allrouter= require('./Router/auth-router');
const errorMiddleware = require('./MIddlewares/error-Middleware');
app.use('/route', allrouter);
app.use('/contact',contactrouter);
app.use('/api', servicerouter);
app.use('/admin', adminrouter);
app.use(errorMiddleware);

connectToDatabase(process.env.MONGODB_URI)
.then(() => {
  console.log('Connected to MongoDB successfully');
  app.listen(process.env.PORT, () => {
  console.log(`Server is running at http://localhost:${process.env.PORT}`);
});
}).catch((error) => {
  console.error('Error connecting to the database:', error);
  throw error; // Re-throw the error to be handled by the caller
});
