
export const Fragment = (props:any) => {
 const {style, children,click} = props
if(click){
  return (
    <div className={style} onClick={click}>{children}</div>
  )
}
else
  {  return (
    <div className={style} >{children}</div>
  )
}
}
