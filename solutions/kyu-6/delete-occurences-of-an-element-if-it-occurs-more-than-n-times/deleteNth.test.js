const deleteNth = require('./deleteNth')

test('should return an empty array when input `arr` is empty and input `n` is any', () => {
  const arr = []
  const n = 2
  const expectedResult = []

  const actualResult = deleteNth(arr, n)

  expect(actualResult).toStrictEqual(expectedResult)
})

test('should return input `arr` when input `arr` is any and input `n` is 0', () => {
  const arr = [1, 2, 3, 1, 2, 3]
  const n = 0
  const expectedResult = [1, 2, 3, 1, 2, 3]

  const actualResult = deleteNth(arr, n)

  expect(actualResult).toStrictEqual(expectedResult)
})

test('should return input `arr` without duplicates when input `arr` contains duplicates  and and input `n` is 1', () => {
  const arr = [1, 2, 3, 1, 2, 3]
  const n = 1
  const expectedResult = [1, 2, 3]

  const actualResult = deleteNth(arr, n)

  expect(actualResult).toStrictEqual(expectedResult)
})
