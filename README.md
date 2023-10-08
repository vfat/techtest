# RUNNING PROJECT
```
node index.js
```
# TEST PROJECT
```
npm test
```

# DB PROJECT
```
/db/user.sql
```

# env
buat file .env seperti contoh:

```
#apps
PORT=3000 #port aplikasi
#db
DBUSER="DBUSER" #database username
DBHOST="localhost" #database host
DBNAME="databasename" #database name
DBPASSWORD="dbpassword" #database password
DBPORT=5453 #database port

#keystore
JWTKEY="JWTKEY" #jwt key
```

# API SPECS

## API Registrasi:

Endpoint: POST  /api/register

Deskripsi: Digunakan untuk mendaftarkan user baru dalam sistem dengan menginput nama, email,
password


Request Body: Product details (nama, email,
password).
```json
{
  "name":"user01",
  "email":"user01@email.com",
  "password":"sssss"
}
```

Response: Respon JSON yang mengkonfirmasi pendaftaran User.

```json
{
  "message": "berhasil",
  "success": true,
  "data": {
    "id": "1",
    "name": "user01",
    "email": "user01@email.com"
  }
}
```

---

## API Login:

Endpoint: POST /api/login

Description: Digunakan untuk dapat login menggunakan email dan password ke dalam sistem.

Request Body: credential (email, password).
```json
{
  "email":"user01@email.com",
  "password":"sssss"
}
```

Response: Respon JSON yang mengkonfirmasi login.
```json
{
  "message": "Authentikasi berhasil",
  "success": true,
  "data": {
    "token": --JWT--
  }
}
```
## API me:

Endpoint: GET /api/me

Description: untuk mendapat info user yang login menggunakan jwt.

Headers :
- Authorization : token 

Response: JSON response.

```json

{
  "message": "berhasil",
  "success": true,
  "data": [
    {
      "id": "1",
      "name": "user01",
      "email": "user01@email.com",
      "password": "$2b$10$xxMu804qPI/wfHPKMWL3NONl6fZe4mVmiuIjyXphiga4J9xB3dsfy"
    }
  ]
}
```
