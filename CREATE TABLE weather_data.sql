CREATE TABLE weather_data (
    id NUMBER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    district VARCHAR2(50),
    temperature NUMBER,
    humidity NUMBER,
    airPressure NUMBER,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
