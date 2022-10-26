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
test('simulate navigating  through Rockets link ', () => {
  // ARRANGE
  render(<TestApp />);

  // ACT
  userEvent.click(screen.getByText('Rockets'));
  // Arrange
  const result = screen.getByTestId('momo-id');
  // ASSERT
  expect(result).toBeInTheDocument();
});

test('simulate navigating  through Missions link ', () => {
  // ARRANGE
  render(<TestApp />);

  // ACT
  userEvent.click(screen.getByText('Missions'));
  // Arrange
  const result = screen.getByTestId('momo-id');
  // ASSERT
  expect(result).toBeInTheDocument();
});
test('simulate navigating  through My Profile link ', () => {
  // ARRANGE
  render(<TestApp />);

  // ACT
  userEvent.click(screen.getByText('My Profile'));
  // Arrange
  const result = screen.getByTestId('momo-id');
  // ASSERT
  expect(result).toBeInTheDocument();
});
