/* eslint-disable no-console */
import axios from "axios";

const getForecast = (
  searchText,
  setErrorMessage,
  setSelectedDate,
  setForecasts,
  setLocation
) => {
  let endpoint = "https://mcr-codes-weather-app.herokuapp.com/forecast";

  if (searchText) {
    endpoint += `?city=${searchText}`;
  }

  return axios
    .get(endpoint)
    .then((response) => {
      setSelectedDate(response.data.forecasts[0].date);
      setForecasts(response.data.forecasts);
      setLocation(response.data.location);
    })
    .catch((error) => {
      const { status } = error.response;
      if (status === 404) {
        setErrorMessage("Invalid entry. Please enter a UK town or city.");
        console.error(
          "Location is not valid. Input must be a town or city in the UK.",
          error
        );
      }
      if (status === 500) {
        setErrorMessage("Oops, server error. Please try again later.");
        console.error("Server error", error);
      }
    });
};

export default getForecast;
