import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export const Success = () => {
    const [data, setData] = useState()
    const [len, setLen] = useState()
    useEffect(() => {
        fetch("https://muffi-server.herokuapp.com/cartInfo")   
            .then((res) => res.json())
            .then((res) => {
                setData(res)
                
                setLen(res.length-1)
        })
    },[])
    return (
        <Box w="80%" m="2rem auto">
            <Box w="60%" m="auto" flexDirection={"column"} display={"flex"} alignItems="center">
                <Image src="https://cms-assets.tutsplus.com/cdn-cgi/image/width=630/uploads/users/523/posts/32694/final_image/tutorial-preview-large.png" h="200px"  />
                <Heading>Your Payment</Heading>
                <Heading>was successfull!</Heading>
                <Flex flexDirection="column" alignItems="center" justifyContent="center" my="1rem">
                    <Text>
                        We will send email on {data?data[len].email:"email"} a 
                    </Text> 
                    <Text>
                        reciept for each invoice
                    </Text>
                </Flex>
                <Link to="/"><Button colorScheme={"green"} >Return</Button></Link>
            </Box>
        </Box>
    )
}