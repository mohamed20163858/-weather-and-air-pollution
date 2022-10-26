import missionsReducer, { joinMission, leaveMission } from './missions';

test('test joinMission functionality', () => {
  // ARRANGE
  const id = '5';

  // ACT
  const result = joinMission(id);
  // ASSERT
  expect(result.payload).toBe(5);
});

test('test leaveMission functionality', () => {
  // ARRANGE
  const id = '5';

  // ACT
  const result = leaveMission(id);
  // ASSERT
  expect(result.payload).toBe(5);
});
test('test missionsReducer functionality', () => {
// Arrange
  const state = [
    { info: 'info' },
    { info: 'info' },
  ];
  const action = joinMission(1);
  // ACT
  const result = missionsReducer(state, action);
  // ASSERT
  expect(result[1].reserved).toBe(true);
});
