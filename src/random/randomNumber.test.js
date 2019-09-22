import { randomNumber } from '.'

describe('randomNumber', () => {
  it('uses Math.random', () => {
    const nativeRandom = Math.random

    Math.random = jest.fn(() => 1)

    randomNumber(10)
    expect(Math.random).toHaveBeenCalled()

    Math.random = nativeRandom
  })

  it('creates numbers below or equal the limit provided', () => {
    expect(randomNumber(2)).toBeLessThanOrEqual(2)
    expect(randomNumber(5)).toBeLessThanOrEqual(5)
    expect(randomNumber(10)).toBeLessThanOrEqual(10)
  })

  it('creates positive numbers or zero', () => {
    expect(randomNumber(2)).toBeGreaterThanOrEqual(0)
    expect(randomNumber(5)).toBeGreaterThanOrEqual(0)
    expect(randomNumber(10)).toBeGreaterThanOrEqual(0)
    expect(randomNumber(20)).toBeGreaterThanOrEqual(0)
  })

  it('creates only integers', () => {
    const rando = randomNumber(10)
    expect(rando).toBe(Math.trunc(rando))
  })
})
