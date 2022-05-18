import React, { useState, useEffect, useContext } from 'react'
import { PokedexContext } from '../../helpers'

export function InfiniteScrollHorizontal(props: any) {
    const { width, setWidth } = props
    const containerRefDiv = React.useRef()
    const [currentScrollLeft, setCurrentScrollLeft] = useState(0)
    const context = useContext(PokedexContext)

    const { children } = props
    const updateDivWidth = (e) => {
        const newScrollLeft = containerRefDiv.current.scrollLeft
        if (currentScrollLeft < newScrollLeft) {
            //only do this if scrolling to the right
            setCurrentScrollLeft(newScrollLeft)
            if (width === 0) {
                //if the width is zero, it has not been initialised yet. Initialise it
                setWidth(containerRefDiv.current.clientWidth + 1)
            } else {
                //add 10, or whatever value you want here
                setWidth((previous) => previous + 1)
            }
        }
    }

    useEffect(() => {
        console.log('new width set: ', width)
    }, [width])

    const getInnerDivStyle = () => {
        if (containerRefDiv.current && width !== 0) {
            //return the wdith state as the new width if there is a container ref and width is not zero
            return `${width}px`
        } else {
            //Initialize to a litte more than 100% to enable overflow, if no div ref available
            return '101%'
        }
    }

    return (
        <>
            <div
                className="overflow-x-scroll w-screen"
                ref={containerRefDiv}
                onScroll={updateDivWidth}
            >
                <div style={{ width: getInnerDivStyle() }}>{children}</div>
            </div>
        </>
    )
}
