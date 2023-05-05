-- Active: 1683152265250@@127.0.0.1@3306

CREATE TABLE users (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    role TEXT NOT NULL,
    created_at TEXT DEFAULT (DATETIME()) NOT NULL
);

INSERT INTO users (id, name, email, password, role)
VALUES ('u002','Erick','erick@gmail.com','$2a$12$IGPJLjtZmS1Xc8QjBsQ8cuBev7YfUbM6CNijZruzJRnsdbiyBqcPy','NORMAL'),
('u003','larissa','larissa@gmail.com','$2a$12$hryk8XRB78HitI3N56UwF.Xj14IMF1jYVdgIla4/V0VYCCquWhHca','NORMAL');


UPDATE users
SET role = "ADMIN"
WHERE id = "88a8959c-51b1-4395-bdb8-f0744143f6e8";



SELECT * FROM posts;
SELECT * FROM users;
SELECT * FROM likes_dislikes;


CREATE TABLE posts (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    creator_id TEXT NOT NULL,
    content TEXT NOT NULL,
    likes INTEGER DEFAULT (0) NOT NULL,
    dislikes INTEGER DEFAULT (0) NOT NULL,
    created_at TEXT DEFAULT (DATETIME()) NOT NULL,
    updated_at TEXT DEFAULT (DATETIME()) NOT NULL,
    FOREIGN KEY (creator_id) REFERENCES users (id) 
    ON UPDATE CASCADE
    ON DELETE CASCADE
);

INSERT INTO posts (id,creator_id,content)
VALUES 
        ('p002','u002','testando1'),
        ('p003','u003','testando2');

DROP TABLE users;
DROP TABLE posts;
DROP TABLE likes_dislikes;

CREATE TABLE likes_dislikes (
    user_id TEXT NOT NULL,
    post_id TEXT NOT NULL,
    like INTEGER NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users (id) 
    ON UPDATE CASCADE
    ON DELETE CASCADE,
    FOREIGN KEY (post_id) REFERENCES posts (id)
    ON UPDATE CASCADE 
    ON DELETE CASCADE
);

INSERT INTO likes_deslikes (user_id,post_id,like)
VALUES  ('u003','p002',1),
        ('u002','p002',1),
        ('u002','p003',1);


UPDATE posts
SET likes = 2
WHERE id = 'p002'