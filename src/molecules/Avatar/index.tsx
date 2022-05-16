import {Image} from '../../atoms'

export const Avatar = (props:any) => {
    const {source, alt, click} = props
  return (
    <Image style="w-12 h-12 lg:w-20 lg:h-20 m-1 rounded-full shadow" source={source} alt="Rounded avatar"/>
  )
}
