import React, { useState, useEffect } from 'react'

export function InfiniteScrollVertical(props: any) {
    const containerRefDivHeight = React.useRef()

    const [height, setHeight] = useState(0)
    const [currentScrollTop, setCurrentScrollTop] = useState(0)

    const { children } = props
    const updateDivHeight = (e) => {
        const newScrollTop = containerRefDivHeight.current.scrollTop
        if (currentScrollTop < newScrollTop) {
            //only do this if scrolling to the right
            setCurrentScrollTop(newScrollTop)
            if (height === 0) {
                //if the height is zero, it has not been initialised yet. Initialise it
                setHeight(containerRefDivHeight.current.clientHeight + 1)
            } else {
                //add 10, or whatever value you want here
                setHeight((previous) => previous + 1)
            }
        }
    }

    useEffect(() => {
        console.log('new height set: ', height)
    }, [height])

    const getInnerDivStyle = () => {
        if (containerRefDivHeight.current && height !== 0) {
            //return the wdith state as the new height if there is a container ref and height is not zero
            return `${height}px`
        } else {
            //Initialize to a litte more than 100% to enable overflow, if no div ref available
            return '101%'
        }
    }

    return (
        <>
            <div
                className="overflow-y-scroll h-screen w-[250px] "
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
