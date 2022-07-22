import { AddIcon, MinusIcon } from "@chakra-ui/icons"
import { Box, Button, Flex, Text } from "@chakra-ui/react"

export const AddMinus = ({w,handleDelete,handleAdd,quantity,id,data}) => {
    return (
         <Flex w={w}  border="1px solid " justifyContent={"center"}>
        <Box _hover={{cursor:"pointer"}} px="3" py="2"  mr="1" onClick={()=>handleDelete(id,data)} ><MinusIcon  h={3} w={3}  /></Box>
        <Box _hover={{cursor:"pointer"}} px="3" py="2" mr="1"><Text fontSize={"md"}>{quantity}</Text></Box>
        <Box _hover={{cursor:"pointer"}} px="3"py="2" mr="1" onClick={()=>handleAdd(id,data)}><AddIcon h={3} w={3} /></Box>
        
         </Flex>
    )
}