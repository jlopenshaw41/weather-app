import { render, screen } from "@testing-library/react";
import App from "../components/App";

xtest('renders "Weather App" header', () => {
  render(<App />);
  const weatherAppHeader = screen.getByText("Weather App");
  expect(weatherAppHeader).toBeInTheDocument();
});
