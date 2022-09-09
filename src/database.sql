CREATE TABLE users (
    user_ID INT PRIMARY KEY,
    firstName   VARCHAR(50),
    lastName    VARCHAR(100),
    USER_NAME   VARCHAR(50),
    PASSWORD    VARCHAR(100)

);

CREATE TABLE inventory (
    item_ID INT PRIMARY KEY,
    item_Name   VARCHAR(100),
    description text,
    quantity    INT,
    user_ID     INT,
    CONSTRAINT userID FOREIGN KEY (user_ID) REFERENCES users(user_ID)

);

INSERT INTO users(firstName, lastName, USER_NAME, PASSWORD) VALUES (sam, zett, szett27, 12345);
