function solution (string) {
  let reversedString = ''
  for (let i = string.length - 1; i >= 0; i--) {
    reversedString += string.charAt(i)
  }
  return reversedString
}

module.exports = solution
