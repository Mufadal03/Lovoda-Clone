import { Box, Button, Checkbox, Flex, Heading, Icon, Text, VStack } from "@chakra-ui/react"
import { Link, useNavigate } from "react-router-dom"
import { Inputs } from "./Input"
import { Option } from "./Options"
import { FcGoogle } from "react-icons/fc"
import {RiAmazonFill} from "react-icons/ri"
import {BsFacebook} from "react-icons/bs"
import { useState } from "react"
import { useEffect } from "react"

export const Login = () => {
    const navigate = useNavigate()
    const [data, setData] = useState()
    const [login,setLogin] = useState({email:"",password:""})
    useEffect(() => {
        fetch("https://muffi-server.herokuapp.com/signup")
            .then((res) => res.json())
            .then((res) => {
                console.log(res)
            setData(res)
        })
    }, [])
    const handleChange = (e) => {
        const { name, value } = e.target
        setLogin(
            {
                ...login,
                [name]:value
            }
        )
    }
    const handleSubmit = () => {
        // console.log(login)
        let c = data?.filter((item) => {
            return item.email===login.email&&item.password===login.password
        })
        // console.log(c)
        if (c.length == 0) alert("Wrong Credentials")
        else {
            alert("Login Success")
            navigate("/")
        }
    }
    return (
        <Box my="2rem" >
             <Box  w="30%" m="auto">
            <Heading textAlign={"center"} my="2rem" fontWeight="sm">Login</Heading>
            {/* login options */}
            <Flex direction={"column"} gap="0.5rem" mt="2rem"  h="auto">
                <Option><Button _hover={{bgColor:"white"}} borderRadius={"none"} leftIcon={<Icon w="6" h="6" as={BsFacebook}></Icon>}  w="100%" variant="outline" colorScheme={"facebook"}>Continue with Facebook</Button></Option>
                <Option><Button leftIcon={<Icon w="6" h="6" as={FcGoogle} />} borderRadius={"none"}  boxShadow={"md"} w="100%" colorScheme={"whiteAlpha"} color="blackAlpha">Google</Button></Option>
                <Option><Button leftIcon={<Icon w="6" h="6" as={RiAmazonFill}></Icon>} borderRadius={"none"}  boxShadow={"md"} w="100%" colorScheme={"orange"} color="black">Amazon</Button></Option>
            </Flex>
            {/* login options */}
            <VStack  mt="2rem" gap="0.5rem">
                <Inputs placholder="Email" type="email" name="email" handleChange={handleChange}/>
                <Inputs placholder="Password" type="password" name="password"handleChange={handleChange}/>
            </VStack>
            <Flex alignItems={"center"} direction="column" gap="0.5rem" my="1rem" >
                    <Button  onClick={handleSubmit} borderRadius={"none"} py="1.5rem" px="2rem" bgColor={"black"} color="white" _hover={{ bgColor: "black", color: "white" }} ><Text fontWeight={"400"} fontSize={"md"}>Sign In</Text></Button>
                    <Link to="/signup"><Text>Create an account</Text></Link>
            </Flex>
        </Box>
        </Box>
    )
}