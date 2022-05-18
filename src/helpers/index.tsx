import { createContext, useContext, useEffect } from 'react'

export type GlobalContent = {
    openPokedex: boolean
    setOpenPokedex: (c: boolean) => void
    pokemonSearch: string
    setPokemonSearch: (c: string) => void
    pokemonData: object
    setPokemonData: (c: object) => void
    pokemonList: object
    setPokemonList: (c: object) => void
    pokemonMoves: array
    setPokemonMoves: (c: array) => void
    pokemonLoaded: array
    setPokemonLoaded: (c: array) => void
}
export const PokedexContext = createContext<GlobalContent>({
    openPokedex: false,
    setOpenPokedex: () => {},
    pokemonSearch: '',
    setPokemonSearch: () => {},
    pokemonData: {
        name: '',
        id: '',
        types: [],
        stats: [],
        moves: [],
    } as any,
    setPokemonData: () => {},
    pokemonList: {} as any,
    setPokemonList: () => {},
    pokemonMoves: [],
    setPokemonMoves: () => {},
    pokemonLoaded: [],
    setPokemonLoaded: () => {},
})
export const useGlobalContext = () => useContext(PokedexContext)
export * from './pokemonInfo'
