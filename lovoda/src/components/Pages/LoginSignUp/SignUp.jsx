import { Box, Button, Checkbox, Flex, Heading, Icon, Text, VStack } from "@chakra-ui/react"
import { Inputs } from "./Input"
import { Option } from "./Options"
import { FcGoogle } from "react-icons/fc"
import {RiAmazonFill} from "react-icons/ri"
import {BsFacebook} from "react-icons/bs"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { useEffect } from "react"
export const SignUp = () => {
    const [isLoading, setLoading] = useState(false)
    const navigate = useNavigate()
    // const [data,setData] = useState()
    const [form, setForm] = useState({
        Fname: "",
        Lname:"",
        email: "",
        password:""
    })
    // useEffect(() => {
    //     fetch("https://muffi-server.herokuapp.com/signup")
    //         .then((res) => res.json())
    //         .then((res) => {
    //         setData(res)
    //  })   
    // },[])
    const handleChange = (e) => {
        const { name, value } = e.target
        setForm(
            {
                ...form,
                [name]:value
            }
        )
    }
    const handleSubmit = () => {
        // data?.map((item) => {
        //     if (item.email === form.email)
        //     {
        //         alert("Email Already Exist")
                
        //     }
        // })
        setLoading(true)
        fetch("https://json-mock-vercel-alpha.vercel.app/signup", {
            method: "POST",
            body: JSON.stringify(form),
            headers:{"Content-Type" :"application/json"}
        }).then(() => {
            setLoading(false)
            navigate("/login")
        })
    }
    return (
        <Box  w="30%" m="2rem auto">
            <Heading textAlign={"center"} my="2rem" fontWeight="sm">Create account</Heading>
            {/* login options */}
            <Flex direction={"column"} gap="0.5rem" mt="2rem"  h="auto">
                <Option><Button _hover={{bgColor:"white"}} borderRadius={"none"} leftIcon={<Icon w="6" h="6" as={BsFacebook}></Icon>}  w="100%" variant="outline" colorScheme={"facebook"}>Continue with Facebook</Button></Option>
                <Option><Button leftIcon={<Icon w="6" h="6" as={FcGoogle} />} borderRadius={"none"}  boxShadow={"md"} w="100%" colorScheme={"whiteAlpha"} color="blackAlpha">Google</Button></Option>
                <Option><Button leftIcon={<Icon w="6" h="6" as={RiAmazonFill}></Icon>} borderRadius={"none"}  boxShadow={"md"} w="100%" colorScheme={"orange"} color="black">Amazon</Button></Option>
            </Flex>
            {/* login options */}
            <VStack  mt="1rem" gap="0.5rem">
                <Inputs placholder="Enter name" name="Fname"  handleChange={handleChange} />
                <Inputs placholder="Last name" name="Lname" handleChange={handleChange}/>
                <Inputs placholder="Email" type="email" name="email" handleChange={handleChange}/>
                <Inputs placholder="Password" type="password" name="password" handleChange={handleChange}/>
            </VStack>
            <Flex gap="5px" alignItems={"center"}><Text my="0.8rem" fontSize={"sm"}>Subscribe for NewsLetter</Text><Checkbox /></Flex>
            <Flex justifyContent={"center"}  my="1rem"  >
                <Button isLoading={isLoading} onClick={handleSubmit} borderRadius={"none"} py="1.5rem" px="2rem" bgColor={"black"} color="white" _hover={{bgColor:"black",color:"white"}} ><Text fontWeight={"400"} fontSize={"md"}>Create</Text></Button>
            </Flex>
        </Box>
    )
}