import React from "react";
import { render } from "@testing-library/react";
import App from "../../components/App";

describe("App", () => {
  it("renders as expected", () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders weather-app div", () => {
    const { getByTestId } = render(<App />);
    const weatherAppDiv = getByTestId("weather-app");
    expect(weatherAppDiv).toBeTruthy();
  });

  it("renders main-forecast div", () => {
    const { getByTestId } = render(<App />);
    const mainForecast = getByTestId("main-forecast");
    expect(mainForecast).toBeTruthy();
  });
});
