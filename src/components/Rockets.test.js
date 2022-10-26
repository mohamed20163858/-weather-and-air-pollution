import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import '@testing-library/jest-dom';
import RocketCard from './rocketCard';

function TestRockets() {
  const id = 1;
  const rocketname = 'Falcon 1';
  const description = 'discription';
  const reserved = true;
  const img = 'https://imgur.com/DaCfMsj.jpg';
  const key = 'rocket-1';
  return (
    <Provider store={store}>
      <RocketCard
        rocketId={id}
        rocketName={rocketname}
        rocketDescription={description}
        rocketImage={img}
        reserved={reserved}
        key={key}
      />
    </Provider>
  );
}
it('renders correctly', () => {
  const tree = renderer
    .create(<TestRockets />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
test('simulate checking a reserved rocket ', () => {
  // ARRANGE
  render(<TestRockets />);

  // ACT making reserve = true

  // Arrange
  const result = screen.getByTestId('rocket-reserved');
  // ASSERT
  expect(result).toBeInTheDocument();
});
