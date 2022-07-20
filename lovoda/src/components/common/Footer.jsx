import { Box, Divider, Flex, Heading, Input, Spacer, Text, VStack } from "@chakra-ui/react"

export const Footer = () => {
    return (
        <Box>
            <Divider orientation="horizontal" />
            <Box border="2px solid red" w="80%" m="3rem auto" p="1rem">
                <Flex >
                    <Flex  justifyContent={"space-evenly"} direction={"column"} textAlign={"left"} w="50%">
                        <Text fontWeight={"500"} fontSize="lg" >Info</Text>
                        <Text _hover={{
                            textDecoration: "underline",
                            cursor:"pointer"
                        }} my="0.5rem">Search</Text>
                        <Text   _hover={{
                            textDecoration: "underline",
                            cursor:"pointer"
                        }} my="0.5rem">Terms of Service</Text>
                        <Text   _hover={{
                            textDecoration: "underline",
                            cursor:"pointer"
                        }} my="0.5rem">Refund policy</Text>
                        <Text   _hover={{
                            textDecoration: "underline",
                            cursor:"pointer"
                        }} my="0.5rem">Wholesale</Text>
                        <Text   _hover={{
                            textDecoration: "underline",
                            cursor:"pointer"
                        }} my="0.5rem">Wholesale Signup Form</Text>
                        <Text  _hover={{
                            textDecoration: "underline",
                            cursor:"pointer"
                        }}  my="0.5rem">Shipping</Text>
                    </Flex>
                    <Spacer></Spacer>
                    <Flex  direction="column" textAlign={"left"} w="50%">
                        <Text fontWeight={"500"} fontSize="lg">Contact US !</Text>
                        <Text _hover={{textDecoration: "underline",cursor:"pointer" }} my="0.5rem">Need to talk? Reach us via email, phone or text!</Text>
                        <Text _hover={{textDecoration: "underline",cursor:"pointer" }}  my="0.5rem" fontWeight={"650"}>Email: Customerservice@Lovoda.com</Text>
                        <Text  _hover={{textDecoration: "underline",cursor:"pointer" }} my="0.5rem" fontWeight={"650"}>Phone: (443) 500-1200</Text>
                    </Flex>
                </Flex>
            </Box>
            <Divider  m="auto" orientation="horizontal" />
            <Box mt="2rem" h="20vh" border={"2px solid red"}>logo</Box>
        </Box>
    )
}




