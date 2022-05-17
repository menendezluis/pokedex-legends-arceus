export const Input = (props: any) => {
    const { style, click, value, change, id, type,placeholder } = props
    return (
        <input
            className={
                style
                    ? style
                    : 'bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-amber-500'
            }
            id={id}
            type={type}
            value={value}
            onChange={(e)=>change(e.target.value)}
            placeHolder={placeholder}
           
        />
    )
}
