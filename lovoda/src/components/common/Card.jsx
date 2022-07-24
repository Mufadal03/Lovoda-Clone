import { Box, Text ,Image} from "@chakra-ui/react"
import { Link } from "react-router-dom"

export const Card = ({hover,poster,name,price,id,prod}) => {
    return (
         <Box >
              <Box  bgImage={`url(${poster})`} bgRepeat="no-repeat" bgPosition={"center"} bgSize="contain" _hover={{bgImage:`url(${hover})`,transition:"1s ease"}} h="446px" w="297px">
                </Box>
            <Box py="2">
            <Link to={`/${prod}/${id}`}><Text>{name}</Text></Link>
            <Text color="gray.600">$ {price}</Text>
            </Box>
        </Box>
    )
}