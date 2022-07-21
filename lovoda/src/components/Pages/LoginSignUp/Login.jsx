import { Box, Button, Checkbox, Flex, Heading, Icon, Text, VStack } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { Inputs } from "./Input"
import { Option } from "./Options"
import { FcGoogle } from "react-icons/fc"
import {RiAmazonFill} from "react-icons/ri"
import {BsFacebook} from "react-icons/bs"

export const Login = () => {
    return (
        <Box my="2rem" >
             <Box border="2px solid red" w="30%" m="auto">
            <Heading textAlign={"center"} my="2rem" fontWeight="sm">Login</Heading>
            {/* login options */}
            <Flex direction={"column"} gap="0.5rem" mt="2rem"  h="auto">
                <Option><Button _hover={{bgColor:"white"}} borderRadius={"none"} leftIcon={<Icon w="6" h="6" as={BsFacebook}></Icon>}  w="100%" variant="outline" colorScheme={"facebook"}>Continue with Facebook</Button></Option>
                <Option><Button leftIcon={<Icon w="6" h="6" as={FcGoogle} />} borderRadius={"none"}  boxShadow={"md"} w="100%" colorScheme={"whiteAlpha"} color="blackAlpha">Google</Button></Option>
                <Option><Button leftIcon={<Icon w="6" h="6" as={RiAmazonFill}></Icon>} borderRadius={"none"}  boxShadow={"md"} w="100%" colorScheme={"orange"} color="black">Amazon</Button></Option>
            </Flex>
            {/* login options */}
            <VStack  mt="2rem" gap="0.5rem">
                <Inputs placholder="Email"/>
                <Inputs placholder="Password"/>
            </VStack>
            <Flex alignItems={"center"} direction="column" gap="0.5rem" my="1rem" >
                    <Link to="/"><Button borderRadius={"none"} py="1.5rem" px="2rem" bgColor={"black"} color="white" _hover={{ bgColor: "black", color: "white" }} ><Text fontWeight={"400"} fontSize={"md"}>Sign In</Text></Button></Link>
                    <Link to="/signup"><Text>Create an account</Text></Link>
            </Flex>
        </Box>
        </Box>
    )
}