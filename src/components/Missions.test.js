import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import '@testing-library/jest-dom';
import MissionTableRow from './missionTableRow';

function TestMissions() {
  const id = 'EE86F74';
  const mssionname = 'Commercial Resupply Services';
  const description = 'discription';
  const reserved = true;
  const key = 'mission-4';
  return (
    <Provider store={store}>
      <MissionTableRow
        missionId={id}
        missionName={mssionname}
        description={description}
        reserved={reserved}
        key={key}
      />
    </Provider>
  );
}
it('renders correctly', () => {
  const tree = renderer
    .create(<TestMissions />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
test('simulate checking a joined mission ', () => {
  // ARRANGE
  render(<TestMissions />);

  // ACT making reserve = true

  // Arrange
  const result = screen.getByText('Active Member');
  // ASSERT
  expect(result).toBeInTheDocument();
});
