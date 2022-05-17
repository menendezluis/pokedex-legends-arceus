import { InfiniteScrollHorizontal } from './InfiniteScrollHorizontal'
import { InfiniteScrollVertical } from './InfiniteScrollVertical'

export const InfiniteScroll = (props: any) => {
    const { children } = props
    return (
        <div>
            <div className="flex lg:hidden">
                <InfiniteScrollHorizontal>{children}</InfiniteScrollHorizontal>
            </div>
            <div className="hidden lg:flex">
                <InfiniteScrollVertical>{children}</InfiniteScrollVertical>
            </div>
        </div>
    )
}
