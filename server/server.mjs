// server.js
import express from "express";
import User from "./models/User.js";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import bcrypt from "bcrypt"; // Import bcrypt

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(
  cors({
    credentials: true,
    origin: "http://127.0.0.1:5173",
  })
);
const connectToDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://admin-dhanraj:runboyrun@cluster0.nhldk9d.mongodb.net/",
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      }
    );
    console.log("MongoDB connected");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

connectToDB();

// Signup route
app.post("/signup", async (req, res) => {
  const { email, password } = req.body;
  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(422).json({ error: "User already exists" });
    }

    // Hash the password using bcrypt before saving it
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user with the hashed password
    const newUser = new User({ email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ error: "Registration unsuccessful" });
  }
});

app.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the user exists
    const user = await User.findOne({ email });

    // If the user doesn't exist, return an error
    if (!user) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    // Compare the provided password with the hashed password in the database
    const passwordMatch = await bcrypt.compare(password, user.password);

    // If the passwords don't match, return an error
    if (!passwordMatch) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    // If the user exists and the password is correct, you can generate a JWT token here
    // and send it back in the response if needed.

    res.status(200).json({ message: "Successfully signed in" });
  } catch (error) {
    console.error("Sign-in error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// ... (your other routes and server setup)

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
