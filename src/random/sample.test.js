import { sample } from '.'

describe('sample', () => {
  it('returns a random element from an array', () => {
    const array = [1, 2, 'profit']

    expect(array).toContain(sample(array))
  })
})
