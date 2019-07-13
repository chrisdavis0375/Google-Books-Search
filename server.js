const express = require("express");
const app = express();
const mongoose = require("mongoose");
const mongoURL = process.env.PROD_MONGOD || "mongodb://localhost:3000/googlebooks";
const PORT = process.env.PORT || 3000;


// MIDDLEWARE
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
if(process.env.NODE_ENV === "production") {
    app.use(express.static("client/public"));
}

// CONNECTING TO MONGOOSE
mongoose.connect(mongoURL, {useNewUrlParser: true}).then(() => {
    console.log("Connected to Google Books Database");
}).catch((error) => {
    console.log(error)
});

app.listen(PORT, () => {
    console.log("Server is running on port: " + PORT);
})