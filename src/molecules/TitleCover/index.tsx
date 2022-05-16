import { Fragment, Text } from '../../atoms'

export const TitleCover = (props:any) => {
    const {title}=props
    return (
        <Fragment style="bg-amber-100 w-[200px] flex flex-col justify-center items-center m-4">
            <Text style="font-oldenburg text-4xl p-2 mx-4">{title}</Text>
        </Fragment>
    )
}
