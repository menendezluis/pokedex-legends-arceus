import { createContext, useContext } from 'react'

export type GlobalContent = {
    openPokedex: boolean
    setOpenPokedex: (c: boolean) => void
    pokemonSearch: string
    setPokemonSearch: (c: string) => void
    pokemonData: object
    setPokemonData: (c: object) => void
    pokemonList: array
    setPokemonList: (c: array) => void
    pokemonLoaded: array
    setPokemonLoaded: (c: array) => void
}
export const PokedexContext = createContext<GlobalContent>({
    openPokedex: false,
    setOpenPokedex: () => {},
    pokemonSearch: '',
    setPokemonSearch: () => {},
    pokemonData: {},
    setPokemonData: () => {},
    pokemonList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    setPokemonList: () => {},
    pokemonLoaded: [],
    setPokemonLoaded: () => {},
})
export const useGlobalContext = () => useContext(PokedexContext)
export * from './pokemonInfo'
