import { Box, Heading } from "@chakra-ui/react"
import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router"

export const DetailedProductPage = ({product}) => {
    const [data, setData] = useState([])
    const param = useParams()
    // const [custom, setCustom] = useState("")
    // if (product == "earrings") setCustom("earrings")
    // else if (product == "necklaces") setCustom("necklaces")
    // else setCustom("bracelets")
    
    useEffect(() => {
        fetch(`https://muffi-server.herokuapp.com/${product}/${param.necklaces_id}`)
            .then((res) => res.json())
            .then((res) => {
            setData(res)
        })
            .catch((err) => {
            console.log(err)
        })
    }, [])

    return (
        <Box>
            <Heading>Detailed Product </Heading>
            {
                
                    <Heading>{ data.name}</Heading>
            
            }
        </Box>
    )
}