import near from '.'

describe('near', () => {
  it('is true when its parameters are within tolerance', () => {
    expect(near(1, 1.1)).toBe(true)
    expect(near(1.1, 1)).toBe(true)
    expect(near(1, 1)).toBe(true)
    expect(near(-0.1, 0.1)).toBe(true)
  })

  it('is false when its parameters are far apart', () => {
    expect(near(1, 2)).toBe(false)
    expect(near(10, 20)).toBe(false)
    expect(near(-1, 1)).toBe(false)
    expect(near(0, 0.5)).toBe(false)
  })
})
