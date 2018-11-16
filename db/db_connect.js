const mongoose = require('mongoose');

const DB_USER = "test";
const DB_PASS = "test123";

mongoose.connect(`mongodb://${DB_USER}:${DB_PASS}@ds053128.mlab.com:53128/linki`, { useNewUrlParser: true } );