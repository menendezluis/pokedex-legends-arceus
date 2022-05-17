import { URL } from '../constants'

let pokemonInfoCache: any = {}

export const getPokemonInfo = async (id: number) => {
    const response = await fetch(`${URL}${id}`)
    const data = await response.json()
    return data
}

export const getPokemonList = async (offset: number, start: number) => {
    for (let i = start; i < start + offset; i++) {
        const response = await fetch(`${URL}${i}`)
        const data = await response.json()
        pokemonInfoCache[i] = data
    }
    return pokemonInfoCache
}

export const savePokemonInfo = async (state, setState) => {
    setState(state)
}
