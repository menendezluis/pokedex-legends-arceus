import IconImage from '../../../images/icons/arrow-icon.svg'
import Image from 'next/image'

export const ArrowIcon = () => {
  return (
    <Image
    src={IconImage}
    alt="Aflac"
    width="60px"
    height="60px"
    layout="fixed" 
/>
  )
}