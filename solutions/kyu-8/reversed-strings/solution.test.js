const solution = require('./solution')

test('should return an empty string when input is an empty string', () => {
  expect(solution('')).toBe('')
})

test('should return the same character when input is a single character', () => {
  expect(solution('a')).toBe('a')
})

test('should return swapped characters when input is two characters', () => {
  expect(solution('he')).toBe('eh')
})

test('should return reversed characters when input is a word', () => {
  expect(solution('hello')).toBe('olleh')
})

test('should return reversed characters with spaces intact when input includes spaces', () => {
  expect(solution('hello world! ')).toBe(' !dlrow olleh')
})
