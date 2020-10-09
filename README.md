# E-Book SAFEr

Simple and sample APP to save your e-book collection.

## Create a .env file and set the required values.
```
cp .env.example .env
```


## Create the tables 
```
CREATE TABLE IF NOT EXISTS user (
    user_id timeuuid,
    name text,
    email text,
    active boolean,
    password text,
    created_at timestamp,
    PRIMARY KEY (user_id, email)
);

CREATE TABLE IF NOT EXISTS book (
    book_id timeuuid,
    user_id timeuuid,
    name text,
    thumbnail text,
    link text,
    created timestamp,
    completed boolean,
    PRIMARY KEY (book_id, user_id)
);
```

