const express = require("express");
const app = express();
const mongoose = require("mongoose");
const routes = require("./routes");
const PORT = process.env.PORT || 3000;
//require("./routes/apiRoutes")(app);

// MIDDLEWARE
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
if (process.env.NODE_ENV === "production") {
  app.use(express.static("./client/src"));
}

app.use(routes);
// CONNECTING TO MONGOOSE
mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooksdb")
  .then(() => {
    console.log("Connected to Google Books Database");
  })
  .catch(error => {
    console.log("Error connecting to Google Books Database: " + error);
  });

app.listen(PORT, () => {
  console.log("Server is running on port: " + PORT);
});
