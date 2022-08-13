## Udacity Backend Storefront API Project

A simple backend project that provides the basic functionality for an ecommerce website.

## Setup

### Getting Started

### 1. Project Setup

1. Install required dependencies `npm install`
2. API Server runs on `localhost` and PORT `5000`

### 2. Database Setup

1. Database runs on `localhost` and PORT `5432`
2. Create a Development Database `CREATE DATABASE store`
3. Create a Testing Database `CREATE DATABASE store_test`
4. Create a Database User `CREATE USER manager WITH PASSWORD 'pw45321'`
5. Grant All Privileges on Created Database User `GRANT ALL PRIVILEGES ON DATABASE store TO manager`

### Environment Variables

Replace ####'s with your own information.

```
DB_HOST=127.0.0.1
DB_NAME=store
DB_TEST=store_test
DB_USER= ####
DB_PASSWORD= ####
PEPPER= ####
SALT_ROUNDS=10
TOKEN_SECRET= ####
ENV=DEV
```

## Run

### 1. Development

Run the project in development mode using `npm run start`

### 2. Test

Run the project in testing mode using `npm run test`
