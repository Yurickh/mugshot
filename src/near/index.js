const TOLERANCE = 0.3

export default function near(value, reference) {
  return Math.abs(value - reference) < TOLERANCE
}
