

export const Image = (props:any) => {
  const {style,click, source, altText} = props
if(click){
  return (
    <img className={style} src={source} onClick={click}/>
  )
}
else
  {  return (
    <img className={style} src={source} alt={altText ? altText : "Image"}/>
  )
}
}