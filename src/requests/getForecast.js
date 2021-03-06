/* eslint-disable no-console */
import axios from "axios";

const getForecast = (
  searchText,
  setErrorMessage,
  setSelectedDate,
  setForecasts,
  setLocation
) => {
  setErrorMessage("");

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
        setErrorMessage(
          "Sorry, we couldn't find a UK town or city matching that name. Please try again."
        );
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
