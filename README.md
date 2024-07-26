# E-commerce API
## Description:
This is a complete API for an e-commerce site, developed with Node.js, Express and MongoDB. The API offers essential functionalities for an e-commerce system, including product management, shopping cart, orders and stock management.


## Features:
- Modern Technologies: Uses Node.js and Express for fast and efficient server deployment.
- NoSQL Database: Uses MongoDB, providing flexibility and scalability in data storage.
- Modular Structure: Code organized into controllers, models, routes and middleware, facilitating maintenance and scalability.
- RESTful API: Follows REST standards, allowing easy integration with front-ends and other APIs.
- Product Management: Complete CRUD for products, including creation, reading, updating and deletion.
- Shopping Cart: Adding and removing products from the cart, with automatic calculation of the total.
- Orders: Creation of orders from the cart, with status control.
- Error Handling Middleware: Centralized error handling for a consistent and informative response.

## Table of Contents
- Installation
- Configuration
- Usage
- API routes
- Products
- Shopping cart
- Orders
- Contribution
- License

Instalation: 

Clone the repository:
```
git clone https://github.com/seu-usuario/ecommerce-api.git
```
Browse to the project directory:
```
cd api-ecommerce
```


Install the dependencies:
```
npm install
```
Settings
Create an .env file in the root of the project and add the MongoDB database configuration:

env
Copiar código
MONGO_URI=seu_mongo_uri_aqui
PORT=5000
Uso
Para iniciar o servidor em modo de desenvolvimento, execute:

```
npm run dev
```
The server will be started at http://localhost:5000.

# API routes
## Products
- GET /api/products: Returns all products.
- GET /api/products/:id: Returns a specific product.
- POST /api/products: Creates a new product.
- PUT /api/products/:id: Updates an existing product.
- DELETE /api/products/:id: Deletes a product.

## Shopping cart
- GET /api/cart: Returns the contents of the cart.
- POST /api/cart/add: Adds a product to the cart.
- POST /api/cart/remove: Removes a product from the cart.

 ## Orders
- POST /api/orders: Creates a new order from the cart.
- GET /api/orders/:id: Returns a specific order.
- GET /api/orders: Returns all orders.
- PUT /api/orders/:id: Updates the status of an order.
  
## Contributions
- Contributions are welcome! Feel free to open an issue or send a pull request.

## Fork the project.
- Create a new branch (git checkout -b feature/new-feature).
- Commit your changes (git commit -am 'Add new feature').
- Push to the branch (git push origin feature/new-feature).
- Open a Pull Request.
  
## License
  Distributed under the MIT license. See LICENSE for more information.

If you like this project, leave a star in the repository! ⭐

 # Contact us:
 Created by David De Paiva - feel free to contact me!

🏆 This project was developed with a lot of effort and dedication. 
If you found it useful, please consider contributing and helping to keep it updated and improved. 
Your contribution is invaluable! 🏆
