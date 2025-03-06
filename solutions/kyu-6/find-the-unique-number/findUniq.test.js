const findUniq = require('./findUniq')

test('should return a unique number when input array contains a unique number 1', () => {
  const inputArr = [1, 1, 1, 2, 1, 1]
  const expectedOutput = 2

  const actualOutput = findUniq(inputArr)

  expect(actualOutput).toBe(expectedOutput)
})

test('should return a unique number when input array contains a unique number 2', () => {
  const inputArr = [0, 0, 0.55, 0, 0]
  const expectedOutput = 0.55

  const actualOutput = findUniq(inputArr)

  expect(actualOutput).toBe(expectedOutput)
})

test('should return a unique number when input array contains a unique number 3', () => {
  const inputArr = [0, 1, 0]
  const expectedOutput = 1

  const actualOutput = findUniq(inputArr)

  expect(actualOutput).toBe(expectedOutput)
})
