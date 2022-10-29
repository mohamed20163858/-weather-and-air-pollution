import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../redux/configureStore';
import '@testing-library/jest-dom';
import City from './city';

function TestCity() {
  return (
    <Provider store={store}>
      <Router>
        <City />
      </Router>
    </Provider>
  );
}
it('renders correctly', () => {
  const tree = renderer
    .create(<TestCity />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
it('test the existence of page', () => {
// ARRANGE
  render(<TestCity />);

  // ACT
  // Arrange
  const result = screen.getByText('Country Flag');
  // ASSERT
  expect(result).toBeInTheDocument();
});
