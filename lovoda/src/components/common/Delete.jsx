import { DeleteIcon } from "@chakra-ui/icons"
import { Button } from "@chakra-ui/react"

export const Delete = ({id,handleDelete}) => {
    return (
        <Button bgColor={"white"} _hover={{bgColor:"white"}} onClick={()=>handleDelete(id)} ><DeleteIcon /></Button>
        
    )
}