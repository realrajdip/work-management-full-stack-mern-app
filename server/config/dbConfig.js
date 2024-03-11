const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://rajdip:11password@cluster0.plblbaz.mongodb.net/new2?retryWrites=true&w=majority&appName=Cluster0");

const connection = mongoose.connection;

connection.on('connected', () => {
    console.log('Mongo db connected successfully');
})

connection.on('error', (err) => {
    console.log('Mongo db connection error: ', err);
})

module.exports = mongoose;