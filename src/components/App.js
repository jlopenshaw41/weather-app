import React, { useState, useEffect } from "react";
import "../styles/App.css";
import LocationDetails from "./LocationDetails";
import ForecastSummaries from "./ForecastSummaries";
import ForecastDetails from "./ForecastDetails";
import getForecast from "../requests/getForecast";
import SearchForm from "./SearchForm";
import applyBackgroundImage from "../helpers/applyBackgroundImage";

const App = () => {
  const [forecasts, setForecasts] = useState([]);
  const [location, setLocation] = useState({ city: "", country: "" });
  const [selectedDate, setSelectedDate] = useState(0);
  const [searchText, setSearchText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    getForecast(
      searchText,
      setErrorMessage,
      setSelectedDate,
      setForecasts,
      setLocation
    );
  }, []);

  const selectedForecast = forecasts.find(
    (forecast) => forecast.date === selectedDate
  );

  const handleCitySearch = () => {
    getForecast(
      searchText,
      setErrorMessage,
      setSelectedDate,
      setForecasts,
      setLocation
    );
    setSearchText("");
    applyBackgroundImage();
  };

  const handleForecastSelect = (date) => setSelectedDate(date);

  return (
    <div className="weather-app">
      <SearchForm
        searchText={searchText}
        setSearchText={setSearchText}
        onSubmit={handleCitySearch}
      />

      <>
        <div className="main-forecast">
          <LocationDetails city={location.city} errorMessage={errorMessage} />

          {!errorMessage && selectedForecast && (
            <ForecastDetails forecast={selectedForecast} />
          )}
        </div>
        {!errorMessage && (
          <ForecastSummaries
            forecasts={forecasts}
            onForecastSelect={handleForecastSelect}
          />
        )}
      </>
    </div>
  );
};

export default App;
