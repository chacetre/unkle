import React, {useEffect, useRef, useState} from 'react';

export enum Positions {LEFT = "mr-2 right-full top-0", RIGHT = "ml-2 left-full top-0", TOP = "mb-2 left-0 bottom-full", BOTTOM = "mt-2 left-0 top-full"}

export enum Types {FOCUS, HOVER}

type TooltipsProps = {
    position?: Positions,
    type?: Types,
    delayHover?: number, //milliseconds
    maxWidth?: string,
    minWidth?: string,
    withoutAnimation?: boolean
    className?: string,
    content?: string | React.ReactElement
    children: React.ReactElement
}

export const Tooltips: React.FC<TooltipsProps> = (props: TooltipsProps) => {
    const defaultCSS = "bg-slate-100 p-2 rounded z-10"
    const {
        children,
        position = Positions.BOTTOM,
        type = Types.HOVER,
        delayHover = 0,
        content,
        className = defaultCSS,
        maxWidth,
        withoutAnimation = false,
        minWidth
    } = props
    const [hidden, setHidden] = useState<boolean>(true)
    const inputRef: any = useRef(null);

    /**
     * Action when type is hover
     */
    const actionHover = () => {
        let timeoutLocal: any
        inputRef.current.addEventListener("mouseenter", () => {
            timeoutLocal = setTimeout(function () {
                setHidden(false)
            }.bind(this), delayHover)
        })
        inputRef.current.addEventListener("mouseleave", () => {
            setHidden(true)
            clearTimeout(timeoutLocal)
        })
    }

    /**
     * Action when type is focus
     */
    const actionFocus = () => {
        inputRef.current.addEventListener("click", () => setHidden((previous) => !previous))
        inputRef.current.addEventListener("focusout", () => setHidden(true))
    }

    /**
     * Choose action depending the type
     */
    const chooseAction = () => {
        switch (type) {
            case Types.FOCUS:
                actionFocus()
                break
            case Types.HOVER:
            default:
                actionHover()
                break
        }
    }

    useEffect(() => {

        if (inputRef && inputRef.current) {
            chooseAction()
        }

        return () => {
            chooseAction()
        }

    }, [inputRef])

    return (
        <div>
            <div ref={inputRef} className="w-auto relative">
                {children}
                <div
                    style={{
                        maxWidth: maxWidth ? `${maxWidth}px` : undefined,
                        minWidth: maxWidth ? `${minWidth}px` : undefined
                    }}
                    className={`absolute drop-shadow ${!withoutAnimation ? "animate-wiggle" : null}  ${hidden ? "hidden" : null} ${className} w-full ${position} `}>
                    {content}
                </div>
            </div>

        </div>
    )
}