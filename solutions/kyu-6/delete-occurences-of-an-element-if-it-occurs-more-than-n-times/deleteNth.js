function deleteNth (arr, n) {
  if (n === 0) {
    return arr
  }

  const elementCounter = {}
  const result = []
  for (const element of arr) {
    if (element in elementCounter) {
      if (elementCounter[element] < n) {
        result.push(element)
        elementCounter[element] += 1
      }
    } else {
      result.push(element)
      elementCounter[element] = 1
    }
  }
  return result
}

module.exports = deleteNth
