ecommerce-mern/
│
├── backend/
│   ├── controllers/
│   │     ├── authController.js
│   │     ├── productController.js
│   │     ├── orderController.js
│   │     └── cartController.js
│   │
│   ├── models/
│   │     ├── User.js
│   │     ├── Product.js
│   │     ├── Order.js
│   │     └── Cart.js
│   │
│   ├── routes/
│   │     ├── authRoutes.js
│   │     ├── productRoutes.js
│   │     ├── orderRoutes.js
│   │     └── cartRoutes.js
│   │
│   ├── middleware/
│   │     ├── authMiddleware.js
│   │     └── adminMiddleware.js
│   │
│   ├── config/
│   │     └── db.js
│   │
│   ├── utils/
│   │     └── generateToken.js
│   │
│   ├── .env
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── public/
│   │     └── favicon.ico
│   │
│   ├── src/
│   │     ├── components/
│   │     │     ├── Navbar.jsx
│   │     │     ├── Footer.jsx
│   │     │     └── ProductCard.jsx
│   │     │
│   │     ├── pages/
│   │     │     ├── Home.jsx
│   │     │     ├── Login.jsx
│   │     │     ├── Register.jsx
│   │     │     ├── ProductDetails.jsx
│   │     │     ├── Cart.jsx
│   │     │     ├── Checkout.jsx
│   │     │     └── Orders.jsx
│   │     │
│   │     ├── admin/
│   │     │     ├── AdminDashboard.jsx
│   │     │     ├── AddProduct.jsx
│   │     │     └── AdminOrders.jsx
│   │     │
│   │     ├── context/
│   │     │     ├── AuthContext.jsx
│   │     │     └── CartContext.jsx
│   │     │
│   │     ├── api/
│   │     │     └── axiosInstance.js
│   │     │
│   │     ├── App.jsx
│   │     ├── main.jsx
│   │     └── index.css
│   │
│   └── package.json
│
└── README.md
