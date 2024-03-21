// swaggerConfig.js
module.exports = {
  openapi: '3.0.0',
  info: {
    title: 'Weather API',
    version: '1.0.0',
    description: 'API for managing weather data',
  },
  servers: [
    {
      url: 'http://localhost:3000', // Update the URL as needed
      description: 'Local server',
    },
  ],
  paths: {
    '/api/weather': {
      get: {
        summary: 'Get all weather data',
        description: 'Returns all weather data stored in the database.',
        responses: {
          '200': {
            description: 'Successful response',
            content: {
              'application/json': {
                schema: {
                  type: 'array',
                  items: {
                    type: 'object',
                    properties: {
                      district: { type: 'string' },
                      temperature: { type: 'number' },
                      humidity: { type: 'number' },
                      airPressure: { type: 'number' },
                    },
                  },
                },
              },
            },
          },
          '500': {
            description: 'Internal server error',
          },
        },
      },
      post: {
        summary: 'Create new weather data',
        description: 'Adds new weather data to the database.',
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  district: { type: 'string' },
                  temperature: { type: 'number' },
                  humidity: { type: 'number' },
                  airPressure: { type: 'number' },
                },
                required: ['district', 'temperature', 'humidity', 'airPressure'],
              },
            },
          },
        },
        responses: {
          '201': {
            description: 'Weather data added successfully',
          },
          '400': {
            description: 'Bad request',
          },
          '500': {
            description: 'Internal server error',
          },
        },
      },
    },
  },
};
