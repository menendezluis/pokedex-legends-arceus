import React, { useState, useEffect } from 'react'
import { PokedexContext } from '../../helpers'

let tempArray = []

export function InfiniteScrollVertical(props: any) {
    const { height, setHeight } = props
    const containerRefDivHeight = React.useRef()
    const context = React.useContext(PokedexContext)

    const [currentScrollTop, setCurrentScrollTop] = useState(0)

    const { children } = props
    const updateDivHeight = (e: any) => {
        const newScrollTop = containerRefDivHeight.current.scrollTop
        if (currentScrollTop < newScrollTop) {
            //only do this if scrolling to the right
            setCurrentScrollTop(newScrollTop)
            if (height === 0) {
                setHeight(containerRefDivHeight.current.clientHeight + 1)
            } else {
                setHeight((previous) => previous + 1)
            }
        }
    }

    useEffect(() => {
        console.log('new height set: ', height)
    }, [height])

    const getInnerDivStyle = () => {
        if (containerRefDivHeight.current && height !== 0) {
            return `${height}px`
        } else {
            return '101%'
        }
    }

    return (
        <>
            <div
                className="overflow-y-scroll scroll-smooth h-screen w-[250px] "
                ref={containerRefDivHeight}
                onScroll={updateDivHeight}
            >
                <div
                    className=" border-b-5 border-gray-300 items-center	flex justify-center"
                    style={{ height: getInnerDivStyle() }}
                >
                    {children}
                </div>
            </div>
        </>
    )
}
