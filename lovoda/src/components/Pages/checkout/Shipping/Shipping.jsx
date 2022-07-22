import { Box, Button, Divider, Flex, Heading, Image, Radio, RadioGroup, Spacer, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { BreadCrum } from "../../../common/BreadCrum"
import { SideBar } from "../Sidebar"

export const Shipping = () => {
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
                                <Text flexGrow="2"  fontSize={"md"} fontWeight="400">Entered Contact on info page</Text>
                                <Link to="/checkout/info"><Text color="blue"  fontSize={"sm"}>Change</Text></Link>
                            </Flex>
                            <Divider orientation="horizontal" />
                            <Flex gap="1.5rem" my="0.5rem">
                                <Text fontWeight={"200"}>Ship to</Text>
                                <Text flexGrow="2" fontSize={"md"} fontWeight="400">Entered add on info page</Text>
                                <Link to="/checkout/info"><Text color="blue" fontSize={"sm"}>Change</Text></Link>
                            </Flex>
                            <Divider orientation="horizontal" />

                        </Box>
                        {/* ship & contact info */}
                        {/* shipMethod */}
                        <Box my="3rem" >
                            <Heading fontSize={"2xl"} fontWeight={"sm"}>Shipment Method</Heading>
                            <Box mt="1rem">
                                <RadioGroup>
                                    <Flex border="1px solid"  p="2" justifyContent={"space-between"}> 
                                        <Radio value="4.00  ">
                                                <Flex direction="column"  ml="0.5rem">
                                                    <Text>Economy</Text>
                                                    <Text>5 to 8 business Days</Text>
                                                </Flex>
                                                 <Spacer />
                                        </Radio>
                                         <Text fontWeight={"bold"}>$4.00</Text>

                                    </Flex>
                                     <Flex border="1px solid" my="0.5rem" p="2" justifyContent={"space-between"}> 
                                        <Radio value="8.00">
                                                <Flex direction="column"  ml="0.5rem">
                                                    <Text>UPS® Ground</Text>
                                                    <Text>2 business Days</Text>
                                                </Flex>
                                                 <Spacer />
                                        </Radio>
                                         <Text fontWeight={"bold"}>$8.00</Text>

                                    </Flex>
                                     <Flex border="1px solid" p="2" justifyContent={"space-between"}> 
                                        <Radio value="8.12">
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
                            <Link to="/checkout/payment"><Button borderRadius={"none"} _hover={{ bgColor: "black", color: "white" }}  bgColor={"black"} color="white" size="lg" fontSize={"md"} fontWeight="sm"> continue to payment</Button></Link>
                        </Flex>
                        {/* buttonGroups */}

                     </Box>
                </Box>
                {/* left */}
                {/* right */}
                <Box w="40%">
                    <SideBar />
                </Box>
                {/* right */}
            </Flex>
        </Box>
    )
}