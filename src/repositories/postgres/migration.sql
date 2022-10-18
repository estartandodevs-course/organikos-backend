CREATE TABLE users (
    id serial PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    email VARCHAR (50) NOT NULL,
    phone INT (15) NOT NULL,
    adress VARCHAR (255) NOT NULL
);
