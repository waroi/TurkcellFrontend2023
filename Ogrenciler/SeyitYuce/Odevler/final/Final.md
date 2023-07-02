# React Authentication Project

This is a React project that includes user authentication, cart management, and product management features. It allows users to sign up, log in, manage their cart, and perform CRUD operations on products. The project uses React, React Router, Redux, Formik, Yup, React Toastify, and interacts with a JSON server for product data.

## Features

- User Sign Up: Users can create new accounts by providing a username, email, and password.
- User Login: Existing users can sign in using their email and password.
- Form Validation: Formik and Yup are used for client-side form validation to ensure that the required fields are filled out correctly.
- Error Handling: Error messages are displayed when there are validation errors or when signing up or logging in fails.
- User Session Management: The user's login state is managed using Redux and stored in a cookie for persistence.
- Product Listing: Products are fetched from a JSON server and displayed in the application.
- Add to Cart: Users can add products to their cart.
- Cart Management: Users can view their cart, update quantities, and remove products from the cart.
- Product Management: Admin users have access to additional features for managing products, including creating, updating, and deleting products.

## Installation

1. Navigate to the project directory: `cd Ogrenciler/SeyitYuce/Odevler/final`
2. Install dependencies: `npm install`

## Usage

1. Start the development server: `npm start`
2. Open your browser and go to `http://localhost:5173` to access the application.

## Folder Structure

The project folder structure is as follows:

- `db`: Contains the application source code.
  - `userDb`: Contains users database.
  - `products`: Contains products database.
- `src`: Contains the application source code.
  - `components`: Contains reusable React components.
  - `redux`: Contains Redux-related files, including action creators, reducers, and slices.
  - `routes.js`: Defines the application routes using React Router.
  - `views`: Contains the main pages of the application.
  - `helper`: Contains utility functions and helpers.
  - `App.js`: The main component that defines the application routes.
  - `index.js`: The entry point of the application.
