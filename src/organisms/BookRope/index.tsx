import Rope from '../../assets/images/rope.png'
import RopeHorizontal from '../../assets/images/ropeHorizontal.png'
import { Fragment, Image } from '../../atoms'

export const BookRope = () => {
    return (
        <Fragment style="bg-white w-[100%] h-[80px]  lg:w-1/6 bg-stone-800 lg:h-[100%] flex flex-col justify-center items-center">
            &nbsp;
            <Image source={Rope} style="hidden lg:flex lg:w-[100%] " />
            <Image
                source={RopeHorizontal}
                style="h-[100%] w-[60%] lg:hidden m-3"
            />
        </Fragment>
    )
}
