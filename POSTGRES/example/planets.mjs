import pgPromise from "pg-promise";

// CREAZIONE COLLEGAMENTO A POSTGRESS DB
const db = pgPromise()("postgres://postgres:postgres@localhost:5432/postgres");

// SETUP DB CON CREAZIONE DI UNA TABELLA
const setupDb = async () => {
    
  await db.none(`
    DROP TABLE IF EXIST planets;

    CREATE TABLE planets (
    id SERIAL NOT NULL PRIMARY KEY,
    name TEXT NOT NULL
    )
`);

    await db.none(`INSERT INTO planets (name) VALUE ('Earth')`)
    await db.none(`INSERT INTO planets (name) VALUE ('Mars')`)

    const planets = await db.many(`SELECT * FORM planets`)
    console.log(planets);
};

setupDb()

console.log(db);
