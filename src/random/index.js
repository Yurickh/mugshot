export function randomNumber(limit) {
  return parseInt(Math.random() * limit)
}

export function stringWithNumberOfLength(size) {
  return [...Array(size)].map(() => randomNumber(10)).join('')
}

export function sample(array) {
  return array[randomNumber(array.length)]
}
