const likes = require('./likes')

test('should return string `no one likes this` when input `names` is an empty array', () => {
  const names = []
  const expectedResult = 'no one likes this'

  const actualResult = likes(names)

  expect(actualResult).toBe(expectedResult)
})

test('should return string `name likes this` when input `names` is an array containing 1 name', () => {
  const names = ['name']
  const expectedResult = 'name likes this'

  const actualResult = likes(names)

  expect(actualResult).toBe(expectedResult)
})

test('should return string `name1 and name2 like this` when input `names` is an array containing 2 names', () => {
  const names = ['name1', 'name2']
  const expectedResult = 'name1 and name2 like this'

  const actualResult = likes(names)

  expect(actualResult).toBe(expectedResult)
})

test('should return string `name1, name2 and name3 like this` when input `names` is an array containing 3 names', () => {
  const names = ['name1', 'name2', 'name3']
  const expectedResult = 'name1, name2 and name3 like this'

  const actualResult = likes(names)

  expect(actualResult).toBe(expectedResult)
})

test('should return string `name1, name2 and x others like this` when input `names` is an array containing 4 or more names', () => {
  const names = ['name1', 'name2', 'name3', 'name4']
  const expectedResult = 'name1, name2 and 2 others like this'

  const actualResult = likes(names)

  expect(actualResult).toBe(expectedResult)
})

test('should return string `name1, name2 and x others like this` when input `names` is an array containing 4 or more names (5)', () => {
  const names = ['name1', 'name2', 'name3', 'name4', 'name5']
  const expectedResult = 'name1, name2 and 3 others like this'

  const actualResult = likes(names)

  expect(actualResult).toBe(expectedResult)
})
