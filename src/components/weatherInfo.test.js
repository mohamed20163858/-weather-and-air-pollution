import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import store from '../redux/configureStore';
import '@testing-library/jest-dom';
import WeatherInfo from './weatherInfo';

function TestWeatherInfo() {
  return (
    <Provider store={store}>
      <Router>
        <WeatherInfo />
      </Router>
    </Provider>
  );
}
it('renders correctly', () => {
  const tree = renderer
    .create(<TestWeatherInfo />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
it('test the existence of page', () => {
  // ARRANGE
  render(<TestWeatherInfo />);

  // ACT
  // Arrange
  const result = screen.getByText('Concentartions');
  // ASSERT
  expect(result).toBeInTheDocument();
});
