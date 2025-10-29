const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect(
            "mongodb://user:qwerty@localhost:27017/todo-tdd"
        );
    } catch (err) {
        console.log("Error connecting to MongoDB");
        console.log(err);
    }
}

module.exports = { connect };