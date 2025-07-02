[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=19885689&assignment_repo_type=AssignmentRepo)
# MERN Stack Integration Assignment

This assignment focuses on building a full-stack MERN (MongoDB, Express.js, React.js, Node.js) application that demonstrates seamless integration between front-end and back-end components.

## Assignment Overview

You will build a blog application with the following features:
1. RESTful API with Express.js and MongoDB
2. React front-end with component architecture
3. Full CRUD functionality for blog posts
4. User authentication and authorization
5. Advanced features like image uploads and comments

## Project Structure

```
mern-blog/
├── client/                 # React front-end
│   ├── public/             # Static files
│   ├── src/                # React source code
│   │   ├── components/     # Reusable components
│   │   ├── pages/          # Page components
│   │   ├── hooks/          # Custom React hooks
│   │   ├── services/       # API services
│   │   ├── context/        # React context providers
│   │   └── App.jsx         # Main application component
│   └── package.json        # Client dependencies
├── server/                 # Express.js back-end
│   ├── config/             # Configuration files
│   ├── controllers/        # Route controllers
│   ├── models/             # Mongoose models
│   ├── routes/             # API routes
│   ├── middleware/         # Custom middleware
│   ├── utils/              # Utility functions
│   ├── server.js           # Main server file
│   └── package.json        # Server dependencies
└── README.md               # Project documentation
```

## Getting Started

1. Accept the GitHub Classroom assignment invitation
2. Clone your personal repository that was created by GitHub Classroom
3. Follow the setup instructions in the `Week4-Assignment.md` file
4. Complete the tasks outlined in the assignment

## Files Included

- `Week4-Assignment.md`: Detailed assignment instructions
- Starter code for both client and server:
  - Basic project structure
  - Configuration files
  - Sample models and components

## Requirements

- Node.js (v18 or higher)
- MongoDB (local installation or Atlas account)
- npm or yarn
- Git

## Submission

Your work will be automatically submitted when you push to your GitHub Classroom repository. Make sure to:

1. Complete both the client and server portions of the application
2. Implement all required API endpoints
3. Create the necessary React components and hooks
4. Document your API and setup process in the README.md
5. Include screenshots of your working application

## Resources

- [MongoDB Documentation](https://docs.mongodb.com/)
- [Express.js Documentation](https://expressjs.com/)
- [React Documentation](https://react.dev/)
- [Node.js Documentation](https://nodejs.org/en/docs/)
- [Mongoose Documentation](https://mongoosejs.com/docs/)


## How to navigate my project

MERN Stack Blog Application
A full-stack blog platform built with the MERN (MongoDB, Express.js, React.js, Node.js) stack. This application features user authentication, post management, and a RESTful API.

Features
User Authentication: Secure user registration and login using JSON Web Tokens (JWT).

Post Management: Logged-in users can create new blog posts.

RESTful API: A well-structured backend API for handling data.

React Front-End: A dynamic and responsive user interface built with React.

Tech Stack
Frontend: React, React Router

Backend: Node.js, Express.js

Database: MongoDB with Mongoose

Authentication: JSON Web Tokens (JWT)

Getting Started
Follow these instructions to get the project set up and running on your local machine.

Prerequisites
Make sure you have the following installed:

Node.js (v18 or higher)

npm or pnpm

MongoDB (or a MongoDB Atlas account)

Git

Installation & Setup
Clone the repository:

Bash

git clone <your-repo-url>
cd <your-repo-folder>
Backend Setup:

Bash

# Navigate to the server directory
cd server

# Install dependencies
pnpm install

# Create a .env file in the server/ directory
# Then, add the following environment variables
# (replace with your own values)
touch .env
Your server/.env file should look like this:

Code snippet

MONGODB_URI=mongodb://127.0.0.1:27017/mern-blog
JWT_SECRET=your-super-secret-and-long-random-string
JWT_EXPIRE=30d
Bash

# Start the backend server (runs on http://localhost:5000)
pnpm run dev
Frontend Setup:
Open a new terminal window for this step.

Bash

# Navigate to the client directory from the root folder
cd client

# Install dependencies
pnpm install

# Start the React development server (runs on http://localhost:5173 or another port)
pnpm run dev
API Documentation
The API is structured around REST principles. All endpoints are prefixed with /api.

Base URL: http://localhost:5000/api

Authentication
POST /auth/register
Description: Registers a new user.

Access: Public

Request Body:

JSON

{
    "username": "testuser",
    "email": "test@example.com",
    "password": "password123"
}
Success Response (201): Returns a JWT token and user object.

POST /auth/login
Description: Logs in an existing user.

Access: Public

Request Body:

JSON

{
    "email": "test@example.com",
    "password": "password123"
}
Success Response (200): Returns a JWT token and user object.

Categories
Protected routes require an Authorization: Bearer <token> header.

GET /categories
Description: Retrieves a list of all categories.

Access: Public

Success Response (200): An array of category objects.

POST /categories
Description: Creates a new category.

Access: Private (Requires authentication)

Request Body:

JSON

{
    "name": "Technology"
}
Success Response (201): The newly created category object.

Posts
Protected routes require an Authorization: Bearer <token> header.

GET /posts
Description: Retrieves a list of all posts.

Access: Public

Success Response (200): An array of post objects, populated with author and category details.

GET /posts/:slug
Description: Retrieves a single post by its slug.

Access: Public

Success Response (200): A single post object.

POST /posts
Description: Creates a new post. The author is automatically assigned from the authenticated user. The slug is automatically generated from the title.

Access: Private (Requires authentication)

Request Body:

JSON

{
    "title": "My New Blog Post",
    "content": "This is the content of the post.",
    "category": "60d21b4667d0d8992e610c85"
}
Success Response (201): The newly created post object.
