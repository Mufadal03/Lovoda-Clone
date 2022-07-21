import { Box, Divider, Grid, GridItem, Heading,Text } from "@chakra-ui/react"
import { useState } from "react"
const db = [
    {
        poster: "https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L201009-3__65781_823x.jpg?v=1645115938",
        name: "Helio Charm Necklace",
        price:18.00
    },
     {
        poster: "https://cdn.shopify.com/s/files/1/0627/7388/7215/products/020100329-3__82776_493x.jpg?v=1645111244",
        name: "Zora Necklace",
        price:15.00
    },
      {
        poster: "https://cdn.shopify.com/s/files/1/0627/7388/7215/products/020100489-4__65663_493x.jpg?v=1645112513",
        name: "Pinecone Necklace",
        price:15.00
    },
       {
        poster: "https://cdn.shopify.com/s/files/1/0627/7388/7215/products/020100545-S-5__78883_493x.jpg?v=1645114215",
        name: "Wide Antler Necklace | Silver",
        price:14.00
    },
]
export const YouMakeLike = () => {

    const  [data,setData] = useState(db)
    console.log(data)
    return (
        <Box> 
            <Divider orientation="horizontal" />                    
             <Heading fontWeight={"sm"} my="2rem">You May Also Like</Heading>
            <Grid gridTemplateColumns={"repeat(4,1fr)"} gap="1rem"> 
            {data.map((item) => (
                <GridItem>
                    <Box bgImage={`url(${item.poster})`} h="300px" bgSize={"cover"}>
                   </Box>
                    <Box mt="0.3rem">
                    <Text>{item.name}</Text>
                    <Text>${ item.price}</Text>
                   </Box>
                </GridItem>
            ))}
            </Grid>
       </Box>
    )
}