import { createContext,useContext } from "react";



export type GlobalContent = {
    openPokedex: boolean
    setOpenPokedex:(c: boolean) => void
    pokemonSearch: string
    setPokemonSearch:(c: string) => void
    pokemonData: object
    setPokemonData:(c: object) => void
    pokemonList: array
    setPokemonList:(c: array) => void
  }
export const PokedexContext = createContext<GlobalContent>({
    openPokedex: false,
    setOpenPokedex: () => {},
    pokemonSearch: '',
    setPokemonSearch: () => {},
    pokemonData: {},
    setPokemonData: () => {},
    pokemonList: [],
    setPokemonList: () => {},
    })
 export const useGlobalContext = () => useContext(PokedexContext)
 export * from './pokemonInfo'

 