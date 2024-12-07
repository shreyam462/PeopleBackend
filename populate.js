const mongoose = require('mongoose');

// Connect to MongoDB
const dbUri = 'mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority';
// Replace <username>, <password>, and <dbname> with your MongoDB credentials.

mongoose.connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

// Define Person Schema
const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    gender: String,
    mobile: String
});

const Person = mongoose.model('Person', personSchema);

// Sample Data
const people = [
    { name: "John Doe", age: 30, gender: "Male", mobile: "1234567890" },
    { name: "Jane Smith", age: 25, gender: "Female", mobile: "0987654321" },
    { name: "Alice Johnson", age: 28, gender: "Female", mobile: "9876543210" },
    { name: "Bob Brown", age: 35, gender: "Male", mobile: "5555555555" }
];

// Insert Sample Data
Person.insertMany(people)
    .then(() => {
        console.log('Data populated successfully');
        mongoose.connection.close();
    })
    .catch((err) => {
        console.error('Error populating data:', err);
    });
