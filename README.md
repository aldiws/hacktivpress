# hacktivpress
simple blog with vue and mongoose

## How To use

for server :

```
cd server
npm run dev
```

for client :
```
cd client
npm run dev
```

## API End point

```
http://localhost:3000/api
```

### User API

Method | URL | Description |
------------ | ------------- | -------------- |
POST | /register | register user
POST | /login | login user

### Article API

Method | URL | Description |
------------ | ------------- | -------------- |
GET | /articles | get all
GET | /articles/:id | get one article
GET | /author/:authorID | get article by author ID
GET | /category/:category | get article by category
POST | /articles | create article
PUT | /articles/:id | edit one article
DELETE | /articles/:id | delete one article
