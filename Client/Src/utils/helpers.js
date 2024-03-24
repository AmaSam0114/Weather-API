// Helper function to format temperature
export const formatTemperature = (temperature) => {
    return `${temperature}°C`;
  };
  
  // Helper function to format humidity
  export const formatHumidity = (humidity) => {
    return `${humidity}%`;
  };
  
  // Helper function to format air pressure
  export const formatAirPressure = (airPressure) => {
    return `${airPressure} hPa`;
  };
  
  // Helper function to format date and time
  export const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleString();
  };
  

  