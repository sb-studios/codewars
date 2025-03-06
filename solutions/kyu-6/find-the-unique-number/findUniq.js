function findUniq (arr) {
  const firstNumber = arr[0]
  const secondNumber = arr[1]

  if (firstNumber !== secondNumber) {
    const nextNumber = arr[2]
    return nextNumber === firstNumber ? secondNumber : firstNumber
  }

  for (const number of arr) {
    if (number !== firstNumber) {
      return number
    }
  }
}

module.exports = findUniq
