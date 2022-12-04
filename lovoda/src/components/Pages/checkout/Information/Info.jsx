import { Box, Button, Checkbox, Flex, FormControl, FormLabel, Heading, Input, Select, Text, VStack } from "@chakra-ui/react"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

export const Info = () => {
    const navigate = useNavigate()
    const [form, setForm] = useState({
        email: "",
        country: "",
        Fname: "",
        Lname: "",
        add: "",
        city: "",
        state: "",
        zipCode: "",
        phone: "",
        method: "",
        fare:0
    })
    const handleChange = (e) => {
        const {name,value} = e.target
        setForm(
            {
                ...form,
                [name]:value
            }
        )
    }
    const handleSubmit = () => {
        fetch("https://json-mock-vercel-alpha.vercel.app/cartInfo", {
            method: "POST",
            body: JSON.stringify(form),
            headers:{"Content-type":"application/json"}
        })
        // console.log(form)
        navigate("/checkout/shipping")
    }
    return (
        <Box mt="2rem">
            <FormControl>
                <FormLabel ><Heading fontSize={"2xl"} fontWeight={"400"} mb="1rem">Contact Information</Heading></FormLabel>
                <Input type="email" name="email" onChange={handleChange} placeholder="Email or Phone Number" />
                <Checkbox mt="0.5rem">	Email me with news and offers</Checkbox>
            </FormControl>
            <Box mt="2rem">
                <FormControl>
                    <Heading mb="1.5rem" fontSize={"2xl"} fontWeight={"400"}>Shipping address</Heading>
                    <Flex direction={"column"} gap="0.5rem" >
                        <Select name="country" onChange={handleChange}>
                     <option value="not selected">Country</option>
                    <option value="US">United State</option>
                    </Select>
                    <Flex>
                         <Input name="Fname" onChange={handleChange} placeholder="Fist name" w="45%" mr="1.4rem" />  
                        <Input name="Lname" onChange={handleChange} placeholder="Last name" w="45%"/>   
                    </Flex>  
                        <Input placeholder="Company (optional)" /> 
                        <Input name="add" onChange={handleChange} placeholder="Address" />
                        <Input placeholder = "Appartment (optional)" />
                        <Flex gap={"0.5rem"}>
                            <Input name="city" onChange={handleChange} placeholder="City" w="32%" />
                            <Select w={"32%"} name="state" onChange={handleChange}>
                                <option value="">State</option>
                                <option value="Albama">Albama</option>
                                <option value="Alaska">Alaska</option>
                                <option value="Arizona">Arizona</option>
                                <option value="Georgia">Georgia</option>
                                <option value="Hawaii">Hawaii</option>
                            </Select>
                            <Input name="zipCode" onChange={handleChange} placeholder="Zip Code" type="number" w={"32%"}/>
                        </Flex>
                        <Input name="phone" onChange={handleChange}placeholder="Phone" type="number" />
                </Flex>
                </FormControl>
                <Flex mt="2rem" alignItems={"center"} justifyContent="space-between">
                    <Link to="/cart" ><Text color="blue" fontSize="sm">Return to cart</Text></Link>
                    <Button onClick={handleSubmit}  borderRadius={"none"} _hover={{ bgColor: "black", color: "white" }}  bgColor={"black"} color="white" ><Text fontSize={"sm"}> Continue to shipping</Text></Button>
                </Flex>
            </Box>
        </Box>
    )
}