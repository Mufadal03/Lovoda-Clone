import { AddIcon, MinusIcon } from "@chakra-ui/icons"
import { Box, Flex, Heading, Image, Spacer, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr, VStack } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { TbEar } from "react-icons/tb"
import { Link } from "react-router-dom"
import { AddMinus } from "../../common/AddMinus"

export const Cart = () => {
    const [data, setData] = useState()
    useEffect(() => {
        FetchMe()
    }, [])
    const FetchMe = () => {
        fetch("https://muffi-server.herokuapp.com/cart")
            .then((res) => res.json()) 
            .then((res) => {
                setData(res)
     })   
    }
    const handleAdd = (id) => {
        console.log(id)
    }
    const handleDelete = () => {
     
    }
    return (
        <Box border={"2px solid red"} w="80%" m="4rem auto">
            <Flex border={"2px solid blue"} my="2rem" alignItems="center">
                <Heading fontWeight={"sm"}>Your Cart</Heading>
                <Spacer />
                <Link to="/"><Text textDecoration={"underline"}>Countinue Shopping</Text></Link>
            </Flex>
            <Box border={"2px solid green"}h="90vh">
                <TableContainer>
                    <Table variant={"simple"} >
                        <Thead>
                            <Tr>
                                <Th><Text fontSize={"xs"}>PRODUCT</Text></Th>
                                <Th ><Text fontSize={"xs"} >QUANTITY</Text></Th>
                                <Th isNumeric><Text fontSize={"xs"} >TOTAL</Text></Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {data?.map((item) =>(
                                <Tr >
                                    <Td>
                                        <Flex>
                                            <Image src={item.poster} h="150px" />
                                            <Flex ml="0.5rem" gap="0.5rem" direction={"column"}>
                                                <Text>{item.name}</Text>
                                                <Text>${item.price }</Text>
                                            </Flex>
                                        </Flex>
                                    </Td>
                                    <Td>
                                     <AddMinus w="50%" id={item.id} quantity={item.quantity} handleAdd={handleAdd} handleDelete={handleDelete} />
                                    </Td>
                                    <Td>
                                       
                                    </Td>
                                </Tr>
                        ))}
                        </Tbody>
                    </Table>
                </TableContainer>
            </Box>
        </Box>
    )
}      