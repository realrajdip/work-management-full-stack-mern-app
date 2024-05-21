# Advanced Task Tracking Web Application

This is an advanced task tracking web application built with React, Node.js, Express.js, MongoDB, Tailwind CSS, Redux, and Cloudinary. It provides secure user access with JWT tokens, efficient task management with sophisticated filtering, seamless file uploads, comprehensive task status tracking, and support for multiple projects.

## Features

- **Advanced Authentication and Authorization**:
  - Secure user registration and login using JWT tokens and bcrypt encryption.
  - Role-based access control with owner, admin, and employee roles.

- **Advanced Filtering**:
  - Efficiently manage tasks with sophisticated filtering options based on various criteria.

- **File Upload**:
  - Seamlessly attach files to tasks for collaboration and reference using Multer and Cloudinary.

- **Task Status Tracking**:
  - Monitor task progress from creation to completion with comprehensive tracking capabilities.

- **Multiple Project Support**:
  - Manage multiple projects concurrently for enhanced organization and productivity.

## Technologies Used

- **Frontend**:
  - React
  - Redux
  - Tailwind CSS

- **Backend**:
  - Node.js
  - Express.js

- **Database**:
  - MongoDB

- **File Upload**:
  - Multer
  - Cloudinary

- **Authentication and Authorization**:
  - JWT (JSON Web Tokens)
  - bcrypt

## Installation

1. **Clone the repository**:
2. **npm install**
3. **npm run dev**

## Environment Setup

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
