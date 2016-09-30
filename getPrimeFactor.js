module.exports = function(number) {
  var result = []
  for (var candidate = 2; number > 1; candidate++)
    for (;number % candidate === 0; number /= candidate)
      result.push(candidate)

  return result
}
