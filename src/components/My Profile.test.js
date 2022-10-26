import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import '@testing-library/jest-dom';
import MyProfile from './My profile';

function TestMyProfile() {
  return (
    <Provider store={store}>
      <MyProfile />
    </Provider>
  );
}
it('renders correctly', () => {
  const tree = renderer
    .create(<TestMyProfile />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
test('simulate checking a joined mission ', () => {
  // ARRANGE
  render(<TestMyProfile />);

  // ACT

  // Arrange
  const result = screen.getByText('My Missions');
  // ASSERT
  expect(result).toBeInTheDocument();
});
