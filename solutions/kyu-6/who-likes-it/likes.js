function likes (names) {
  const len = names.length
  const [first, second, ...rest] = names

  switch (len) {
    case 0:
      return 'no one likes this'
    case 1:
      return `${first} likes this`
    case 2:
      return `${first} and ${second} like this`
    case 3:
      return `${first}, ${second} and ${rest[0]} like this`
    default:
      return `${first}, ${second} and ${rest.length} others like this`
  }
}

module.exports = likes
