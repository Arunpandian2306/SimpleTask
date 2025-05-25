# BE Sample Ecommerce Task



## Technologies Used
- **Node.JS**
- **Express.js**: Framework.
- **PostgreSQL**: Database.
- **POST MAN**: To Test the Apis

## Setup Instructions

### Installation
```bash
git clone https://github.com/Arunpandian2306/SimpleTask.git
```
### node version 18 or above

```bash
rm -rf node_modules package-lock.json
```

```bash
npm cache clean --force
```

```bash
npm install
```

### Install postgress and Pgadmin

### Create Data base as : ecommerce

### Restore the dump in path : router/Dump/Ecommerce.sql

Then to run API Use
```bash
nodemon start
```

#### Auth Endpoints:
- POST: http://localhost:3000/auth/register
- Sample Request
```json
{
    "username": "arun",
    "email": "arun@example.com",
    "password": "securepassword123"
}
```

- Sample Response

```json
{
    "message": "User registered successfully",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNjZWVjN2JjLTc1ZTEtNDcyYS04ZGU4LWY4N2UyMmE4NjI1NCIsImVtYWlsIjoiYXJ1bkBleGFtcGxlLmNvbSIsInJvbGUiOiJjdXN0b21lciIsImlhdCI6MTc0ODE4NzQ5MSwiZXhwIjoxNzQ4MTkxMDkxfQ.aYiUWmqRsosbQX7Xc-1SIZPJuonWdBrDHwJdI-jJ6sM",
    "user": {
        "id": "cceec7bc-75e1-472a-8de8-f87e22a86254",
        "username": "arun",
        "email": "arun@example.com",
        "role": "customer"
    }
}
```

- POST: http://localhost:3000/auth/login
- Sample Request
```json
{
  "email": "john@example.com",
  "password": "securepassword123"
}

```

- Sample Response

```json
{
    "message": "Login successful",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU0NGY4YmRjLWE2NGMtNGI0My1hNTg4LTVlNzZkYWQwYmFjNiIsImVtYWlsIjoiam9obkBleGFtcGxlLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTc0ODE4NzYyNCwiZXhwIjoxNzQ4MTkxMjI0fQ.7s4b_gRw_TnDbhW7CWCe5RkJjUh0M3wuxzY41_VV6EE",
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU0NGY4YmRjLWE2NGMtNGI0My1hNTg4LTVlNzZkYWQwYmFjNiIsImVtYWlsIjoiam9obkBleGFtcGxlLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTc0ODE4NzYyNCwiZXhwIjoxNzQ4MTg4NTI0fQ.nd1Sg_xWyjA1rO6Ge8TkYfxI-pRw4ZWMSZdqfGJSVaE",
    "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU0NGY4YmRjLWE2NGMtNGI0My1hNTg4LTVlNzZkYWQwYmFjNiIsImlhdCI6MTc0ODE4NzYyNCwiZXhwIjoxNzQ4MTkxMjI0fQ.wd1uliBgzdUI4bQv7VWfUuLIq7Ovq2W6YCpWmB3_GEE",
    "user": {
        "id": "544f8bdc-a64c-4b43-a588-5e76dad0bac6",
        "email": "john@example.com",
        "role": "admin"
    }
}
```
- POST: http://localhost:3000/auth/createadmin
- Sample Request
```json
{
    "username": "Arun",
    "email": "arunpandian@example.com",
    "password": "securepassword123"
}
```

- Sample Response

```json
{
    "message": "Admin registered successfully",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjkzOTQyODNkLTZmNzYtNDJlOS05ZDgyLWVhZjExNGZjZDE2NiIsImVtYWlsIjoiYXJ1bnBhbmRpYW5AZXhhbXBsZS5jb20iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3NDgxODc3MTQsImV4cCI6MTc0ODE5MTMxNH0.Ah0P508CjU_CVxeDW3sLc-8M0UNvqZBXIhm3uwHCbPw",
    "user": {
        "id": "9394283d-6f76-42e9-9d82-eaf114fcd166",
        "username": "Arun",
        "email": "arunpandian@example.com",
        "role": "admin"
    }
}
```


#### Category Endpoints:
- POST: http://localhost:3000/catagory/create
- Sample Request
```json
{
  "name": "Eloctronics",
  "description": "Category for Electronic products"
}
```

- Sample Response

```json
{
    "id": "d28ba073-cc87-4306-92f3-67bb877a49d0",
    "name": "Eloctronics",
    "description": "Category for Electronic products",
    "updatedAt": "2025-05-25T10:13:48.981Z",
    "createdAt": "2025-05-25T10:13:48.981Z"
}
```

- GET: http://localhost:3000/catagory/list

- Sample Response

```json
[
    {
        "id": "ade70b5a-543b-445f-beb7-a25baf5b5d5b",
        "name": "Noodles",
        "description": "Category for Food products",
        "createdAt": "2025-05-25T06:48:26.362Z",
        "updatedAt": "2025-05-25T06:48:26.362Z"
    },
    {
        "id": "7e442712-f27c-4bfc-90f5-3741750b934e",
        "name": "Notes",
        "description": "Category for Stationary products",
        "createdAt": "2025-05-25T06:48:37.650Z",
        "updatedAt": "2025-05-25T06:48:37.650Z"
    },
    {
        "id": "d28ba073-cc87-4306-92f3-67bb877a49d0",
        "name": "Eloctronics",
        "description": "Category for Electronic products",
        "createdAt": "2025-05-25T10:13:48.981Z",
        "updatedAt": "2025-05-25T10:13:48.981Z"
    }
]
```
- PUT: http://localhost:3000/catagory/ade70b5a-543b-445f-beb7-a25baf5b5d5b
- Sample Request
```json
{
  "name": "Fruits",
  "description": "Updated category description"
}

```

- Sample Response

```json
{
    "id": "ade70b5a-543b-445f-beb7-a25baf5b5d5b",
    "name": "Fruits",
    "description": "Updated category description",
    "createdAt": "2025-05-25T06:48:26.362Z",
    "updatedAt": "2025-05-25T15:46:29.798Z"
}
```