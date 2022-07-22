import { Box, Button, Circle, Divider, Flex, Heading, Image, Input, Spacer, Text } from "@chakra-ui/react"
import { useEffect, useState } from "react"

export const SideBar = () => {
     const [data, setData] = useState()
    useEffect(() => {
        fetch(`https://muffi-server.herokuapp.com/cart`)
            .then((res) => res.json())
            .then((res) => {
            setData(res)
        })
    }, [])
    return (
        <Box >
            <Flex mb="1rem" gap="0.5rem" direction={"column"}> 
                {data?.map((item) => (
                    <Flex alignItems={"center"} px="2" bgColor={"gray.50"}>
                        <Box p="1" mr="0.3rem" border="1px solid "><Image src={item.poster} h="40px" w="40px"/></Box>
                        <Text fontSize={"sm"} fontWeight="500">{item.name}</Text>
                        <Spacer />
                        <Text fontSize={"sm"} fontWeight="500">${ item.price}</Text>
                    </Flex>
                ))}
            </Flex >
            <Divider orientation="horizontal" />
            <Flex w="90%" m="1rem auto">
                <Input placeholder="Gift card or discount coupon"  w="80%" mr="0.4rem"/>
                <Button bgColor="black" color="white" _hover={{bgColor:"black",color:"white"}}>Apply</Button>
            </Flex>
            <Divider orientation="horizontal" />

            <Flex direction={"column"} gap="0.5rem" w="90%" m="1rem auto">
                <Flex>
                    <Text>Subtotal</Text>
                    <Spacer />
                    <Text>$Sub-Total</Text>
                </Flex>
                <Flex>
                    <Text>Shipping</Text>
                    <Spacer />
                    <Text>$4.00</Text>
                </Flex>
            <Divider orientation="horizontal" />
                <Flex mt="1rem">
                    <Heading fontSize={"2xl"} fontWeight="lg">total</Heading>
                    <Spacer />
                    <Heading fontSize={"2xl"} fontWeight="lg">$Total</Heading>
                </Flex>
            </Flex>
            
        </Box>
    )
}