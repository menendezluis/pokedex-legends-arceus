import { InfiniteScrollHorizontal } from './InfiniteScrollHorizontal'
import { InfiniteScrollVertical } from './InfiniteScrollVertical'

export const InfiniteScroll = (props: any) => {
    const { children, widht, height, setWidth, setHeight } = props
    return (
        <div>
            <div className="flex lg:hidden">
                <InfiniteScrollHorizontal widht={widht} setWidth={setWidth}>
                    {children}
                </InfiniteScrollHorizontal>
            </div>
            <div className="hidden lg:flex">
                <InfiniteScrollVertical height={height} setHeight={setHeight}>
                    {children}
                </InfiniteScrollVertical>
            </div>
        </div>
    )
}
