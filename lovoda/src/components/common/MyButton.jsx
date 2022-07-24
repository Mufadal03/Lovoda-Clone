import { Button, Icon } from "@chakra-ui/react"

export const MyButton = ({func,name,task,icon}) => {
    return (
        <Button leftIcon={<Icon as={icon} />} bgColor={"white"} borderRadius="none" _hover={{ bgColor: "white" }} border="1px solid black" onClick={() => func(name)}>{ task}</Button> 
    )
}   