import { Box, Button, Divider, Flex, Heading, Image, Spacer, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { BreadCrum } from "../../../common/BreadCrum"
import { SideBar } from "../Sidebar"
import { BillingAddress } from "./BillingAddress"
import { Method } from "./Methods"

export const Payment = () => {
    return (
        <Box w="73%" m="4rem auto" >
            <Flex>
                <Box w="60%" borderRight="1px solid gray"> 
                    <Box w="95%" >
                       <Image src="https://cdn.shopify.com/s/files/1/0627/7388/7215/files/04122019_logo2.png?176" h="60px" />
                        {/* breadcrum */}
                        <Box mt="2rem">
                            <BreadCrum />
                        </Box>
                        {/* breadcrum */}
                        {/* method of shipment */}
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
                            <Flex gap="1.5rem" my="0.5rem">
                                <Text fontWeight={"200"}>Method</Text>
                                <Text flexGrow="2" fontSize={"md"} fontWeight="400">Entered method on shipment page</Text>
                                <Link to="/checkout/shipment"><Text color="blue" fontSize={"sm"}>Change</Text></Link>
                            </Flex>
                            <Divider orientation="horizontal" />

                        </Box>
                        {/* method of shipment */}
                        {/* payment option */}

                        <Method />
                        {/* payment option */}
                        <BillingAddress />
                        <Flex alignItems={"center"} mt="1rem">
                            <Link to="/checkout/shipping"><Text color="blue" fontSize="sm">Return to Shipping</Text></Link>
                            <Spacer />
                            <Button borderRadius={"none"} _hover={{ bgColor: "black", color: "white" }}  bgColor={"black"} fontSize="sm" color="white" size="lg" ><Text>Complete order</Text></Button>
                        </Flex>
                     </Box>
                
               </Box>
                <Box w="40%">
                    <SideBar />
                </Box>

            </Flex>

        </Box>
    )
    
}