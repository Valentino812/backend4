const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/db-untar-cafe", {
    useNewUrlParser: true
});

const db = mongoose.connection;

db.once("open", () => {
    console.log("Successfully connected to MongoDB using Mongoose!");
});

const Member = require("./models/member")

var FindOneQuery = Member.findOne({ name: "Starship Enterprise" });
FindOneQuery.exec((err, data) => {
    if (data) console.log("Find One: " + JSON.stringify(data));
});

Member.find({ name: "Starship Enterprise" }).exec((err, data) => {
    if (data) console.log("Find: " + JSON.stringify(data));
});

Member.where('credit').gt(0).exec((err, data) => {
    if (data) console.log("Where: " + JSON.stringify(data));
});
