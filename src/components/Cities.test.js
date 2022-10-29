import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../redux/configureStore';
import '@testing-library/jest-dom';
import Cities from './Cities';

function TestCities() {
  return (
    <Provider store={store}>
      <Router>
        <Cities />
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
