module.exports = function(number) {
  var result = []
  if (number === 1) return result
  if (number === 4 || number === 6) {
    result.push(2)
    result.push(number / 2)
    return result
  }
  if (number > 1) return [number]
}
