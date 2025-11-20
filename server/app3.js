// import express from "express"


// const app = express();
// app.use(express.json())
// const PORT = 5000


// app.post("/login", (req, res) => {
//     try {

//         let user = req.body.user
//         let pass = req.body.pass



//         if (pass.length < 3) {
//             return res.status(405).json({ msg: "Pass is too short" })
//         }

//         let outermessge = `mera email hai ${user} and pass hai ${pass}`
//         console.log(outermessge);
//         res.status(200).json({ msg: "login successfull", fname: outermessge });

//     } catch (error) {
//         console.log(error);
//         res.status(500).json({ msg: error.message });
//     }
// });





// app.listen(PORT, () => {
//     console.log(`Server running at http://localhost:${PORT}`);
// });

import express from "express";

const app = express();
app.use(express.json());
const PORT = 5000;

app.post("/login", (req, res) => {
  try {
    let user = req.body.user;
    let pass = req.body.pass;

    if (pass.length < 3) {
      return res.status(405).json({ msg: "Pass is too short" });
    }

    let outermessge = `mera email hai ${user} and pass hai ${pass}`;
    console.log(outermessge);

    res.status(200).json({ msg: "login successful", fname: outermessge });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});