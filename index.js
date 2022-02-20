const express = require("express");
const mongoose = require("mongoose");
const userModel = require("./models/users");

const app = express();
app.use(express.json());

app.post("/users", async (req, res) => {
  const usersT = new userModel(req.body);

  try {
    await usersT.save((err) => {
      if (err) {
        res.send(err);
      } else {
        res.send(usersT);
      }
    });
  } catch (err) {
    res.status(500).send(err);
  }
});

mongoose.connect(
  "mongodb+srv://aryan:lucifer@cluster0.sw9nz.mongodb.net/wk4_comp3133?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

app.listen(3000, () => {
  console.log("Server is running...");
});
