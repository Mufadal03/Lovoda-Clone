import { ChevronDownIcon } from "@chakra-ui/icons"
import { Box, Button, Divider, Flex, Grid, GridItem, Heading, Image, Input, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverFooter, PopoverHeader, PopoverTrigger, Select, Spinner, Text } from "@chakra-ui/react"
import { useEffect,useState } from "react"
import { Link, useSearchParams } from "react-router-dom"
import { Card } from "../../../common/Card"
import { Pagination } from "../../../common/Pagination"
export const Earrings = () => {
    const [data, setData] = useState([])
    const [isLoading,setLoading] = useState(false)
    const [searchParam,setSearchParam]=useSearchParams()
    const [page, setPage] = useState(Number(searchParam.get("page")) || 1)
    const [sort, setSort] = useState("")
    const [order, setOrder] = useState("")
    const [greater, setGreater] = useState(0)
    const [less,setLess] = useState(50)
    useEffect(() => {
        setLoading(true)
        fetch(`https://json-mock-server-universal.onrender.com/earrings?_page=${page}&_limit=16&_sort=${sort}&_order=${order}&price_gte=${greater}&price_lte=${less}`)
            .then((res) => res.json())
            .then((res)=>{
                // console.log(res)

                setData(res)
                setLoading(false)
        })
    }, [page,sort,order,greater,less])
    useEffect(() => {
    setSearchParam({
      page,
    });
    }, [page]);
    const handlePage = () => {
        page==1?setPage(2):setPage(1)
    }
    const handleChange = (e) => {
        // console.log(e.target.value)
        if (e.target.value === "name_ASC") {
            
            setSort("name")
            setOrder("ASC")
        }
        else if (e.target.value === "name_DESC")
        {
            setSort("name")
            setOrder("DESC")
        }
        else if (e.target.value === "price_ASC")
        {
            setSort("price")
            setOrder("ASC")
        }
        else if (e.target.value == "price_DESC")
        {
            setSort("price")
            setOrder("DESC")
        }
        else {
            setSort("")
            setOrder("")
        }
    }
    return (
        <Box w="80%" m="auto">
            <Heading my="1rem" fontWeight={"400"} fontSize={"4xl"}>Earrings</Heading>
            {/* Sorting Starts */}
            <Flex my="1.5rem"  fontSize={"sm"} >
                <Flex  w="50%" alignItems={"center"} ml="1rem">
                    <Text mr="1rem">Filter :</Text>
                    <Popover>
                    <PopoverTrigger>
                        <Text _hover={{cursor:"pointer"}}>Price<ChevronDownIcon /> </Text>
                    </PopoverTrigger>
                    <PopoverContent>
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverHeader>Highest Price is $40</PopoverHeader>
                        <PopoverBody>
                        <Flex alignItems="center" justifyContent="space-evenly" >
                        <Text>From $</Text>
                        <Input onChange={(e)=>setGreater(e.target.value)} w="30%"/>
                    
                        <Text>To $</Text>
                        <Input onChange={(e)=>setLess(e.target.value)} w="30%"/>
                        </Flex>
                        </PopoverBody>
                    </PopoverContent>
                    </Popover>
                </Flex>
                    <Flex  w="50%" alignItems={"center"} justifyContent="flex-end">
                    <Text mr="1rem">Sort By:</Text>
                    <Select w="40%" onChange={handleChange} >
                        <option  value="">Sr No</option>
                        <option  value="name_ASC">Alphabetically A-Z</option>
                        <option value="name_DESC">Alphabetically Z-A</option>
                        <option  value = "price_ASC">Price Low to High</option>
                        <option  value = "price_DESC">Price High to Low</option>
                    </Select>
                </Flex>
            </Flex>
            {/* Products */}
            <Box mb="2" fontSize={"sm"}>
                {isLoading && <Flex justify={"center"}><Spinner thickness='4px' speed='0.65s' emptyColor='gray.200' color='blue.500'size='xl'/></Flex>}
                <Grid gridTemplateColumns={"repeat(4,1fr)"} gridTemplateRows="auto" gap="0.5rem">
                    {
                        data?.map((item) => (
                             <GridItem key={item.id}>
                            <Card hover={item.hover_poster} poster={item.poster} name={item.name} price={item.price} id={item.id} prod="earrings" />
                        </GridItem>
                        ))
                    }
                </Grid>
            </Box>
            <Pagination handlePage={handlePage} page={page} />
        </Box>
    )
}