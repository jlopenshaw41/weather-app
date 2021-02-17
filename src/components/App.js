import React, { useState, useEffect } from "react";
import "../styles/App.css";
import LocationDetails from "./LocationDetails";
import ForecastSummaries from "./ForecastSummaries";
import ForecastDetails from "./ForecastDetails";
import getForecast from "../requests/getForecast";
import SearchForm from "./SearchForm";
import blueSkyCloudsImage from "../images/blue-sky-clouds.jpg";
import cloudsImage from "../images/clouds.jpg";
import rainImage from "../images/rain.jpg";
import sunImage from "../images/sun.jpg";

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const selectedForecast = forecasts.find(
    (forecast) => forecast.date === selectedDate
  );

  let backgroundImage;

  if (selectedForecast) {
    switch (selectedForecast.description) {
      case "Clouds":
        backgroundImage = cloudsImage;
        break;
      case "Rain":
        backgroundImage = rainImage;
        break;
      case "Clear":
        backgroundImage = sunImage;
        break;
      default:
        backgroundImage = blueSkyCloudsImage;
    }
  } else {
    backgroundImage = blueSkyCloudsImage;
  }

  const handleCitySearch = () => {
    getForecast(
      searchText,
      setErrorMessage,
      setSelectedDate,
      setForecasts,
      setLocation
    );
    setSearchText("");
  };

  const handleForecastSelect = (date) => setSelectedDate(date);

  return (
    <div
      className="weather-app"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
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
