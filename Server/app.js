const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerConfig = require('./swagger/swaggerConfig');
const authMiddleware = require('./utils/authMiddleware');
const errorMiddleware = require('./utils/errorMiddleware');
const weatherRoutes = require('./routes/weatherRoute');
const swaggerjsdoc = require("swagger-jsdoc")
const {options} = require("./routes/weatherRoute")
const { specs } = require('./swagger/swaggerConfig');


const app = express();

app.use(express.json());
// Swagger documentation
//app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerConfig));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// Authentication middleware
//app.use(authMiddleware); // Implement authentication middleware

// // API routes
//app.use('/weather/createData', weatherRoutes);
app.use('/weather', weatherRoutes);

// Error handling middleware
app.use(errorMiddleware); // Implement error handling middleware


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});