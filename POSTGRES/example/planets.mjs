import pgPromise from "pg-promise";

// CREAZIONE COLLEGAMENTO A POSTGRESS DB
const db = pgPromise()("postgres://postgres:appleinc1@localhost:5432/planets");

// SETUP DB CON CREAZIONE DI UNA TABELLA
const setupDb = async () => {

  await db.none(`

    DROP TABLE IF EXISTS planets;

    CREATE TABLE planets (
    id SERIAL NOT NULL PRIMARY KEY,
    name TEXT NOT NULL
    )
    
`);

    await db.none(`INSERT INTO planets (name) VALUES ('Earth')`)
    await db.none(`INSERT INTO planets (name) VALUES ('Mars')`)

    const planets = await db.many(`SELECT * FROM planets`)
    console.log(planets);
};

setupDb()

console.log(db);
