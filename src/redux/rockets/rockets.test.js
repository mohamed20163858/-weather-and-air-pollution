import rocketsReducer, { reserveRocket, cancelRocket } from './rockets';

test('test reserveRocket functionality', () => {
  // ARRANGE
  const id = '5';

  // ACT
  const result = reserveRocket(id);
  // ASSERT
  expect(result.payload).toBe(5);
});

test('test cancelRocket functionality', () => {
  // ARRANGE
  const id = '5';

  // ACT
  const result = cancelRocket(id);
  // ASSERT
  expect(result.payload).toBe(5);
});
test('test rocketsReducer functionality', () => {
// Arrange
  const state = [
    { info: 'info' },
    { info: 'info' },
  ];
  const action = reserveRocket(2);
  // ACT
  const result = rocketsReducer(state, action);
  // ASSERT
  expect(result[1].reserved).toBe(true);
});
