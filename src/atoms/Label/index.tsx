

export const Label = (props:any) => {
    const {style, children,click} = props
  return (
    <label  className={style ? style :"block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" } for="inline-full-name">
     {children}
    </label>
  )
}
