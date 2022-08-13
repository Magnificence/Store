## API Endpoints

#### Products

- **Index**
  URL: `https://localhost:5000/products/`
  METHOD: `GET`
  REQUEST HEADER: `NONE`
  REQUEST BODY: `NONE`
  SUCCESS CODE: `200`
  SUCCESS RESPONSE: `List of All Products`
  ERROR CODE: `401` OR `500`
  ERROR RESPONSE: `Can not retrieve Products`

- **Show**
  URL: `https://localhost:5000/products/<id>`
  METHOD: `GET`
  REQUEST HEADER: `NONE`
  SUCCESS CODE: `200`
  SUCCESS RESPONSE: `{"id": "<ProductID>", "name": "<ProductName>", "price": "<ProductPrice>"}`
  ERROR CODE: `401` OR `500`
  ERROR RESPONSE: `Can not retrieve product: <id>`

- **Create**
  URL: `https://localhost:5000/products/`
  METHOD: `POST`
  REQUEST HEADER: `Authorization: Bearer <Token>`
  REQUEST BODY: `{"name": "<ProductName>", "price": "<ProductPrice>"}`
  SUCCESS CODE: `200`
  SUCCESS RESPONSE: `{"id": "<ProductID>", "name": "<ProductName>", "price": "<ProductPrice>"}`
  ERROR CODE: `401` OR `500`
  ERROR RESPONSE: `Can not create product`

#### Users

- **Index**
  URL: `https://localhost:5000/users/`
  METHOD: `GET`
  REQUEST HEADER: `Authorization: Bearer <Token>`
  REQUEST BODY: `NONE`
  SUCCESS CODE: `200`
  SUCCESS RESPONSE: `List of All Users`
  ERROR CODE: `401` OR `500`
  ERROR RESPONSE: `Can not retrieve Users`

- **Show**
  URL: `https://localhost:5000/users/<id>`
  METHOD: `GET`
  REQUEST HEADER: `Authorization: Bearer <Token>`
  REQUEST BODY: `NONE`
  SUCCESS CODE: `200`
  SUCCESS RESPONSE:
  `{"id": "<ID>", "firstname": "<FirstName>", "lastname": "<LastName>", "password": "<Password>"}`
  ERROR CODE: `401` OR `500`
  ERROR RESPONSE: `Can not retrieve user: <UserId>`

- **Create**
  URL: `https://localhost:5000/users/`
  METHOD: `POST`
  REQUEST HEADER: `Authorization: Bearer <Token>`
  REQUEST BODY:
  `{"id": "<ID>", "firstname": "<FirstName>", "lastname": "<LastName>", "password": "<Password>"}`
  SUCCESS CODE: `200`
  SUCCESS RESPONSE: `NONE`
  SUCCESS RESPONSE HEADER: `<JWToken>`
  ERROR CODE: `401` OR `500`
  ERROR RESPONSE: `Can not create user: <UserId>`

#### Orders

- **Show Active Order By User Id**
  URL: `https://localhost:5000/orders/<UserID>`
  METHOD: `GET`
  REQUEST HEADER: `Authorization: Bearer <Token>`
  REQUEST BODY:
  `{"id": "<ID>", "firstname": "<FirstName>", "lastname": "<LastName>", "password": "<Password>"}`
  SUCCESS CODE: `200`
  SUCCESS RESPONSE: `NONE`
  SUCCESS RESPONSE HEADER: `<JWToken>`
  ERROR CODE: `401` OR `500`
  ERROR RESPONSE: `Can not create user: <UserId>`

## Database Model

#### Product

- Id [INT] [PK]
- Name [VARCHAR]
- Price [INT]

#### User

- Id [INT] [PK]
- FirstName [VARCHAR]
- LastName [VARCHAR]
- Password [VARCHAR]

#### Orders

- Id [INT] [PK]
- User_Id [INT] [FK]
- Order_Status [VARCHAR]

### Orders_Products

- Id [INT] [PK]
- Order_Id [INT] [FK]
- Product_Id [INT] [FK]
- Product_Qty [INT]
