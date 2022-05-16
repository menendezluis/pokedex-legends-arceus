import {Stars,TitleCover,ButtonIcon} from "../../molecules"
import {Fragment} from "../../atoms"
import * as Constants from '../../constants'
import {useContext} from 'react'
import {PokedexContext} from '../../helpers'


export const ContentCover = () => {
    const {setOpenPokedex} = useContext(PokedexContext)
  return (
    <Fragment style="flex flex-col justify-center items-center space-evenly">
        <TitleCover title="·Pokedex·" />
        <Stars stars={Constants.stars} decor="⭐" />
        <ButtonIcon text="Vamos" click={()=> setOpenPokedex(true)}    />
    </Fragment>
    )
}
