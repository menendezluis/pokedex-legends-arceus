import * as React from 'react'
import { Button, Modal, Fragment, Text, Image, Label, Input } from '../../atoms'
import { Avatar } from '../../molecules'
import { InfiniteScroll, PokemonInfo } from '../../organisms'
import {
    PokedexContext,
    getPokemonAttackList,
    getPokemonList,
} from '../../helpers'
import { getRandomInt } from '../../utils'
import { typeEmojiPokemon, colorByTypePokemon } from '../../constants'

export const PokedexPage = () => {
    const [listPokemon, setListPokemon] = React.useState([])
    const [pokemonAttack, setPokemonAttack] = React.useState([])
    const context = React.useContext(PokedexContext)
    let tempArray = []

    const getPokemonScrollList = async (offset: number, start: number) => {
        let data = await getPokemonList(offset, start)

        setListPokemon(data)
    }

    const getPokemonMoveList = async (attacks: []) => {
        let data = await getPokemonAttackList(attacks)
        console.log('dataaaaaaa', data)
        setPokemonAttack(data)
    }
    React.useEffect(() => {
        getPokemonScrollList(20, getRandomInt(1, 870))
    }, [context.width, context.height])
    React.useEffect(() => {
        if (context.pokemonData) {
            getPokemonMoveList(context.pokemonData.moves)
        }
    }, [context.pokemonData])

    return (
        <Modal
            style="bg-black bg-opacity-5 p-0 p-0 shadow-sm	 shadow-black shadow-opacity-5 mix-blend-luminosity	rounded-md		block lg:flex  "
            size="XL"
        >
            <Fragment style="hidden overflow-y-scroll	 lg:flex w-[100%] h-[100%] flex flex-col justify-center items-center">
                {context.pokemonData ? (
                    <PokemonInfo>
                        <Text
                            style="bg-amber-500 lg:mt-16 text-center text-white text-xl lg:text-2xl"
                            bold
                        >
                            {context.pokemonData.name} {context.pokemonData.id}
                            {'  '}
                            {typeEmojiPokemon[
                                context.pokemonData.types[0].type.name
                            ]
                                ? typeEmojiPokemon[
                                      context.pokemonData.types[0].type.name
                                  ]
                                : typeEmojiPokemon['other']}
                        </Text>

                        <Image
                            source={
                                context.pokemonData.sprites.other.dream_world
                                    .front_default
                            }
                            alt={context.pokemonData.name}
                        />

                        {pokemonAttack.map((item: any) => {
                            return (
                                <Text
                                    style={colorByTypePokemon[item.type.name]}
                                    bold
                                >
                                    {item.name} -{' '}
                                    {typeEmojiPokemon[item.type.name]}
                                    {'('}
                                    {item.type.name}
                                    {') - '}
                                    {'('}
                                    {item.damage_class.name}
                                    {')'}
                                </Text>
                            )
                        })}
                    </PokemonInfo>
                ) : (
                    <Fragment style="bg-amber-100 w-[100%] h-[100%]">
                        {' '}
                        <h1>Selecciona un pokemon</h1>
                    </Fragment>
                )}
            </Fragment>
            <Fragment>
                <Input
                    style="w-full lg:w-full h-12 lg:h-12  border-2 border-gray-100 bg-gray-200"
                    id="inline-full-name"
                    type="text"
                    placeholder="Nombre de Pokemon o Numero"
                    change={(dat: string) => context.setPokemonSearch(dat)}
                />
                <InfiniteScroll>
                    <Fragment style="flex lg:flex-col">
                        {Object.keys(listPokemon).map((key: any) => {
                            if (
                                listPokemon[key].name.includes(
                                    context.pokemonSearch
                                )
                            ) {
                                tempArray.push(listPokemon[key])
                            }
                        })}
                        {tempArray.map((item: any) => {
                            return (
                                <Fragment style="sm:bg-black sm:bg-opacity-25">
                                    <Avatar
                                        source={item.sprites.front_default}
                                        alt={item.name}
                                        text={item.name}
                                    />
                                </Fragment>
                            )
                        })}
                    </Fragment>
                </InfiniteScroll>
                <Fragment style="overflow-y-scroll sm:flex lg:hidden w-[100%] sm:h-[100%] flex flex-col justify-center items-center">
                    {context.pokemonData ? (
                        <PokemonInfo>
                            <Text
                                style="bg-amber-500 lg:mt-16 text-center text-white text-xl lg:text-2xl"
                                bold
                            >
                                {context.pokemonData.name}{' '}
                                {context.pokemonData.id}
                                {'  '}
                                {typeEmojiPokemon[
                                    context.pokemonData.types[0].type.name
                                ]
                                    ? typeEmojiPokemon[
                                          context.pokemonData.types[0].type.name
                                      ]
                                    : typeEmojiPokemon['other']}
                            </Text>

                            <Image
                                source={
                                    context.pokemonData.sprites.front_default
                                }
                                alt={context.pokemonData.name}
                            />
                            {pokemonAttack.map((item: any) => {
                                console.log(
                                    'bg-' +
                                        colorByTypePokemon[item.type.name] +
                                        ' text-white text-xl lg:text-2xl'
                                )
                                return (
                                    <Text
                                        style={
                                            'bg-' +
                                            colorByTypePokemon[item.type.name] +
                                            ' ' +
                                            'text-white text-xl lg:text-2xl'
                                        }
                                        bold
                                    >
                                        {item.name} -{' '}
                                        {typeEmojiPokemon[item.type.name]}
                                    </Text>
                                )
                            })}
                        </PokemonInfo>
                    ) : (
                        <Fragment style="bg-amber-100 w-[100%] h-screen">
                            {' '}
                            <h1>Selecciona un pokemon</h1>
                        </Fragment>
                    )}
                </Fragment>
            </Fragment>
        </Modal>
    )
}
