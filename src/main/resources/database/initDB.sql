CREATE TABLE IF NOT EXISTS clients
(
    id    BIGSERIAL PRIMARY KEY ,
    secondName  VARCHAR(200) NOT NULL ,
    firstName VARCHAR(200) NOT NULL ,
    lastName VARCHAR(200) NOT NULL ,
    year VARCHAR(200) NOT NULL ,
    number VARCHAR(20)  NOT NULL
);
CREATE SEQUENCE clients_id_seq START WITH 3 INCREMENT BY 1;