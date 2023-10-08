import User from "./models/UserModel";
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.json());

const connectToDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://admin-dhanraj:runboyrun@cluster0.nhldk9d.mongodb.net/",
      {
        useUnifiedTopology: true,
      }
    );
    console.log("mongoDB connected");
  } catch (error) {
    console.log(error);
  }
};
connectToDB();

//signup route
app.post("/signup", async (req, res) => {
  try {
    const { email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(422).json({ error: "User already exists" });
    }
    //Creating a new User
    const newUser = new User({ email, password });
    await newUser.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Registration unsuccessfull" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
