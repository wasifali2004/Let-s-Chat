const express = require("express")
const mongoose = require("mongoose")
const { Schema } = require("mongoose")
const chatMongoose = new Schema({
    to: {
        type: String,
        required: true
    },
    from: {
        type: String,
        required: true
    },
    message: {
        type: String,
        maxLength: 50
    },
    created_At: {
        type: Date,
        required: true
    }
});

const Chats = mongoose.model("Chat", chatMongoose);

module.exports = Chats;