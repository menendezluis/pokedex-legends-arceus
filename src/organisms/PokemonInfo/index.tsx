import { Fragment } from '../../atoms'
export const PokemonInfo = (props: any) => {
    const { style, children } = props
    return (
        <Fragment style="bg-amber-100 w-[100%] min-h-screen rounded-md border-8 lg:border-l-0  lg:border-double	border-r-8 border-solid	border-sky-900">
            <Fragment style="bg-amber-100 w-[100%] h-[100%] rounded-md lg:border-r-8 border-solid border-sky-900 ">
                {children}
            </Fragment>
        </Fragment>
    )
}
