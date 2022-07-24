import { Box, Divider, Flex, HStack, Icon, Image, Text } from "@chakra-ui/react"
import { NavLink } from "react-router-dom"
import { FaRegUser } from "react-icons/fa"
import { BsHandbag } from "react-icons/bs"
import {HiOutlineSearch} from "react-icons/hi"
export const Navbar = () => {
    const Active = {
        textDecoration: "underline",
    }
    const base = {
        textDecoration:"none"
    }
    return (
        <Box>
            <Box>
                <Text fontSize={"sm"} textAlign="center" py="2">Free Shipping on Orders Over $75 and Free Returns (US ONLY)</Text>

            </Box>
            <Divider orientation="horizontal" />
            <Flex py="2" w="85%" h="100px" m="auto" alignItems={"center"}>
                <Flex  flexGrow={0.5} direction="row-reverse" >
                    <Image   src="https://cdn.shopify.com/s/files/1/0627/7388/7215/files/04122019_logo2_90x.png?v=1645644264" alt="BrandLogo" />
                </Flex>
                <HStack ml="2rem" gap="1.5rem"  flexGrow={3}>
                    <NavLink style={({ isActive }) => (isActive ? Active : base)} to="/"><Text  fontSize="sm" >Home</Text></NavLink>
                    <NavLink   to="/earrings"><Text fontSize="sm">New</Text></NavLink>
                    <NavLink  to="/bracelets"><Text fontSize="sm" >Shop All</Text></NavLink>
                    <NavLink style={({ isActive }) => (isActive ? Active : base)} to="/earrings"><Text fontSize="sm" >Earrings</Text></NavLink>
                    <NavLink  style={({ isActive }) => (isActive ? Active : base)}to="/necklaces"><Text fontSize="sm" >Necklaces</Text></NavLink>
                    <NavLink style={({ isActive }) => (isActive ? Active : base)} to="/bracelets"><Text fontSize="sm" >Braclets</Text></NavLink>
                    <NavLink  to="/necklaces"><Text fontSize="sm" >Rings</Text></NavLink>
                    <NavLink  to="/shopSocial"><Text fontSize="sm" >Shop Social</Text></NavLink>
                </HStack>
                <HStack gap="1rem" flexGrow={0.5}>
                    <NavLink to="/"><Icon h={6} w={6}as={ HiOutlineSearch} /></NavLink>
                    <NavLink to="/signup"><Icon h={6} w={5} as={FaRegUser} /></NavLink>
                    <NavLink to="/cart"><Icon h={6} w={5} as={BsHandbag} /></NavLink>

                </HStack>
            </Flex>
            <Divider orientation="horizontal"/>
        </Box>






    )
}