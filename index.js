const express = require("express")
const mongoose = require("mongoose")
const app = express();
const {Schema} = mongoose;
const path = require("path")
const chat = require("./models/chats.js")
const methodOverride = require("method-override");

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")
app.use(express.static(path.join(__dirname, "Public")))
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"))

main()
.then(res => {
    console.log("Connection was Successful!")
})
.catch(err => {
    console.log(err)
})

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/watsapp")
}

app.get("/", (req, res) => {
    res.send("Root is working!")
})

//Index Route
app.get("/chats", async (req, res) => {
    let com = await chat.find();
    console.log(com);
    res.render("index.ejs", {com})
})

//Send Route
app.get("/chats/send", (req, res) => {
    res.render("new.ejs");
})

app.put("/chats/:id", async (req, res) => {
    let {id} = req.params;
    let {message:newChat} = req.body;
    let update = await chat.findByIdAndUpdate(id, {message:newChat}, {runValidators:true, new:true});
    res.redirect("/chats"); 
})

app.delete("/chats/:id", async (req, res) => {
    const {id} = req.params;
    let chatDel = await chat.findByIdAndDelete(id);
    res.redirect("/chats")

})

app.post("/chats", (req, res)=> {
    const {to, from , message} = req.body;
    const newChat = new chat( {
        from: from,
        to: to,
        message: message,
        created_At: new Date()
    });

    newChat.save().then(res => {
        console.log(res);
    })
    .catch(err => {
        console.log(err);
    })

    res.redirect("/chats")
})

app.get("/chats/:id/edit", async (req,res) => {
    const {id} = req.params;
    let ch = await chat.findById(id);
    res.render("edit.ejs", {ch})

})

app.listen(8080, () => {
    console.log("Listening!");
})