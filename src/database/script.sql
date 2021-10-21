
CREATE DATABASE crud_blog;
USE crud_blog;

CREATE TABLE users(
id int(10) AUTO_INCREMENT PRIMARY KEY,
fullname VARCHAR(200),
username VARCHAR(200) UNIQUE,
password VARCHAR(256),
avatar VARCHAR(200),
github VARCHAR(200),
linkedin VARCHAR(200),
bio MEDIUMTEXT,
enable INT(1),
createdAt TIMESTAMP,
updatedAt  timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
);

CREATE TABLE posts(
id int(10) AUTO_INCREMENT PRIMARY KEY,
user_id INT(10),
title VARCHAR(500),
content LONGTEXT,
category_id INT(10),
enable INT(1),
createdAt TIMESTAMP,
updatedAt timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
); 

CREATE TABLE categories(
id INT(10) AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(200) UNIQUE,
enable INT(1),
createdAt TIMESTAMP,
updatedAt timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
);

CREATE TABLE comments(
id INT(10) AUTO_INCREMENT PRIMARY KEY,
user_id INT(10),
post_id INT(10),
comment MEDIUMTEXT,
enable INT(1),
createdAt TIMESTAMP,
updatedAt timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
);


ALTER TABLE posts 
ADD FOREIGN KEY (user_id) REFERENCES users(id),
ADD FOREIGN KEY (category_id) REFERENCES categories(id);

ALTER TABLE comments 
ADD FOREIGN KEY (user_id) REFERENCES users(id);


