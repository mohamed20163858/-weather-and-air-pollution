import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import '@testing-library/jest-dom';
import App from './App';

function TestApp() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
it('renders correctly', () => {
  const tree = renderer
    .create(<TestApp />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
test('simulate navigating  through details link ', () => {
  // ARRANGE
  render(<TestApp />);

  // ACT
  userEvent.click(screen.getByTestId('nav-test-id'));
  // Arrange
  const result = screen.getByText('there is no country has this name please enter a valid country name');
  // ASSERT
  expect(result).toBeInTheDocument();
});
