const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.yaml');
const authMiddleware = require('./utils/authMiddleware');
const errorMiddleware = require('./utils/errorMiddleware');
const weatherRoutes = require('./routes/weatherRoutes');

const app = express();

app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(authMiddleware); // Implement authentication middleware
app.use('/api/weather', weatherRoutes);
app.use(errorMiddleware); // Implement error handling middleware

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
