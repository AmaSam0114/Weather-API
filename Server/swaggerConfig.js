// swagger/swaggerConfig.js
module.exports = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Weather API',
        version: '1.0.0',
        description: 'API for managing weather data',
      },
      servers: [
        {
          url: 'http://localhost:3000/api',
          description: 'Local server',
        },
      ],
    },
    apis: ['./routes/*.js'],
  };
  