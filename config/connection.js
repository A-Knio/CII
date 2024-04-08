const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/CII', { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.set("debug", true);

module.exports = mongoose;

