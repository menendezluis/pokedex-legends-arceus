import { Fragment, Text, Image } from '../../atoms'
import { typeEmojiPokemon, colorByTypePokemon } from '../../constants'
export const PokemonInfo = (props: any) => {
    const { style, children, pokemonData, pokemonAttack } = props
    return (
        <Fragment style="bg-amber-100 w-[100%] h-[100%] min-h-screen rounded-md border-8 lg:border-l-0  lg:border-double	border-r-8 border-solid	border-sky-900">
            <Fragment style="bg-amber-100 w-[100%]  rounded-md lg:border-r-8 border-solid border-sky-900 flex flex-col justify-center items-center ">
                <Text
                    style={colorByTypePokemon[
                        pokemonData.types[0].type.name
                    ].concat(
                        'flex flex-col justify-center items-center lg:mt-16 text-center text-white text-xl lg:text-2xl'
                    )}
                    bold
                >
                    {pokemonData.name} {pokemonData.id}
                    {'  '}
                    {typeEmojiPokemon[pokemonData.types[0].type.name]
                        ? typeEmojiPokemon[pokemonData.types[0].type.name]
                        : typeEmojiPokemon['other']}
                </Text>

                <Image
                    source={
                        pokemonData.sprites.other.dream_world.front_default ||
                        pokemonData.sprites.other.home.front_default
                    }
                    alt={pokemonData.name}
                />

                {pokemonAttack.map((item: any) => {
                    return (
                        <Text
                            style={colorByTypePokemon[item.type.name].concat(
                                ' w-full flex justify-center items-center hover:bg-opacity-90 cursor-pointer'
                            )}
                            bold
                        >
                            {item.name} - {typeEmojiPokemon[item.type.name]}
                            {'('}
                            {item.type.name}
                            {') - '}
                        </Text>
                    )
                })}
            </Fragment>
        </Fragment>
    )
}
