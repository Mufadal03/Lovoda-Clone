import { Badge, Box, Button, Divider, Flex, Heading, HStack, Icon, Image, Text, useToast, VStack } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { YouMakeLike } from "../../../common/YouMayLike"
import { TbStar } from "react-icons/tb"
import {IoChatbubblesOutline} from "react-icons/io5"
import { AddIcon, MinusIcon } from "@chakra-ui/icons"
import {BsCart3, BsSuitHeart} from "react-icons/bs"
import { MyButton } from "../../../common/MyButton"
export const DetailedEarrings = () => {
    const [data, setData] = useState()
    const param = useParams()
    const toast = useToast()
    const wishlist = useToast()
    useEffect(() => {
        fetch(`https://muffi-server.herokuapp.com/earrings/${param.earrings_id}`)
            .then((res) => res.json())
            .then((res) => {
            setData(res)
        })
    }, [])
    const handleAdd = () => {
       
        setData(
            {
                ...data,
                quantity:data?.quantity+1
           }
        )
    }
    const handleDelete = () => {
        if (data?.quantity == 1) return
        else {
            setData(
            {
                ...data,
                quantity:data?.quantity-1
           })
        }
    }
    const AddToCart = (name) => {
        toast({
          title: 'Added to cart',
          description: name,
          status: 'success',
          duration: 7000,
          isClosable: true,
        })
        fetch("https://muffi-server.herokuapp.com/cart", {
            method: "POST",
            body: JSON.stringify(data),
            headers:{"Content-Type":"application/json"}
        })
    }
    const AddToWishList = (name) => {
        wishlist({
          title: 'Added to wishlist',
          description: name,
          status: 'success',
          duration: 4000,
          isClosable: true,
        })
        fetch("https://muffi-server.herokuapp.com/wishlist", {
            method: "POST",
            body: JSON.stringify(data),
            headers:{"Content-Type":"application/json"}
        })
    }
    const AddToBuyNow = () => {
        fetch("https://muffi-server.herokuapp.com/buynow", {
            method: "POST",
            body: JSON.stringify(data),
            headers:{"Content-Type":"application/json"}
        })
    }
    return(
        <Box>
            <Box w="70%" m="auto">
            <Flex>
                <Box  w="65%" >
                    <Image w="100%" src={data?.poster} />
                    
                    <Flex mt="0.5rem" gap="0.5rem">
                        <Box w="50%" h="500px" bgImage={`url(${data?.hover_poster})`} bgPosition="center" bgSize={"cover"} ></Box>
                        <Box w="50%" h="500px" bgImage={`url(${data?.poster})`} bgPosition="center" bgSize={"cover"}></Box>
                    </Flex>
                </Box>
                <Box p="1rem"pr="0" pos="sticky" top="0" h="600px" w="35%">
                    <Box  >
                        <Text fontSize={"xs"}>LOVODA</Text>
                        <Heading mb="1rem" fontWeight={"sm"}>{data?.name}</Heading>
                        <Flex alignItems={"center"}>
                            {new Array(5).fill(0).map((i) => (
                                <Icon color="#C4A484" mx="0.1rem" as={TbStar} />
                            ))}
                            <Text ml="0.3rem" as={"span"} >Write a review</Text>
                        </Flex>
                        <Flex my="0.3rem" gap="0.2rem" alignItems={"center"}>
                            <Divider orientation="vertical" />
                            <Icon as={IoChatbubblesOutline} />
                            <Text fontWeight={"sm"} fontSize={"sm"}>Ask a question</Text>
                        </Flex>
                        <Text ml="0.2rem" my="0.5rem" fontSize={"xl"}>${data?.price}</Text>
                        <Badge mr="0.2rem" colorScheme={"green"}>After Pay</Badge><Text fontSize={"xs"} as={"span"}>available for orders between $35 - $1,000 ⓘ</Text><br />
                        <Text as="span" fontSize={"xs"}>Pay in 4 interest-free installments for orders over $50 with</Text><Badge colorScheme={"blue"}>Shop Pay</Badge>
                        <Box mt="1.5rem">
                            <Text  fontSize={"md"} >Quantity</Text>
                             <Flex mt="0.3rem" border="1px solid " w="40%" justifyContent={"center"}>
                                <Box _hover={{cursor:"pointer"}} px="3" py="2"  mr="1" onClick={handleDelete} ><MinusIcon  h={3} w={3}  /></Box>
                                <Box _hover={{cursor:"pointer"}} px="3" py="2" mr="1"><Text fontSize={"md"}>{data?.quantity}</Text></Box>
                                <Box _hover={{cursor:"pointer"}} px="3"py="2" mr="1" onClick={handleAdd}><AddIcon h={3} w={3} /></Box>

                            </Flex>
                        </Box>  
                        <Flex my="1.5rem" direction="column" gap="0.5rem">
                                <MyButton name={data?.name} func={AddToCart} task="Add to cart" icon={BsCart3} />
                                <MyButton name={data?.name} func={AddToWishList} task="Add to wishlist" icon={BsSuitHeart} />

                               <Button bgColor={"black"} color="white" _hover={{bgColor:"black"}} borderRadius="none" border="1px solid black" onClick={AddToBuyNow}>Buy it Now</Button> 

                        </Flex>
                    </Box>
                </Box>

            </Flex>



            </Box>
            <Box w="80%" m="3rem auto">
            <YouMakeLike/>
            </Box>
        </Box>
        
    )
}