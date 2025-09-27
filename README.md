# Simple Auth Example

This repository demonstrates two authentication methods using Node.js and Express:

- **Basic Authentication** ([basic_auth.js](basic_auth.js))
- **Cookie-based Authentication** ([cookie_auth.js](cookie_auth.js))

## Prerequisites

- Node.js installed
- MongoDB running locally (`mongodb://127.0.0.1:27017/cookieApp`)
- Install dependencies:

```sh
npm install
```

## Running the Servers

### Basic Auth

```sh
node basic_auth.js
```
Server runs on [http://localhost:3000](http://localhost:3000)

### Cookie Auth

```sh
node cookie_auth.js
```
Server runs on [http://localhost:3001](http://localhost:3001)

---

## Testing with POSTMAN

### 1. Basic Authentication

- **Endpoint:** `GET http://localhost:3000/secure`
- **Authorization:** Set type to `Basic Auth`
  - Username: `admin`
  - Password: `12345`
- **Expected Response:**  
  `You have accessed a protected resource 🎉`

---

### 2. Cookie-based Authentication

#### a. Login

- **Endpoint:** `POST http://localhost:3001/login`
- **Body:**  
  Select `raw` and `JSON`:
  ```json
  {
    "username": "admin",
    "password": "12345"
  }
  ```
- **Expected Response:**  
  `Logged in!`  
  A cookie named `auth_cookie_token` will be set.

#### b. Access Profile

- **Endpoint:** `GET http://localhost:3001/profile`
- **Cookies:**  
  Ensure `auth_cookie_token` from login is sent with the request.
- **Expected Response:**  
  `Welcome user 1, your cookie is valid.`

#### c. Logout

- **Endpoint:** `POST http://localhost:3001/logout`
- **Cookies:**  
  Send `auth_cookie_token` cookie.
- **Expected Response:**  
  `Logged out.`

---

## Screenshots

See [public/results/](public/results/) for example POSTMAN screenshots:
- `authorization.png`
- `cookie_postman.png`
- `cookie.png`
- `login.png`