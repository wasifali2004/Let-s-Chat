const express = require("express");
const Chatted = require("./models/chats.js");
const mongoose = require("mongoose");

main()
    .then(() => {
        console.log("Connection successful!");
        return Chatted.insertMany(data); // Insert data
    })
    .then(() => {
        console.log("Data inserted successfully!");
    })
    .catch(err => {
        console.error(err);
    });

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/watsapp");
}

let data = [
    {
        to: "Alice",
        from: "Bob",
        message: "Hey Alice, how are you?",
        created_At: new Date()
    },
    {
        to: "John",
        from: "Emily",
        message: "Don't forget our meeting tomorrow!",
        created_At: new Date()
    },
    {
        to: "David",
        from: "Sarah",
        message: "Happy Birthday, David!",
        created_At: new Date()
    },
    {
        to: "Michael",
        from: "Emma",
        message: "See you at the concert tonight!",
        created_At: new Date()
    },
    {
        to: "Sophia",
        from: "Daniel",
        message: "Can you send me the report?",
        created_At: new Date()
    }
];