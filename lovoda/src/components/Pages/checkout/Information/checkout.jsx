import { Box, Flex, Heading, Image } from "@chakra-ui/react"
// import { useEffect } from "react"
// import { useState } from "react"
import { BreadCrum } from "../../../common/BreadCrum"
import { Info } from "./Info"
import { SideBar } from "../Sidebar"

export const Checkout = () => {
   document.title="Checkout"
    return (
        <Box w="73%" m="4rem auto" >
            <Flex>
                <Box w="60%" borderRight="1px solid gray"> 
                    <Box w="95%" >
                       <Image src="https://cdn.shopify.com/s/files/1/0627/7388/7215/files/04122019_logo2.png?176" h="60px" />
                        {/* breadcrum */}
                        <Box mt="2rem">
                            <BreadCrum />
                        </Box>
                            {/* breadcrum */}
                        <Info />
                     </Box>
                
               </Box>
                <Box w="40%">
                    <SideBar />
                </Box>

            </Flex>

        </Box>
    )
}