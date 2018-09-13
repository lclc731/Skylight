const express = require("express");
const mongoose = require("mongoose");

const users = require("./routes/api/users");
const doctors = require("./routes/api/doctors");

const app = express();

// DB config
const db = require("./config/key").mongoURI;

// Connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log("MongoDB connect."))
  .catch(err => console.log(err));

app.get("/", (req, res) => res.send("hello!!!"));

//Use Routes
app.use("/api/users", users);
app.use("/api/doctors", doctors);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server running on port ${port}`));
