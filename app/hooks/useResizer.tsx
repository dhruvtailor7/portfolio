import {
    useCallback,
    useEffect,
    useMemo,
    useRef,
    useState,
    type KeyboardEvent,
    type PointerEvent,
} from "react"

const RESIZER_CURSOR_ID = "resize-cursor"
const KEYBOARD_STEP = 10

export type ResizerDirection = "top" | "bottom" | "left" | "right"

export type ResizerProps = {
    direction: ResizerDirection
    initialValue: number
    minValue: number
    maxValue: number
}

type ResizeCursor =
    | "n-resize"
    | "s-resize"
    | "ns-resize"
    | "w-resize"
    | "e-resize"
    | "ew-resize"
    | "col-resize"

function setGlobalCursor(cursor: ResizeCursor) {
    let style = document.getElementById(RESIZER_CURSOR_ID) as HTMLStyleElement | null
    if (!style) {
        style = document.createElement("style")
        style.id = RESIZER_CURSOR_ID
        document.head.appendChild(style)
    }
    style.textContent = `*, *::before, *::after { cursor: ${cursor} !important; }`
}

function clearGlobalCursor() {
    document.getElementById(RESIZER_CURSOR_ID)?.remove()
    document.body.style.removeProperty("user-select")
}

function clamp(value: number, minValue: number, maxValue: number) {
    return Math.min(maxValue, Math.max(minValue, value))
}

function isVertical(direction: ResizerDirection) {
    return direction === "top" || direction === "bottom"
}

function getResizeCursor(
    direction: ResizerDirection,
    size: number,
    minValue: number,
    maxValue: number,
): ResizeCursor {
    if (direction === "top") {
        if (size < minValue) return "n-resize"
        if (size > maxValue) return "s-resize"
        return "ns-resize"
    }
    if (direction === "bottom") {
        if (size < minValue) return "s-resize"
        if (size > maxValue) return "n-resize"
        return "ns-resize"
    }
    if (direction === "left") {
        if (size < minValue) return "w-resize"
        if (size > maxValue) return "e-resize"
        return "ew-resize"
    }
    if (size < minValue) return "e-resize"
    if (size > maxValue) return "w-resize"
    return "col-resize"
}

function getPointerDelta(
    direction: ResizerDirection,
    startPointer: number,
    e: PointerEvent,
) {
    const pointer = isVertical(direction) ? e.clientY : e.clientX
    switch (direction) {
        case "top":
        case "left":
            return startPointer - pointer
        case "bottom":
        case "right":
            return pointer - startPointer
    }
}

function getKeyboardDelta(direction: ResizerDirection, key: string) {
    switch (key) {
        case "ArrowUp":
            return direction === "top" ? KEYBOARD_STEP : direction === "bottom" ? -KEYBOARD_STEP : 0
        case "ArrowDown":
            return direction === "bottom" ? KEYBOARD_STEP : direction === "top" ? -KEYBOARD_STEP : 0
        case "ArrowLeft":
            return direction === "left" ? KEYBOARD_STEP : direction === "right" ? -KEYBOARD_STEP : 0
        case "ArrowRight":
            return direction === "right" ? KEYBOARD_STEP : direction === "left" ? -KEYBOARD_STEP : 0
        case "Home":
            return "home"
        case "End":
            return "end"
        default:
            return 0
    }
}

export default function useResizer({
    direction,
    initialValue,
    minValue,
    maxValue,
}: ResizerProps) {
    const ref = useRef<HTMLDivElement>(null)
    const handleRef = useRef<HTMLDivElement>(null)
    const [isResizing, setIsResizing] = useState(false)
    const [value, setValue] = useState(initialValue)

    const configRef = useRef({ direction, minValue, maxValue })

    const valueRef = useRef(value)

    const dragRef = useRef<{ startPointer: number; startValue: number } | null>(null)

    useEffect(() => () => clearGlobalCursor(), [])

    const endDrag = useCallback(() => {
        dragRef.current = null
        setIsResizing(false)
        clearGlobalCursor()
    }, [])

    const applyValue = useCallback((proposed: number) => {
        const { minValue: min, maxValue: max, direction: dir } = configRef.current
        setGlobalCursor(getResizeCursor(dir, proposed, min, max))
        const newValue = clamp(proposed, min, max)
        setValue(newValue)
        valueRef.current = newValue
    }, [])

    const handlePointerDown = useCallback(
        (e: PointerEvent<HTMLDivElement>) => {
            if (e.button !== 0) return
            e.preventDefault()
            e.currentTarget.setPointerCapture(e.pointerId)
            document.body.style.userSelect = "none"
            dragRef.current = {
                startPointer: isVertical(configRef.current.direction) ? e.clientY : e.clientX,
                startValue: valueRef.current,
            }
            setIsResizing(true)
            setGlobalCursor(
                getResizeCursor(
                    configRef.current.direction,
                    valueRef.current,
                    configRef.current.minValue,
                    configRef.current.maxValue,
                ),
            )
        },
        [],
    )

    const handlePointerMove = useCallback((e: PointerEvent<HTMLDivElement>) => {
        const drag = dragRef.current
        if (!drag) return

        e.preventDefault()
        const { direction: dir } = configRef.current
        const delta = getPointerDelta(dir, drag.startPointer, e)
        applyValue(drag.startValue + delta)
    }, [applyValue])

    const handlePointerUp = useCallback(
        (e: PointerEvent<HTMLDivElement>) => {
            if (!dragRef.current) return
            if (e.currentTarget.hasPointerCapture(e.pointerId)) {
                e.currentTarget.releasePointerCapture(e.pointerId)
            }
            endDrag()
        },
        [endDrag],
    )

    const handleLostPointerCapture = useCallback(() => {
        if (dragRef.current) endDrag()
    }, [endDrag])

    const handleKeyDown = useCallback(
        (e: KeyboardEvent<HTMLDivElement>) => {
            const delta = getKeyboardDelta(configRef.current.direction, e.key)
            if (delta === 0) return

            e.preventDefault()
            const { minValue: min, maxValue: max } = configRef.current

            if (delta === "home") {
                setValue(min)
                valueRef.current = min
                return
            }
            if (delta === "end") {
                setValue(max)
                valueRef.current = max
                return
            }

            const current = valueRef.current
            const newValue = clamp(current + delta, min, max)
            setValue(newValue)
            valueRef.current = newValue
        },
        [],
    )

    const cursor = useMemo(
        () => getResizeCursor(direction, value, minValue, maxValue),
        [direction, value, minValue, maxValue],
    )

    const ariaOrientation: "vertical" | "horizontal" =
        direction === "left" || direction === "right" ? "vertical" : "horizontal"

    const resizeHandleProps = useMemo(
        () => ({
            ref: handleRef,
            onPointerDown: handlePointerDown,
            onPointerMove: handlePointerMove,
            onPointerUp: handlePointerUp,
            onPointerCancel: handlePointerUp,
            onLostPointerCapture: handleLostPointerCapture,
            onKeyDown: handleKeyDown,
            role: "separator" as const,
            "aria-orientation": ariaOrientation,
            "aria-valuenow": value,
            "aria-valuemin": minValue,
            "aria-valuemax": maxValue,
            tabIndex: 0,
            style: { touchAction: "none" } as const,
        }),
        [
            value,
            minValue,
            maxValue,
            ariaOrientation,
            handlePointerDown,
            handlePointerMove,
            handlePointerUp,
            handleLostPointerCapture,
            handleKeyDown,
        ],
    )

    return {
        ref,
        value,
        isResizing,
        cursor,
        resizeHandleProps,
    }
}
