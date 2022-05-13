import IconImage from '../../../images/icons/ribbon-icon.svg'
import Image from 'next/image'

export const RibbonIcon = () => {
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