import { Footer } from "../common/Footer"
import { Navbar } from "../common/Navbar"

export const Layout = ({children}) => {
    return (
        <>
        <Navbar />
        {children} 
        <Footer />
        </>
    
    )
}