
export const Text = (props:any) => {
const {style, children, paragraph, bold,center} = props

return<>

      {paragraph ?
      <span className={`${bold ? "font-bold" : null} ${center ? "text-center" : null} ${style}`}>{children}</span> :
      <p className={`${bold ? "font-bold" : null} ${center ? "text-center" : null} ${style}`}>{children}</p> }
      </>
}

