

export const Button = (props:any) => {
    const {style, children,click} = props
  return (
    <button  className={style ? style :"bg-orange hover:bg-orangeLight  text-white font-bold py-2 px-4 rounded" } onClick={click}>
     {children}
    </button>
  )
}
