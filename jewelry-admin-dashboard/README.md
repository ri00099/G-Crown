# Jewelry Admin Dashboard

## Overview
The Jewelry Admin Dashboard is a production-ready React application designed for managing a jewelry e-commerce website. It provides a user-friendly interface for administrators to manage products, orders, customers, and settings efficiently.

## Features
- **Dashboard**: Overview of total orders, revenue, and key statistics.
- **Product Management**: Add, edit, and list products with detailed information.
- **Order Management**: View and manage customer orders with detailed insights.
- **Customer Management**: Access customer profiles and manage customer-related data.
- **Settings**: Configure various settings for the admin dashboard.

## Technologies Used
- **React**: JavaScript library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Vite**: Build tool for fast development and production builds.
- **Docker**: Containerization for easy deployment.

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm (Node Package Manager)

### Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   cd jewelry-admin-dashboard
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up environment variables:
   - Copy `.env.example` to `.env` and configure your environment variables.

### Running the Application
To start the development server, run:
```
npm run dev
```
Open your browser and navigate to `http://localhost:3000` to view the application.

### Building for Production
To create a production build, run:
```
npm run build
```

### Docker Setup
To run the application using Docker, use the following command:
```
docker-compose up --build
```

## Folder Structure
```
jewelry-admin-dashboard
├── src
│   ├── main.jsx
│   ├── App.jsx
│   ├── index.css
│   ├── api
│   │   └── client.js
│   ├── assets
│   │   └── fonts
│   ├── components
│   │   ├── common
│   │   │   ├── Button.jsx
│   │   │   ├── Modal.jsx
│   │   │   └── Table.jsx
│   │   ├── layout
│   │   │   ├── Sidebar.jsx
│   │   │   └── Topbar.jsx
│   │   └── ui
│   │       ├── Chart.jsx
│   │       └── FormInput.jsx
│   ├── pages
│   │   ├── Dashboard.jsx
│   │   ├── Products
│   │   │   ├── ProductsList.jsx
│   │   │   └── ProductEdit.jsx
│   │   ├── Orders
│   │   │   ├── OrdersList.jsx
│   │   │   └── OrderDetails.jsx
│   │   ├── Customers
│   │   │   ├── CustomersList.jsx
│   │   │   └── CustomerProfile.jsx
│   │   └── Settings.jsx
│   ├── hooks
│   │   ├── useAuth.js
│   │   └── useFetch.js
│   ├── context
│   │   ├── AuthContext.jsx
│   │   └── UIContext.jsx
│   ├── services
│   │   ├── authService.js
│   │   └── productsService.js
│   ├── utils
│   │   └── formatters.js
│   └── styles
│       └── tailwind.css
├── public
│   └── index.html
├── .env.example
├── package.json
├── postcss.config.cjs
├── tailwind.config.cjs
├── vite.config.js
├── .eslintrc.cjs
├── .prettierrc
├── Dockerfile
└── docker-compose.yml
```

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.