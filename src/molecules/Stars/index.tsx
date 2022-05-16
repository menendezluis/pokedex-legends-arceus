import { Fragment,Text} from '../../atoms'
export const Stars = (props: any) => {
    const { stars, decor } = props
    return (
        <Fragment style="flex">
            {stars.map(() => (
                <Text style="m-1">{decor}</Text>
            ))}
        </Fragment>
    )
}
