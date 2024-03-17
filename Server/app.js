// app.js
const express = require('express');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const weatherRoutes = require('./routes/weather');
const { initialize } = require('./db');

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/weather', weatherRoutes);

// Swagger setup
const swaggerOptions = require('./swagger/swaggerConfig');
const specs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// Initialize database
initialize();

module.exports = app;
