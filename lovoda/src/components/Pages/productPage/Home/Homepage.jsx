import { Box, Button, Grid, GridItem, Heading, Image, Link, SimpleGrid, Spinner, Text, VStack } from "@chakra-ui/react"
import { useEffect } from "react"
import { useState } from "react"
import { Card } from "../../../common/Card"

export const Homepage = () => {
    document.title="Lovoda"
    const [homeData, setHomeData] = useState()
    const [isLoading,setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        fetch("https://muffi-server.herokuapp.com/homepage")
            .then((res) => res.json())
            .then((res) => {
                // console.log(res)
                setHomeData(res)
                // console.log(homeData)
                setLoading(false)
            }
            )
    },[])
   

    return (
        <>
            <Box h="85vh" 
                bgImage="url('https://cdn.shopify.com/s/files/1/0627/7388/7215/files/13122-2_2000x.jpg?v=1645120932')" bgPosition="center" filter='auto' >
                <VStack>
                    <Heading color="white" ></Heading>
                </VStack>
            </Box>
            <Box w="75%" m="auto" mt="5rem">
                {isLoading && <Box display={"flex"} justifyContent="center">
                    <Spinner
                    thickness='4px'
                    speed='0.65s'
                    emptyColor='gray.200'
                    color='blue.500'
                    size='xl'
                    />
                </Box>}
                 <SimpleGrid gap="0.8rem" gridTemplateColumns="repeat(4,1fr)" gridTemplateRows={"auto"}>
                {
                    homeData?.map((item) => (
                        <GridItem>
                             <Card hover={item.hover_poster} poster={item.poster} name={item.name} price={item.price} id={item.id} prod="homepage" />
                        </GridItem>
                    ))
                }
                </SimpleGrid>
                <Box mt="3rem" >
                    <Heading my="1rem" fontWeight="400" size="xl" textAlign={"center"}>Shop the feed</Heading>
                    <Text color="gray.500" textAlign={"center"} fontWeight="400">Tag us on instagram @LovodaShop or #Lovoda</Text>
                    <Box  mt="2rem">
                        <Grid templateAreas={`"one one two three four"
                                            "one one five six six"
                                            "seven eight nine six six"`}
                       gap="10px" gridTemplateColumns={"repeat(5,1fr)"} gridTemplateRows={"repeat(3,1fr)"}>
                        <GridItem area={"one"}><Box><Image src="https://storage.covet.pics/postassets/12327673/high_resolution/1b248440676a46ccaef5418696b6cafb" /></Box></GridItem>
                        <GridItem  area={"two"} > <Box><Image src="https://storage.covet.pics/postassets/12007666/high_resolution/e914c46768434be928cbaeb7cda40f9a" /></Box>   </GridItem>
                        <GridItem area={"three"} > <Box><Image src="https://storage.covet.pics/postassets/11999924/high_resolution/2396933b0a70143ee84c2b0352ccc5f2" /></Box></GridItem>
                        <GridItem area={"four"} > <Box><Image src="https://storage.covet.pics/postassets/11980922/high_resolution/f8541afa692ffd452c7f1120072e233d" /></Box>  </GridItem>
                        <GridItem area={"five"} > <Box><Image src="https://storage.covet.pics/postassets/11953653/high_resolution/471bf5939674561bef2f5f68cdbdb850  " /> </Box>  </GridItem>
                        <GridItem area={"six"} > <Box><Image src="https://storage.covet.pics/postassets/11944342/high_resolution/efc112d679181b8203a58000b44aa492" /></Box>   </GridItem>
                        <GridItem area={"seven"} > <Box><Image src="https://storage.covet.pics/postassets/11937553/high_resolution/50acd47dd427d9a413d89e3e186e8fa1" /></Box>   </GridItem>
                        <GridItem area={"eight"} ><Box> <Image src="https://storage.covet.pics/postassets/11933882/high_resolution/3251903d057a3c2a3b2a4d270652a1ed" /></Box>   </GridItem>
                        <GridItem area={"nine"} > <Box><Image src="https://storage.covet.pics/postassets/11925590/high_resolution/d2c4ba857a82b6a2fb7740b860ecea37" /></Box>   </GridItem>
                        </Grid>
                    </Box>
                        <Link to="/login"><Text my="1.5rem" textAlign="center">MORE</Text></Link>
                </Box>
           </Box>
        </>
    )
}