import {Paper} from '../Paper'
import { Fragment } from '../Fragment'
export const Modal = (props:any) => {

    const {size,style,children}= props
    let sizeModal = null
    let sizeTemp = size?.toUpperCase()
    sizeTemp && sizeTemp === 'FULL'   ? sizeModal ="w-full h-full":
    sizeTemp === 'XL' ? sizeModal='h-5/6 w-11/12 lg:w-5/6 md:w-5/6' : 
    sizeTemp === 'LG' ? sizeModal='h-5/6 w-11/12 lg:w-4/6 md:w-5/6' : 
    sizeTemp === 'MD' ? sizeModal='h-3/6 w-11/12 lg:w-3/6 md:w-5/6' :
    sizeTemp === 'SM' ? sizeModal='h-2/6 w-full lg:w-2/6 md:w-5/6' : sizeModal ="w-full h-full"
  
  return (
    <Fragment style={`fixed top-0 right-0 z-10 w-full h-full overflow-auto bg-white bg-opacity-10 backdrop-blur-md grid place-items-center h-screen`}>
       
    <Paper elevation={4} style={`${sizeModal} ${style} overflow-auto`} >
      {children}
      </Paper>
      </Fragment>
    
   
  )
}
