import  * as React from 'react'
import logo from './logo.svg'
import './App.css'
import { Fragment, Button, Image } from './atoms'
import { CoverPage, PokedexPage } from './templates'

import { PokedexContext } from './helpers'
function App() {
    const [openPokedex, setOpenPokedex] = React.useState(false)
    const [pokemonSearch, setPokemonSearch] = React.useState('')
    const [pokemonData, setPokemonData] = React.useState('')
    const [pokemonList, setPokemonList] = React.useState('')
    
    
    return (
        <PokedexContext.Provider
            value={{
                openPokedex,
                setOpenPokedex,
                pokemonSearch,
                setPokemonSearch,
                pokemonData,
                setPokemonData,
                pokemonList,
                setPokemonList,
            }}
        >
            {!openPokedex ? <CoverPage /> : <PokedexPage />}
        </PokedexContext.Provider>
    )
}

export default App
