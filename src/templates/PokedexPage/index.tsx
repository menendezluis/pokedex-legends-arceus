import * as React from 'react'
import { Button, Modal, Fragment, Text, Image, Label, Input } from '../../atoms'
import { Avatar } from '../../molecules'
import { InfiniteScroll, PokemonInfo } from '../../organisms'
import LogoArceus from '../../assets/images/arceus-logo-large.png'
import {
    PokedexContext,
    getPokemonAttackList,
    getPokemonList,
} from '../../helpers'
import { getRandomInt } from '../../utils'

export const PokedexPage = () => {
    let [listPokemon, setListPokemon] = React.useState({})
    const [pokemonAttack, setPokemonAttack] = React.useState([])
    const [width, setWidth] = React.useState(0)
    const [height, setHeight] = React.useState(0)
    const context = React.useContext(PokedexContext)
    const [initPokemon, setInitPokemon] = React.useState(getRandomInt(1, 870))
    let tempArray = []
    let tempObject = {}

    const getPokemonScrollList = async (offset: number, start: number) => {
        let data = await getPokemonList(offset, start)
        let temp = {}
        temp = listPokemon
        Object.assign(temp, data)
        setListPokemon(data)
    }

    const getPokemonMoveList = async (attacks: []) => {
        let data: any = await getPokemonAttackList(attacks)
        setPokemonAttack(data)
    }
    React.useEffect(() => {
        getPokemonScrollList(20, initPokemon)
        initPokemon === 899
            ? setInitPokemon(1)
            : setInitPokemon(initPokemon + 1)
    }, [width, height])
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
                    <PokemonInfo
                        pokemonData={context.pokemonData}
                        pokemonAttack={pokemonAttack}
                    />
                ) : (
                    <Fragment style="bg-amber-100 w-[100%] h-[100%]">
                        {' '}
                        <Image source={LogoArceus} />
                        <h1>Selecciona un pokemon</h1>
                    </Fragment>
                )}
            </Fragment>
            <Fragment>
                <Input
                    style="w-full lg:w-full h-12 lg:h-12  border-2 border-gray-100 bg-gray-200"
                    id="inline-full-name"
                    type="text"
                    placeholder="Nombre de Pokemon"
                    change={(dat: string) => context.setPokemonSearch(dat)}
                />
                <InfiniteScroll
                    width={width}
                    height={height}
                    setHeight={(dat: number) => setHeight(dat)}
                    setWidth={(dat: number) => setWidth(dat)}
                >
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
                        <PokemonInfo
                            pokemonData={context.pokemonData}
                            pokemonAttack={pokemonAttack}
                        />
                    ) : (
                        <Fragment style="bg-amber-100 w-[100%] h-screen">
                            {' '}
                            <Image source={LogoArceus} />
                            <h1>Selecciona un pokemon</h1>
                        </Fragment>
                    )}
                </Fragment>
            </Fragment>
        </Modal>
    )
}
