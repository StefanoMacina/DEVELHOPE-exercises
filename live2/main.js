const express = require("express");
const app = express();
const port = 3002;
let users = require("./users");
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ data: users });
});

app.get("/user/:id", (req, res) => {
  const { id } = req.params;
  const user = users.find((el) => el.id === Number(id));
  res.status(200).json({ data: user });
});

app.post("/newUser", (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  res.status(201).json({ data: "received" });
});

app.put("/put/:id", (req, res) => {
  const { id } = req.params;
  const {name} = req.body;
  users = users.map((el) => {

    if (el.id === Number(id)) {
      return (el = { ...el , name });
    } else {
      return el;
    }
  });
//   console.log(req.body);
  res.status(201).json({ data: users });
});

app.listen(port, () => {
  console.log(`running at http://localhost:${port}`);
});
