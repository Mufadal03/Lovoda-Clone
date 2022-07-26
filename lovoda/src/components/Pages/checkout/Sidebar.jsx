import { Box, Button, Circle, Divider, Flex, Heading, Image, Input, Spacer, Text } from "@chakra-ui/react"
import { useEffect, useState } from "react"

export const SideBar = ({show}) => {
    const [data, setData] = useState()
    const [total, setTotal] = useState()
    const [cart, setCartData] = useState()
    const [len,setLen] = useState()
    const [discount,setDiscount] = useState(0)
    const [coupon,setCoupon] = useState("")
    // const [shipping,setShipping] = useState("")
     const Total = (calc) => {
            let my = calc?.reduce((acc,item) => {
               return acc+item.price*item.quantity
            }, 0)
         setTotal(Number(my))
    }   
    useEffect(() => {
        fetch(`https://json-mock-vercel-alpha.vercel.app/cart`)
            .then((res) => res.json())
            .then((res) => {
                setData(res)
                Total(res)
        })
    }, [])
    const handleChange = (e) => {
        setCoupon(e.target.value)
    }
    const apply = () => {
        if (coupon === "MUFFY10") {
            setDiscount(10)
        }
    }
      useEffect(() => {
        // DeleteCart()call to delete tested example
        fetch("https://json-mock-vercel-alpha.vercel.app/cartInfo")  
            .then((res) => res.json())
            .then((res) => {
                console.log(res)
                setLen(res.length-1)
                setCartData(res)
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
            {show && <Flex w="90%" m="1rem auto">
                <Input placeholder="Gift card or discount coupon"  w="80%" mr="0.4rem " onChange={handleChange}/>
                <Button onClick={apply} bgColor="black" color="white" _hover={{bgColor:"black",color:"white"}}>Apply</Button>
            </Flex>}
            <Divider orientation="horizontal" />

            <Flex direction={"column"} gap="0.5rem" w="90%" m="1rem auto">
                <Flex>
                    <Text>Subtotal</Text>
                    <Spacer />
                    <Text>${total }</Text>
                </Flex>
                <Flex>
                    <Text>Discount</Text>
                    <Spacer />
                    <Text>${discount }</Text>
                </Flex>
                <Flex>
                    <Text>Shipping</Text>
                    <Spacer />
                    <Text>{cart?cart[len].fare:"Loading...." }</Text>
                </Flex>

            <Divider orientation="horizontal" />
                <Flex mt="1rem">
                    <Heading fontSize={"2xl"} fontWeight="lg">total</Heading>
                    <Spacer />
                    <Heading fontSize={"2xl"} fontWeight="lg">${cart?total+Number(cart[len].fare)-discount:total }</Heading>
                </Flex>
            </Flex>
            
        </Box>
    )
}