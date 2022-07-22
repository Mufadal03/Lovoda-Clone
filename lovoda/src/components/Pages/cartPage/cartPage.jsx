import { Badge, Box, Button, Divider, Flex, Heading, Icon, Image, Spacer, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr, VStack,  } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { FcGoogle } from "react-icons/fc"
import { Link } from "react-router-dom"
import { AddMinus } from "../../common/AddMinus"
import { Delete } from "../../common/Delete"

export const Cart = () => {
    const [data, setData] = useState()
    const [total,setTotal] = useState()
     const Total = () => {
            let my = data?.reduce((acc,item) => {
               return acc+item.price*item.quantity
            }, 0)
         setTotal(my)
            console.log(my)
    }   
    
    useEffect(() => {
        FetchMe()
    }, [])
    const FetchMe = () => {
        fetch("https://muffi-server.herokuapp.com/cart")
            .then((res) => res.json()) 
            .then((res) => {
                setData(res)
            }).catch((err) => {
                console.log(err)
            })
        Total()
        
    }
   
    const handleAdd = (id,Mydata) => {
        console.log(id)
        fetch(`https://muffi-server.herokuapp.com/cart/${id}`, {
            method: "PATCH",
            body: JSON.stringify({
                quantity:Mydata.quantity+1
            }),
            headers:{"Content-Type":"application/json"}
        }).then((res) => res.json())
            .then((res) => {
                FetchMe()

            })
    }
    
    const handleSub = (id, Mydata) => {
        if(Mydata.quantity==1)return
     fetch(`https://muffi-server.herokuapp.com/cart/${id}`, {
            method: "PATCH",
            body: JSON.stringify({
                quantity:Mydata.quantity-1
            }),
            headers:{"Content-Type":"application/json"}
        }).then((res) => res.json())
            .then((res) => {
                FetchMe()
            })
    }
    const handleDelete = (id) => {
        console.log(id)
        fetch(`https://muffi-server.herokuapp.com/cart/${id}`, {
            method: "DELETE",
            headers:{"Content-type":"application/json"}
        }).then(()=>{
            FetchMe()
        })
        
    }
    return (
        <Box  w="80%" m="4rem auto">
            <Flex my="2rem" alignItems="center">
                <Heading fontWeight={"sm"}>Your Cart</Heading>
                <Spacer />
                <Link to="/"><Text textDecoration={"underline"}>Countinue Shopping</Text></Link>
            </Flex>
            <Box  >
                <TableContainer>
                    <Table variant={"simple"} >
                        <Thead>
                            <Tr>
                                <Th><Text fontSize={"xs"}>PRODUCT</Text></Th>
                                <Th ><Text fontSize={"xs"} >QUANTITY</Text></Th>
                                <Th isNumeric><Text fontSize={"xs"} >TOTAL</Text></Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {data?.map((item) =>(
                                <Tr key={item.id} >
                                    <Td>
                                        <Flex>
                                            <Image src={item.poster} h="150px" />
                                            <Flex ml="0.5rem" gap="0.5rem" direction={"column"}>
                                                <Text>{item.name}</Text>
                                                <Text>${item.price }</Text>
                                            </Flex>
                                        </Flex>
                                    </Td>
                                    <Td>
                                        <Flex>
                                              <AddMinus w="50%" data={item} id={item.id} quantity={item.quantity} handleAdd={handleAdd} handleDelete={handleSub} />
                                        <Delete id={item.id} handleDelete={handleDelete} />
                                      </Flex>
                                    </Td>
                                    <Td isNumeric>
                                        <Text>${item.quantity*item.price }</Text>
                                    </Td>
                                </Tr>
                        ))}
                        </Tbody>
                    </Table>
                    {/* <Divider orientation="horizontal" /> */}
                </TableContainer>
            </Box>
            <Flex mt="2rem" direction={"row-reverse"} >
                <Box px="1rem"  w="30%">
                    <Text textAlign={"right"}>SubTotal :${total }</Text>
                    <Badge colorScheme={"green"}>After Pay</Badge><Text fontSize={"sm"} as="span"  >available for orders between $35 - $1,000 </Text>
                    <Flex direction={"column"} gap="0.5rem" mt=" 1rem" border="2px solid green">
                        <Link to="/checkout/info" ><Button w="100%" borderRadius={"none"} _hover={{ bgColor: "black", color: "white" }} bgColor={"black"} color="white"><Text>Checkout</Text></Button></Link>
                        <Link to="/" ><Button w="100%" borderRadius={"none"} _hover={{ bgColor: "black", color: "white" }} colorScheme={"blue"}><Text>Insert shop pay logo</Text></Button></Link>
                        <Link to="/" ><Button w="100%" borderRadius={"none"} _hover={{ bgColor: "black", color: "white" }} bgColor={"black"} color="white"><Text>insert paypal logo</Text></Button></Link>
                        <Link to="/" ><Button w="100%" borderRadius={"none"} _hover={{ bgColor: "black", color: "white" }} leftIcon={<Icon w="6" h="6" as={FcGoogle} />} bgColor={"black"} color="white"><Text>Pay</Text></Button></Link>
                        
                    
                    </Flex>

                </Box>  
            </Flex>
        </Box>
    )
}      