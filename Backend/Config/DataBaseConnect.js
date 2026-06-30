const mongoose = require('mongoose');
require('dotenv').config();

const Dbconnect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    });
    console.log('Successfully connected to MongoDB');
  } catch (error) {
    console.log('Database not connected');
    console.error(error.message);
    process.exit(1);
  }
};

module.exports = { Dbconnect };