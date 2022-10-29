import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import store from '../redux/configureStore';
import '@testing-library/jest-dom';
import CityCard from './cityCard';

function TestCities() {
  const id = 1;
  const country = 'Egypt';
  const city = 'Cairo';
  const iso2 = 'EG';
  const iso3 = 'EGY';
  return (
    <Provider store={store}>
      <Router>
        <CityCard
          countryName={country}
          cityName={city}
          cityISO2={iso2}
          cityISO3={iso3}
          id={id}
          key={`${country}-${city}`}
        />
      </Router>
    </Provider>
  );
}
it('renders correctly', () => {
  const tree = renderer
    .create(<TestCities />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
test('simulate showing card details ', () => {
  // ARRANGE
  render(<TestCities />);

  // ACT
  userEvent.click(screen.getByTestId('check-id'));
  // Arrange
  const result = screen.getByText('Country: Egypt');
  // ASSERT
  expect(result).toBeInTheDocument();
});
