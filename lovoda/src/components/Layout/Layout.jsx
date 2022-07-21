import { Box } from "@chakra-ui/react"
import { Footer } from "../common/Footer"
import { Navbar } from "../common/Navbar"

export const Layout = ({children}) => {
    return (
        <>
        <Navbar />
        <Box >{children} </Box>
        <Footer />
        </>
    
    )
}