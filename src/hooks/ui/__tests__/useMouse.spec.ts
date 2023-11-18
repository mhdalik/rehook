import { useMouse } from '../useMouse'
import { act, fireEvent, renderHook } from '@testing-library/react'

describe('useMouse hook test', () => {
    it('should return undefined x and y', () => {
        const { result } = renderHook(() => useMouse('mousemove'))

        expect(result.current.x).toBeUndefined()

        expect(result.current.x).toBeUndefined()
    })

    it('should update mousePosition on mouse enter event', () => {
        const { result } = renderHook(() => useMouse('mouseenter'))

        act(() => {
            fireEvent.mouseEnter(window, { clientX: 100, clientY: 200 })
        })

        expect(result.current).toEqual({ x: 100, y: 200 })
    })

    it('should update mousePosition on mouse move event', () => {
        const { result } = renderHook(() => useMouse('mousemove'))

        act(() => {
            fireEvent.mouseMove(window, { clientX: 100, clientY: 200 })
        })

        expect(result.current).toEqual({ x: 100, y: 200 })
    })

    it('should call the provided function on mouse event', () => {
        const mockFunction = jest.fn()

        const { result } = renderHook(() => useMouse('click', mockFunction)) // eslint-disable-line

        expect(result.current.x).toBeUndefined()

        expect(result.current.y).toBeUndefined()

        act(() => {
            fireEvent.click(window)
        })

        expect(mockFunction).toHaveBeenCalled()
    })
})
