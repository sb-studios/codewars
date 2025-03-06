const countBits = require('./countBits')

test('should return 0 when input "n" is 0', () => {
  const n = 0
  const expectedOutput = 0

  const actualOutput = countBits(n)

  expect(actualOutput).toBe(expectedOutput)
})

test('should return 1 when binary representation of input "n" contains 1 bit', () => {
  const n = 1
  const expectedOutput = 1

  const actualOutput = countBits(n)

  expect(actualOutput).toBe(expectedOutput)
})

test('should return 5 when binary representation of input "n" contains 5 bits', () => {
  const n = 1234
  const expectedOutput = 5

  const actualOutput = countBits(n)

  expect(actualOutput).toBe(expectedOutput)
})
