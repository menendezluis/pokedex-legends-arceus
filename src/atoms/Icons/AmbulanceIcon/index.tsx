import IconImage from '../../../images/icons/ambulance-icon.svg'
import Image from 'next/image'

export const AmbulanceIcon = () => {
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