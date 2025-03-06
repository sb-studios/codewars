const countBits = function (n) {
  const binaryString = n.toString(2)

  let bitCounter = 0
  for (const bit of binaryString) {
    if (bit === '1') {
      bitCounter++
    }
  }
  return bitCounter
}

module.exports = countBits
