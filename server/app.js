import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT ;

app.get("/", (req, res) => {
  try {
    res.status(200).json({ msg: "hello this is cfi block code" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error.message });
  }
});



app.get("/about", (req, res) => {
  try {
    res.status(200).json({ msg: "hello this is cfi block code for about" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error.message });
  }
});

app.get("/contact", (req, res) => {
  try {
    res.status(200).json({ msg: "hello this is cfi block code for contact" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error.message });
  }
});

app.get("/signin", (req, res) => {
  try {
    res.status(200).json({ msg: "hello this is cfi block code for sign in page" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error.message });
  }
});


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});



