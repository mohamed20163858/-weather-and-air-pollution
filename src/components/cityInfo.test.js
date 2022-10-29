import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../redux/configureStore';
import '@testing-library/jest-dom';
import CityInfo from './cityInfo';

function TestCityInfo() {
  return (
    <Provider store={store}>
      <Router>
        <CityInfo country="Egypt" city="Cairo" />
      </Router>
    </Provider>
  );
}
it('renders correctly', () => {
  const tree = renderer
    .create(<TestCityInfo />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
it('test the existence of country field', () => {
  // ARRANGE
  render(<TestCityInfo />);

  // ACT
  // Arrange
  const result = screen.getByText('Country: Egypt');
  // ASSERT
  expect(result).toBeInTheDocument();
});
