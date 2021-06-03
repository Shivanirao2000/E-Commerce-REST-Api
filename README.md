
# E-Commerce-REST-Api
> This is an E-Commerce REST Api where user can make purchases of different range of products.

## Features
* System architecture – MVC architecture.
* Backend server environment – Node.js
* Backend Framework – Express
* Database - MongoDB

## Routes

### Authentication Routes

* ```{url}/user/signup```

  * Request type - POST
  
  * Body 
    ```json
    {
      "email" : "email@abc.com",
      "password" : "password"
    }
    ```
  
  * Response Status - 201
  
  * Response
    ```json
    {
      "message": "User created"
    }
    ```
  
* ```{url}/user/login```

  * Request type - POST
  
  * Body 
    ```json
    {
      "email" : "email@abc.com",
      "password" : "password"
    }
    ```
  
  * Response Status - 200
  
  * Response
    ```json
    {
      "message": "Auth successful",
      "token": "token"
    }
    ```
  
* ```{url}/:userId```

  * Request type - DELETE

  * Header 
  ```
  authorization : token
  ```

  * Response Status - 200
  
  * Response
    ```json
    {
      "message" : "User deleted"
    }
    ```

### Product Routes

* ```{url}/products```

  * Request type - GET
  
  * Header 
  ```
  authorization : token
  ```
  
  * Response Status - 200
  
  * Response
    ```json
    {
      "count": 1,
      "products": [
          {
              "name": "Harry potter 3",
              "price": 9.36,
              "_id": "5e825ce3848c9332344c3182",
              "request": {
                  "type": "GET",
                  "url": "{url}/products/5e825ce3848c9332344c3182"
              }
          }
        ]
    }
    ```

* ```{url}/products```

  * Request type - POST
  
  * Header 
  ```
  authorization : token
  ```

  * Body 
    ```json
    {
      "name" : "Chocolates",
      "price" : "15"
    }
    ```
  
  * Response Status - 201
  
  * Response
    ```json
    {
      "message": "Created product successfully!",
      "createdProduct": {
          "name": "Chocolates",
          "price": 15,
          "_id": "60b85bf62972e44f042025fe",
          "request": {
              "type": "GET",
              "url": "{url}/products/60b85bf62972e44f042025fe"
          }
        }
    }
    ```

* ```{url}/products/:productId```

  * Request type - GET
  
  * Header 
  ```
  authorization : token
  ```
  
  * Response Status - 200
  
  * Response
    ```json
    {
      "product": {
          "_id": "5e825ce3848c9332344c3182",
          "name": "Harry potter 3",
          "price": 9.36
      },
      "request": {
          "type": "GET",
          "description": "Get all products",
          "url": "{url}/products"
      }
    }
    ```

* ```{url}/products/:productId```

  * Request type - PATCH
  
  * Header 
  ```
  authorization : token
  ```

  * Body 
    ```json
    {
      "name" : "Harry potter 3",
      "price" : "12.45"
    }
    ```
  
  * Response Status - 200
  
  * Response
    ```json
    {
      "message": "Product updated",
      "request": {
          "type": "GET",
          "url": "{url}/products/5e825ce3848c9332344c3182"
        }
    }
    ```

* ```{url}/products/:productId```

  * Request type - DELETE

  * Header 
  ```
  authorization : token
  ```

  * Response Status - 200
  
  * Response
    ```json
    {
      "message": "Product deleted",
      "request": {
          "type": "POST",
          "url": "{url}/products",
          "body": {
              "name": "String", 
              "price": "Number"
          }
        }
    }
    ```

### Order Routes

* ```{url}/orders```

  * Request type - GET
  
  * Header 
  ```
  authorization : token
  ```
  
  * Response Status - 200
  
  * Response
    ```json
    {
      "count": 1,
      "orders": [
          {
              "_id": "5e82dffc061e3828b8291c21",
              "product": {
                  "_id": "5e825ce3848c9332344c3182",
                  "name": "Harry potter 3"
              },
              "quantity": 2,
              "request": {
                  "type": "GET",
                  "url": "{url}/orders/5e82dffc061e3828b8291c21"
              }
          },
        ]
    }

    ```

* ```{url}/orders```

  * Request type - POST
  
  * Header 
  ```
  authorization : token
  ```

  * Body 
    ```json
    {
      "productId" : "5e825ce3848c9332344c3182",
      "quantity" : "9"
    }
    ```
  
  * Response Status - 201
  
  * Response
    ```json
    {
       "message": "Order stored",
            "createdOrder": {
                "_id": "60b87ee712975e2360f9dee0",
                "product": "5e825ce3848c9332344c3182",
                "quantity": "9"
            },
            "request": {
                "type": "GET",
                "url": "{url}/orders/' + 5e825ce3848c9332344c3182"
            }
    }
    ```

* ```{url}/orders/:orderId```

  * Request type - GET
  
  * Header 
  ```
  authorization : token
  ```
  
  * Response Status - 200
  
  * Response
    ```json
    {
      "order": {
          "quantity": 2,
          "_id": "5e82dffc061e3828b8291c21",
          "product": {
              "_id": "5e825ce3848c9332344c3182",
              "name": "Harry potter 3",
              "price": 9.36,
              "__v": 0
          },
          "__v": 0
      },
      "request": {
          "type": "GET",
          "url": "http://localhost:3000/orders"
      }
    }
    ```

* ```{url}/orders/:orderId```

  * Request type - DELETE

  * Header 
  ```
  authorization : token
  ```

  * Response Status - 200
  
  * Response
    ```json
    {
      "message": "Order deleted",
      "request": {
          "type": "POST",
          "url": "{url}/orders",
          "body": {
              "productId": "ID",
              "quantity": "Number"
          }
        }
    }
    ```


## SetUp
* Install Node.js
* Clone Git repository into desired location on your device.
```
git clone https://github.com/Shivanirao2000/E-Commerce-REST-Api.git
cd E-Commerce-REST-Api
```
* Install the required dependencies
```
 npm init
 npm install express express-session body-parser ejs method-override --save
 npm install mongoose passport passport-local passport-local-mongoose --save
 ```
 * Run Node.js server
 ```
 node server.js
 ```
 * The api can be opened on any browser or Postman using [http://localhost:3000](http://localhost:3000)
