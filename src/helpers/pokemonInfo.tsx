import { URL, URL_MOVES } from '../constants'
import { createContext } from 'react'
import { PokedexContext } from '../helpers'
export let pokemonInfoCache: any = {}
export let attackInfoCache: any = []

export const getPokemonInfo = async (id: number) => {
    attackInfoCache = {}
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

export const getPokemonStats = async (id: number) => {
    const response = await fetch(`${URL}${id}/stats`)
    const data = await response.json()
    return data
}

export const getPokemonAttackList = async (attacks: []) => {
    let moves = []
    attackInfoCache = []
    attacks.forEach((attack) => moves.push(attack.move.name))
    let uniqueMoves = [...new Set(moves)]
    console.log({ uniqueMoves })
    for (let i = 0; i < uniqueMoves.length; i++) {
        const URL_TEMP = `${URL_MOVES}${uniqueMoves[i]}`
        const response = await fetch(URL_TEMP)
        const data = await response.json()

        attackInfoCache.push(data)
    }

    return attackInfoCache
}
