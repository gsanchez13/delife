DROP DATABASE IF EXISTS vidaveloz;
CREATE DATABASE vidaveloz;

\c vidaveloz;

DROP TABLE IF EXISTS subscribers;

CREATE TABLE subscribers(
    id SERIAL PRIMARY KEY,
    email VARCHAR UNIQUE
);

CREATE TABLE users(
    id VARCHAR PRIMARY KEY,
    email VARCHAR
);
