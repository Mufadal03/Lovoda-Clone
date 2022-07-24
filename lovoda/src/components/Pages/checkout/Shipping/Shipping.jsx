import { Box, Button, Divider, Flex, Heading, Image, Radio, RadioGroup, Spacer, Text } from "@chakra-ui/react"
import { useEffect } from "react"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { DeleteCart } from "../../../../delete"
import { BreadCrum } from "../../../common/BreadCrum"
import { SideBar } from "../Sidebar"

export const Shipping = () => {
    const [shipping, setShipping] = useState(0)
    const [method,setMethod] = useState("")
    const [data, setData] = useState()
    const [load, setLoad] = useState(false)
    const [len, setLen] = useState()
    const navigate = useNavigate()
    setTimeout(() => {
       setLoad(true) 
    },2000)
    
    const handleChange = (e) => {
        const { name, value } = (e.target)
        setShipping(value)
        setMethod(name)
    }
    useEffect(() => {
        // DeleteCart()call to delete tested example
        fetch("https://muffi-server.herokuapp.com/cartInfo")  
            .then((res) => res.json())
            .then((res) => {
                console.log(res)
                setLen(res.length)
                setData(res)
        })
    }, [])
    const handleSubmit = () => {
        fetch(`https://muffi-server.herokuapp.com/cartInfo/${len}`, {
            method: "PATCH",
            body: JSON.stringify({
                method: method,
                fare:shipping
            }),
            headers:{"Content-type":"application/json"}
        })
        navigate("/checkout/payment")
    }
    return (
       <Box w="73%" m="2rem auto" h="90vh">
            <Flex >
                {/* left */}
                <Box w="60%" borderRight="1px solid gray"> 
                    <Box w="95%" >
                       <Image src="https://cdn.shopify.com/s/files/1/0627/7388/7215/files/04122019_logo2.png?176" h="60px" />
                        {/* breadcrum */}
                        <Box mt="1rem">
                            <BreadCrum />
                        </Box>
                        {/* breadcrum */}
                        {/* ship & contact info */}
                        <Box p="2" my="1rem">
                            <Divider orientation="horizontal" />
                            <Flex gap="1.5rem" my="0.5rem">
                                <Text fontWeight={"200"}>Contact</Text>
                                <Text flexGrow="2" fontSize={"md"} fontWeight="400">{data? data[len-1].email:"Not Found"}</Text>
                                <Link to="/checkout/info"><Text color="blue"  fontSize={"sm"}>Change</Text></Link>
                            </Flex>
                            <Divider orientation="horizontal" />
                            <Flex gap="1.5rem" my="0.5rem">
                                <Text fontWeight={"200"}>Ship to</Text>
                                <Text flexGrow="2" fontSize={"md"} fontWeight="400">{data?data[len-1].add:"Not Found" }</Text>
                                <Link to="/checkout/info"><Text color="blue" fontSize={"sm"}>Change</Text></Link>
                            </Flex>
                            <Divider orientation="horizontal" />

                        </Box>
                        {/* ship & contact info */}
                        {/* shipMethod */}
                        <Box my="3rem" >
                            <Heading fontSize={"2xl"} fontWeight={"sm"}>Shipment Method</Heading>
                            <Box mt="1rem">
                                <RadioGroup >
                                    <Flex border="1px solid"  p="2" justifyContent={"space-between"}> 
                                        <Radio value="4.00  "name="Economy" onChange={handleChange}>
                                                <Flex direction="column"  ml="0.5rem">
                                                    <Text>Economy</Text>
                                                    <Text>5 to 8 business Days</Text>
                                                </Flex>
                                                 <Spacer />
                                        </Radio>
                                         <Text fontWeight={"bold"}>$4.00</Text>

                                    </Flex>
                                     <Flex border="1px solid" my="0.5rem" p="2" justifyContent={"space-between"}> 
                                        <Radio value="8.00" name="UPS Ground"  onChange={handleChange}>
                                                <Flex direction="column"  ml="0.5rem">
                                                    <Text>UPS® Ground</Text>
                                                    <Text>2 business Days</Text>
                                                </Flex>
                                                 <Spacer />
                                        </Radio>
                                         <Text fontWeight={"bold"}>$8.00</Text>

                                    </Flex>
                                     <Flex border="1px solid" p="2" justifyContent={"space-between"}> 
                                        <Radio value="8.12"name="UPS Priority Mail"   onChange={handleChange}>
                                                <Flex direction="column"  ml="0.5rem">
                                                    <Text>USPS Priority Mail</Text>
                                                    <Text>2 business Days</Text>
                                                </Flex>
                                                 <Spacer />
                                        </Radio>
                                         <Text  fontWeight={"bold"}>$8.12</Text>

                                    </Flex>
                                </RadioGroup>
                            </Box>
        
                        </Box>
                        {/* shipMethod */}
                        {/* buttonGroups */}
                        <Flex my="2rem"  alignItems={"center"}>
                            <Link to="/checkout/info"><Text color="blue" fontSize={"sm"}>Return to information</Text></Link>
                            <Spacer />
                            <Button onClick={handleSubmit} borderRadius={"none"} _hover={{ bgColor: "black", color: "white" }}  bgColor={"black"} color="white" size="lg" fontSize={"md"} fontWeight="sm"> continue to payment</Button>
                        </Flex>
                        {/* buttonGroups */}

                     </Box>
                </Box>
                {/* left */}
                {/* right */}
                <Box w="40%">
                    <SideBar shipping={shipping} />
                </Box>
                {/* right */}
            </Flex>
        </Box>
    )
}