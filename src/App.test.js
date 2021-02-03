import { render, screen } from '@testing-library/react';
import App from './App';

test('renders "Weather App" header', () => {
  render(<App />);
  const weatherAppHeader = screen.getByText('Weather App');
  expect(weatherAppHeader).toBeInTheDocument();
});
