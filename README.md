
E-Bazaar is a frontend e-commerce web application built with React.js. The project focuses on creating a responsive and user-friendly shopping experience using reusable React components, React Context API, and client-side state management.

Features

Modern e-commerce user interface

Product browsing and product-focused pages

Reusable React components

Shopping cart functionality

Global state management using React Context API

Client-side navigation between pages

Organized page and component structure

Responsive design for different screen sizes

Static/local product data for displaying products

Tech Stack

React.js – Building the user interface

JavaScript (ES6+) – Application logic

HTML5 – Page structure

CSS3 – Styling and responsive layouts

React Context API – Global state management

Vite – Development/build tooling

Git & GitHub – Version control

Project Structure

E-Bazaar/
│
├── public/
│
├── src/
│   ├── Components/
│   │   └── UI components
│   │
│   ├── Context/
│   │   └── React Context and global state management
│   │
│   ├── Data/
│   │   └── Product/static application data
│   │
│   ├── Pages/
│   │   └── Main application pages
│   │
│   ├── Singles/
│   │   └── Individual/single-item related components or pages
│   │
│   ├── App.css
│   ├── App.jsx
│   ├── UserCart.jsx
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── package.json
└── README.md

Architecture

The application follows a component-based React architecture.

Components

The Components directory contains reusable UI elements. Keeping common UI elements separate makes the application easier to maintain and extend.

Context

The Context directory is used for shared application state through the React Context API. This helps avoid unnecessary prop drilling when state needs to be accessed by multiple components.

Data

The Data directory contains the product/application data used by the frontend.

Pages

The Pages directory contains the major views of the application. Pages combine reusable components to create complete screens.

Singles

The Singles directory contains components/pages related to individual items or specific views.

UserCart

UserCart.jsx handles the cart-related user interface and works with the application's shared state.

Getting Started

Prerequisites

Make sure you have the following installed:

Node.js

npm

Git

Installation

Clone the repository:

Navigate to the project directory:

cd E-Bazaar

Install dependencies:

npm install

Start the development server:

npm run dev

Open the local URL shown in the terminal, typically:

http://localhost:5173

Available Scripts

Depending on the Vite configuration, the main commands are:

npm run dev

Starts the development server.

npm run build

Creates a production build.

npm run preview

Previews the production build locally.

State Management

E-Bazaar uses React Context API for managing shared state.

Instead of passing the same state through multiple levels of components using props, shared state can be provided through a Context Provider and accessed by components that need it.

This approach keeps the application structure cleaner as the number of components grows.

Frontend-Only Implementation

This version of E-Bazaar is a frontend project.

Product information and application data are handled on the client side. There is currently:

A backend can be integrated later to support persistent users, products, orders, payments, and authentication.

Future Improvements

Potential improvements for future versions include:

Build a REST API backend

Integrate Spring Boot

Add MySQL database support

Implement user registration and login

Add JWT-based authentication

Store cart and order information in a database

Add product search and filtering

Add product categories

Add product reviews and ratings

Add order history and order tracking

Integrate a payment gateway

Deploy the frontend and backend


Author

Pavan Raj

Java Full Stack Developer | React.js Developer
