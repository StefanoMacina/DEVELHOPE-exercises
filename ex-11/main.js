const express = require("express");
const app = express();
const port = 3001;
const { planets } = require("./planets");
const Joi = require('joi')


app.use(express.json());

const planetSchema = Joi.object({
  id : Joi.number().integer().required(),
  name : Joi.string().required()
})


app.get("/api/planets", (req, res) => {
  res.status(200).json({ success: true, data: planets });
});


app.get("/api/planets/:id", (req, res) => {
  const { id } = req.params;
  if (id <= planets.length && id > 0) {
    const planet = planets.find((el) => el.id === parseInt(id));
    res.status(200).json({ planet });
  } else {
    res
      .status(404)
      .send(
        `<html><h1>error : there is no object at index ${id} , please go back to <a href='/api/planets'>planet list</a></h1></html>`
      );
  }
});

app.post("/api/planets", (req, res) => {
    const newPlanet = req.body;
    const validateNewPlanet = planetSchema.validate(newPlanet)
    if(validateNewPlanet.error){
      return res.status(400).json({ msg : validateNewPlanet.error.details[0].message})
    } else {
      planets.push(newPlanet);
      res.status(201).json({ msg: "planet created"});
    }

});

app.put('/api/planets/:id' , (req , res) => {
const newPlanet = req.body
const {id} = req.params
const index = planets.findIndex((p) => p.id === Number(id))
planets[index] = newPlanet
res.status(200).json({msg : 'success'})
})


app.delete('/api/planets/:id' , (req , res) => {
  const {id} = req.params
  const index = planets.findIndex((p) => p.id === Number(id))
  planets.splice(index,1)
  res.status(200).json({msg : "success"})
})


app.listen(port, () => {
  console.log(`server running at http://localhost:${port}`);
});
