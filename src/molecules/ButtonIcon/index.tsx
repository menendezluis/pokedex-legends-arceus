import { Button, Text } from '../../atoms'
import { ArrowRightIcon } from '../../atoms/Icons'

export const ButtonIcon = (props) => {
    const { text, click } = props
    return (
        <Button
            click={click}
            style="text-white bg-amber-700 hover:bg-amber-800 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-amber-600 dark:hover:bg-amber-700 dark:focus:ring-amber-800"
        >
            <Text>{text} </Text> <ArrowRightIcon />
        </Button>
    )
}
