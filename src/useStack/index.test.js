import { renderHook, act } from '@testing-library/react-hooks'
import useStack from '.'

describe('useStack', () => {
  it('creates a stack with initial state', () => {
    const { result } = renderHook(() => useStack([1, 2, 3]))
    const { current } = result.current

    expect(current).toBe(1)
  })

  it('removes the current when pop is called', () => {
    const { result } = renderHook(() => useStack([1, 2, 3]))

    act(result.current.pop)
    expect(result.current.current).toBe(2)

    act(result.current.pop)
    expect(result.current.current).toBe(3)
  })

  it('pushes a new head when push is called', () => {
    const { result } = renderHook(() => useStack([1, 2, 3]))

    act(() => result.current.push(4))
    expect(result.current.current).toBe(4)

    act(result.current.pop)
    expect(result.current.current).toBe(1)
  })

  it("doesn't remove the last item in the stack", () => {
    const { result } = renderHook(() => useStack([1, 2, 3]))

    act(result.current.pop)
    act(result.current.pop)
    act(result.current.pop)
    act(result.current.pop)
    act(result.current.pop)
    act(result.current.pop)

    expect(result.current.current).toBe(3)
  })
})
