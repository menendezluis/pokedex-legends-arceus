import {URL} from '../constants'

export async function pokemonInfo(){
    let data = await (await (fetch(URL)
      .then(res => {
        return res.json()
      })
      .catch(err => {
        console.log('Error: ', err)
      })
    ))
    return data
  }