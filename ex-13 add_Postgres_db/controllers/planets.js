const pgp = require("pg-promise");
const Joi = require("joi");
const cn = "postgres://postgres:appleinc1@localhost:5432/postgres1";
const db = pgp()(cn);

const setupDb = async () => {
  await db.none(`
        DROP TABLE IF EXISTS planets;

        CREATE TABLE planets(
            id SERIAL NOT NULL PRIMARY KEY,
            name TEXT NOT NULL
        )
    `);
  await db.none(`INSERT INTO planets (name) VALUES('Earth')`);
  await db.none(`INSERT INTO planets (name) VALUES('Mars')`);
};
setupDb();

const getAll = async (req, res) => {
  const planets = await db.many(`SELECT * FROM planets`);
  console.log(planets);
  res.status(200).json(planets);
};

const getOneById = async (req, res) => {
  const { id } = req.params;
  const planet = await db.oneOrNone(
    `SELECT * FROM planets WHERE id=$1;`,
    Number(id)
  );
  res.status(200).json(planet);
};

const planetSchema = Joi.object({
  name: Joi.string().required(),
});

const create = async (req, res) => {
  const { name } = req.body;
  const newPlanet = { name };
  const validateNewPlanet = planetSchema.validate(newPlanet);

  if (validateNewPlanet.error) {
    return res
      .status(200)
      .json({ msg: validateNewPlanet.error.details[0].message });
  } else {
    await db.none(`INSERT INTO planets (name) VALUES ($1)`, name);
    res.status(200).json({ msg: "the planet was created." });
  }
};

const updateById = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  await db.none(`UPDATE planets SET name=$2 WHERE id=$1`, [id, name]);
  res.status(200).json({ msg: "planets was updated" });
};

const deleteById = async (req, res) => {
  const { id } = req.params;
  await db.none(`DELETE FROM planets WHERE id=$1`, Number(id));

  res.status(200).json({ msg: "planet deleted" });
};

module.exports = {
  getAll,
  getOneById,
  create,
  updateById,
  deleteById,
};
