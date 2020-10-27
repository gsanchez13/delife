DROP DATABASE IF EXISTS vidaveloz;
CREATE DATABASE vidaveloz;

\c vidaveloz;

DROP TABLE IF EXISTS users;

CREATE TABLE users(
    id VARCHAR PRIMARY KEY,
    email VARCHAR
);