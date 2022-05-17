import { Image, Fragment, Text } from '../../atoms'
import { getPokemonInfo } from '../../helpers'
import { useContext } from 'react'
import { PokedexContext } from '../../helpers'

export const Avatar = (props: any) => {
    const { setPokemonData } = useContext(PokedexContext)
    const { source, alt, click, text } = props
    return (
        <Fragment
            click={() =>
                getPokemonInfo(text).then((data) => setPokemonData(data))
            }
            style="flex lg:rounded-l-full lg:bg-black lg:bg-opacity-25 lg:w-[250px] cursor-pointer lg:hover:bg-white lg:hover:bg-opacity-10 my-1"
        >
            <Image
                style="w-14 h-14 mx-8 lg:w-20 lg:mx-1 lg:h-20 rounded-full sm:border-r-2 hover:bg-white  hover:bg-opacity-10 border-gray-50 lg:border-opacity-20	"
                source={source}
                alt={text}
            />
            <Text
                style="hidden capitalize lg:flex flex-col justify-center items-center"
                bold
            >
                {text}
            </Text>
        </Fragment>
    )
}
