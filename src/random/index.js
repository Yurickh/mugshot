export function randomNumber(limit) {
  return parseInt(Math.random() * limit)
}

export function randomNumberWithLength(size) {
  return parseInt([...Array(size)].map(() => randomNumber(10)).join(''))
}

export function sample(array) {
  return array[randomNumber(array.length)]
}
