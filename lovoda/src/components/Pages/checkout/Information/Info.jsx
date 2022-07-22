import { Box, Button, Checkbox, Flex, FormControl, FormLabel, Heading, Input, Select, Text, VStack } from "@chakra-ui/react"
import { Link } from "react-router-dom"

export const Info = () => {
    return (
        <Box mt="2rem">
            <FormControl>
                <FormLabel ><Heading fontSize={"2xl"} fontWeight={"400"} mb="1rem">Contact Information</Heading></FormLabel>
                <Input type="email" placeholder="Email or Phone Number" />
                <Checkbox mt="0.5rem">	Email me with news and offers</Checkbox>
            </FormControl>
            <Box mt="2rem">
                <FormControl>
                    <Heading mb="1.5rem" fontSize={"2xl"} fontWeight={"400"}>Shipping address</Heading>
                    <Flex direction={"column"} gap="0.5rem" >
                        <Select>
                     <option value="not selected">Country</option>
                    <option value="US">United State</option>
                    </Select>
                    <Flex>
                         <Input placeholder="Fist name" w="45%" mr="1.4rem" />  
                        <Input placeholder="Last name" w="45%"/>   
                    </Flex>  
                        <Input placeholder="Company (optional)" /> 
                        <Input placeholder="Address" />
                        <Input placeholder = "Appartment (optional)" />
                        <Flex gap={"0.5rem"}>
                            <Input placeholder="City" w="32%" />
                            <Select w={"32%"}>
                                <option value="">State</option>
                                <option value="Albama">Albama</option>
                                <option value="Alaska">Alaska</option>
                                <option value="Arizona">Arizona</option>
                                <option value="Georgia">Georgia</option>
                                <option value="Hawaii">Hawaii</option>
                            </Select>
                            <Input placeholder="Zip Code" type="number" w={"32%"}/>
                        </Flex>
                        <Input placeholder="Phone" type="number" />
                </Flex>
                </FormControl>
                <Flex mt="2rem" alignItems={"center"} justifyContent="space-between">
                    <Link to="/cart" ><Text color="blue" fontSize="sm">Return to cart</Text></Link>
                  <Link to="/checkout/shipping" >  <Button  borderRadius={"none"} _hover={{ bgColor: "black", color: "white" }}  bgColor={"black"} color="white" ><Text fontSize={"sm"}> Continue to shipping</Text></Button></Link>
                </Flex>
            </Box>
        </Box>
    )
}