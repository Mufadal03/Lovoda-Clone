import { Box, Button, Divider, Flex, Heading, Image, Spacer, Text,Modal,ModalFooter,PinInput,PinInputField,ModalBody,ModalContent,ModalCloseButton,useDisclosure,ModalOverlay,ModalHeader } from "@chakra-ui/react"
import { useEffect } from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import { BreadCrum } from "../../../common/BreadCrum"
import { SideBar } from "../Sidebar"
import { BillingAddress } from "./BillingAddress"
import { Method } from "./Methods"

export const Payment = () => {
                        const { isOpen, onOpen, onClose } = useDisclosure()

    const [shipping, setShipping] = useState(0)
    const [data, setData] = useState()
    const [len, setLen] = useState()
    const re = () => {
        window.location.reload()
    }
    const show = true
    useEffect(() => {
        fetch("https://muffi-server.herokuapp.com/cartInfo")   
            .then((res) => res.json())
            .then((res) => {
                setData(res)
                setShipping(res.fare)
                setLen(res.length-1)
        })
    },[])
    return (
        <Box  w="73%" m="4rem auto" >
            <Flex>
                <Box w="60%" borderRight="1px solid gray"> 
                    <Box w="95%" >
                       <Image onMouseEnter={re} src="https://cdn.shopify.com/s/files/1/0627/7388/7215/files/04122019_logo2.png?176" h="60px" />
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
                                <Text flexGrow="2" fontSize={"md"} fontWeight="400">{data?data[len].email:"Loading...."}</Text>
                                <Link to="/checkout/info"><Text color="blue"  fontSize={"sm"}>Change</Text></Link>
                            </Flex>
                            <Divider orientation="horizontal" />
                            <Flex gap="1.5rem" my="0.5rem">
                                <Text fontWeight={"200"}>Ship to</Text>
                                <Text flexGrow="2" fontSize={"md"} fontWeight="400">{data?data[len].add:"Loading..."}</Text>
                                <Link to="/checkout/info"><Text color="blue" fontSize={"sm"}>Change</Text></Link>
                            </Flex>
                            <Divider orientation="horizontal" />
                            <Flex gap="1.5rem" my="0.5rem">
                                <Text fontWeight={"200"}>Method</Text>
                                <Text flexGrow="2" fontSize={"md"} fontWeight="400">{data?data[len].method:"Loading...." }</Text>
                                <Link to="/checkout/shipping"><Text color="blue" fontSize={"sm"}>Change</Text></Link>
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
                            <Button onClick={onOpen} borderRadius={"none"} _hover={{ bgColor: "black", color: "white" }}  bgColor={"black"} fontSize="sm" color="white" size="lg" ><Text>Complete order</Text></Button>
                        </Flex>
                    <Modal isOpen={isOpen} onClose={onClose}  isCentered motionPreset='slideInBottom'>
                        <ModalOverlay />
                        <ModalContent>
                        <ModalHeader textAlign="center">OTP</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <Flex justifyContent="center" gap="1rem" >
                        <PinInput size="lg">
                            <PinInputField />
                            <PinInputField />
                            <PinInputField />
                            <PinInputField />
                        </PinInput>
                        </Flex>
                                </ModalBody>

                        <ModalFooter>
                           <Link to="/success"> <Button  colorScheme='blue' mr={3} onClick={onClose}>
                            Submit
                            </Button></Link>
                            
                        </ModalFooter>
                        </ModalContent>
                    </Modal>
                     </Box>
                
               </Box>
                <Box w="40%">
                    <SideBar shipping={shipping} show={show} />
                </Box>

            </Flex>

        </Box>
    )
    
}