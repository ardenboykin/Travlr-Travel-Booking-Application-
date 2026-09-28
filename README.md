# Travlr / CS-465-Full-Stack-Development 

Travlr is a full-stack travel booking application developed as part of my coursework. The application allows users to browse trips and provides an administrative interface for managing travel information.

## Technologies

- Node.js
- Express
- Angular
- MongoDB
- Mongoose
- Handlebars.js
- HTML/CSS
- JavaScript
- JSON Web Tokens (JWT)
- Passport.js

## Features

- Browse available trips
- View trip details
- User authentication
- Administrative trip management
- MongoDB database integration
- REST API

## Configuration

The application uses environment variables for configuration.

Create a .env file in the project root using .env.example as a template.

The environment configuration includes:
```text
JWT_SECRET=your-jwt-secret-here
DB_HOST=127.0.0.1
```

## Installation

1. Clone the repository.
2. Open a terminal in the project directory.
3. Install the project dependencies:
```bash
npm install
```
4. Create a .env file in the project root using .env.example as a template.
5. Update the .env file with your local configuration values.
6. Make sure MongoDB is running and accessible using the connection settings in your .env file.
7. Start the application:
```bash
npm start
```

The application starts using the Node.js server defined in `bin/www`.

## Documentation

The accompanying Software Design Document provides additional information about the project's requirements, system design, architecture, diagrams, and implementation.

## Development

This project was developed incrementally throughout the course, with functionality and enhancements added during each module. The main branch contains the completed version of the project.
