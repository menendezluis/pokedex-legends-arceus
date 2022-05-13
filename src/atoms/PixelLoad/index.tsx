import { Fragment } from "../Fragment"
export const PixelLoad = (props:any) => {
    const {turnOn} = props
  return (
    <Fragment style={`w-25px h-25px m-3 ${turnOn ? "bg-orange" : "bg-gray"}`}>
        &nbsp;&nbsp;&nbsp;&nbsp;
    </Fragment>
  )
}
