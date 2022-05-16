import * as React from 'react'
import { Button, Modal, Fragment, Text, Image, Label,Input } from '../../atoms'
import { Avatar } from '../../molecules'
import { BookRope, ContentCover } from '../../organisms'
import { PokedexContext } from '../../helpers'
import { pokemonInfo } from '../../helpers'



export const PokedexPage = () => {
    const context = React.useContext(PokedexContext)
    pokemonInfo().then(res =>  context.setPokemonData( res.sprites.other.dream_world.front_default))

    React.useEffect(()=> {
      console.log(context.pokemonData)
    },[context.pokemonData])

    return (
        <Modal
            style="bg-amber-100 p-0 p-0 shadow-sm	 shadow-black shadow-opacity-5 mix-blend-luminosity	rounded-md		block lg:flex  "
            size="XL"
        >
            <Fragment>
            <Input id="inline-full-name" type="text" placeHolder="Jane Doe" change={(dat)=> context.setPokemonSearch(dat)} />
            <Fragment style="flex">

            <Avatar source={context.pokemonData} />
            <Avatar source={context.pokemonData} />
            <Avatar source={context.pokemonData} />
            <Avatar source={context.pokemonData} />
            <Avatar source={context.pokemonData} />
            <Avatar source={context.pokemonData} />
            <Avatar source={context.pokemonData} />
            <Avatar source={context.pokemonData} />
            <Avatar source={context.pokemonData} />
            <Avatar source={context.pokemonData} />
            <Avatar source={context.pokemonData} />
            <Avatar source={context.pokemonData} />
            <Avatar source={context.pokemonData} />
            <Avatar source={context.pokemonData} />
            <Avatar source={context.pokemonData} />
            
            </Fragment>

            <Label for="inline-full-name">
        Full Name
      </Label>
      
  </Fragment>
            <Text>List Pokemon </Text>
            <Fragment style="w-[100%] flex flex-col justify-center items-center">
                <Text> Content Pokedex </Text>
            </Fragment>
            <Button click={() => context.setOpenPokedex(false)}>Close</Button>
        </Modal>
    )
}
