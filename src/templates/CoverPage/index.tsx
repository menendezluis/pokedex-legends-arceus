import { Button, Modal, Fragment, Text, Image } from '../../atoms'
import { BookRope, ContentCover } from '../../organisms'

export const CoverPage = () => {
    return (
        <Modal
            style="bgpattern p-0 p-0 shadow-sm	 shadow-black shadow-opacity-5 mix-blend-luminosity	rounded-md		block lg:flex  "
            size="LG"
        >
            <BookRope />

            <Fragment style="w-[100%] flex flex-col justify-center items-center">
                <ContentCover />
            </Fragment>
        </Modal>
    )
}
