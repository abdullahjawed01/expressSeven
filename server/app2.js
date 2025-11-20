import express from "express";
import dotenv from "dotenv";
dotenv.config();



const app = express();
app.use(express.json())
const PORT = process.env.PORT ;

app.get("/", (req, res) => {
  try {
    res.status(200).json({ msg: "hello this is cfi block code" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error.message });
  }
});

app.post("/register",(req,res)=>{
    try {
        let UserDetails = req.body()
        console.log(UserDetails);
        res.status(200).json({UserDetails})
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error})
    }
})





app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});