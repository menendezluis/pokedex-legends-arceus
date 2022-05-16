import {Fragment} from '../Fragment'
export const Paper = (props:any) => {
 const {style, children,click, elevation} = props
 
if(click){
  return (
    <Fragment  style={`${shadow[elevation]} m-2 bg-white ${style}`} click={click}>{children}</Fragment>
  )
}
else
  {  return (
    <Fragment style={`${shadow[elevation]} m-2 bg-white ${style}`}>{children}</Fragment>
  )
}
}

const shadow:any = {
  1:"shadow-sm	box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05)",
  2:"shadow	box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
  3:"shadow-md	box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
  4:"shadow-lg	box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
  5:"shadow-xl	box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
  6:"shadow-2xl	box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25)",
  7:"shadow-inner	box-shadow: inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
  8:"shadow-none	box-shadow: 0 0 #0000"
}