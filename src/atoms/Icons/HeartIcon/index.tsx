import IconImage from '../../../images/icons/heart-icon.svg'
import Image from 'next/image'

export const HeartIcon = () => {
  return (
    <Image
    src={IconImage}
    alt="Aflac"
    width="201px"
    height="126px"
    layout="fixed" 
/>
  )
}