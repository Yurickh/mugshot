import { stringWithNumberOfLength } from '.'

describe('stringWithNumberOfLength', () => {
  it('returns a string', () => {
    expect(typeof stringWithNumberOfLength(10)).toBe('string')
  })

  it('returns numbers with the given length', () => {
    expect(stringWithNumberOfLength(25)).toHaveLength(25)
  })

  it('returns strings that are integer numbers', () => {
    expect(Number(stringWithNumberOfLength(3))).toBeLessThan(1000)
    expect(Number(stringWithNumberOfLength(3))).toBeGreaterThanOrEqual(0)
  })
})
