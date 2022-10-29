import { fetchFilteredCaptialCity } from './cities';

test('test fetchFilteredCaptialCity functionality', () => {
  // ARRANGE
  const data = [{ info: 'info' }];

  // ACT
  const result = fetchFilteredCaptialCity(data);
  // ASSERT
  expect(result.payload).toBe(data);
});
