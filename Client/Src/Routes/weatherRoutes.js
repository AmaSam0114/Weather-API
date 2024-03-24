// weatherRoutes.js
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import WeatherMap from '../Components/WeatherMap';
import About from '../components/About';

const WeatherRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={WeatherMap} />
      <Route path="/about" component={About} />
      {/* Add more routes as needed */}
    </Switch>
  );
};

export default WeatherRoutes;
