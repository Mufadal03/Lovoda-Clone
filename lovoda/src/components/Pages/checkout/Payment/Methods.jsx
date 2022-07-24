import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Center, Flex, Heading, Image, Input, Spacer, Text } from "@chakra-ui/react"

export const Method = () => {
    return (
        <Box mt="4rem">
            <Box mb="1.5rem">
                <Heading fontSize="2xl" my="0.4rem" fontWeight="sm" >Payment Method</Heading>
                <Text fontSize="sm">All transactions are secure and encrypted.</Text>
            </Box>
            <Accordion>
                <AccordionItem>
                    <AccordionButton>
                        <Flex flex='1' p="2" textAlign='left'>
                            <Heading fontSize="md" fontWeight="sm">Credit card</Heading>
                            <Spacer />
                            <Flex gap="0.2rem" alignItems={"center"}>
                                <Image src="https://cdn.shopify.com/shopifycloud/shopify/assets/payment_icons/visa-319d545c6fd255c9aad5eeaad21fd6f7f7b4fdbdb1a35ce83b89cca12a187f00.svg" />
                                <Image src="https://cdn.shopify.com/shopifycloud/shopify/assets/payment_icons/master-173035bc8124581983d4efa50cf8626e8553c2b311353fbf67485f9c1a2b88d1.svg" />
                                <Image src="https://cdn.shopify.com/shopifycloud/shopify/assets/payment_icons/american_express-2264c9b8b57b23b0b0831827e90cd7bcda2836adc42a912ebedf545dead35b20.svg" />
                                <Image src="https://cdn.shopify.com/shopifycloud/shopify/assets/payment_icons/discover-cc9808e50193c7496e7a5245eb86d5e06f02e2476c0fe70f2c40016707d35461.svg" />
                                <Text fontSize={"xs"}>and more...</Text>

                            </Flex>
                        </Flex>
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                        <Flex direction={"column"} gap="1rem">
                            <Input placeholder="Card number" type="number" required/>
                            <Input placeholder="Name on card" type="number" required/>
                            <Flex justifyContent={"space-between"}>
                                <Input placeholder="Expiration date ( MM / YY )" w="47%" required/>
                                <Input placeholder="Security Code " w="47%" required    />

                            </Flex>
                        </Flex>
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <AccordionButton>
                        <Box flex='1' p="2" textAlign='left'>
                        <Image src="https://cdn.shopify.com/shopifycloud/shopify/assets/checkout/offsite-gateway-logos/shopify_installments@2x-d7520ea8e57828208454f0290d5ae8e4269bda53ac0fa85f8329da8c081e7557.png" h="25px" />
                        </Box>
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                        <Box>
                            <Center >
                                <Image src="https://cdn.shopify.com/shopifycloud/shopify/assets/checkout/offsite-f3d4a55eef203adc0d1d16841d8ff45acad31063a7d2f6bcf0167ef475e668d5.png" />
                                
                            </Center>
                            <Flex direction={"column"} alignItems="center" mt="1rem">
                                <Text fontSize="sm">After clicking “Complete order”, you will be redirected to ShopPay </Text>
                                <Text fontSize="sm">to complete your purchase securely.</Text>
                            </Flex>
                           
                        </Box>
                    </AccordionPanel>
                </AccordionItem>
                 <AccordionItem>
                    <AccordionButton>
                        <Box flex='1' p="2" textAlign='left'>
                        <Image src="https://cdn.shopify.com/shopifycloud/shopify/assets/checkout/offsite-gateway-logos/paypal@2x-768388b0667bef1aa9a7cf02fa1cc2184c2915a90d4cdd62dde223f74f2acbfc.png" h="25px" />
                        </Box>
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                        <Box>
                            <Center >
                                <Image src="https://cdn.shopify.com/shopifycloud/shopify/assets/checkout/offsite-f3d4a55eef203adc0d1d16841d8ff45acad31063a7d2f6bcf0167ef475e668d5.png" />
                                
                            </Center>
                            <Flex direction={"column"} alignItems="center" mt="1rem">
                                <Text fontSize="sm">After clicking “Complete order”, you will be redirected to PayPal </Text>
                                <Text fontSize="sm">to complete your purchase securely.</Text>
                            </Flex>
                           
                        </Box>
                    </AccordionPanel>
                </AccordionItem>
                 <AccordionItem>
                    <AccordionButton>
                        <Box flex='1' p="2" textAlign='left'>
                            <Flex>
                                <Heading fontSize="md" fontWeight={"md"}>Afterpay</Heading>
                                <Spacer />
                                <Image src ="https://cdn.shopify.com/shopifycloud/shopify/assets/payment_icons/afterpay-c814f73b45b605f4c618ce52eb8c67427d3ae3cb8addb872e621dfbabae0b5f0.svg" />
                            </Flex>
                        </Box>
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                        <Box>
                            <Center >
                                <Image src="https://cdn.shopify.com/shopifycloud/shopify/assets/checkout/offsite-f3d4a55eef203adc0d1d16841d8ff45acad31063a7d2f6bcf0167ef475e668d5.png" />
                                
                            </Center>
                            <Flex direction={"column"} alignItems="center" mt="1rem">
                                <Text fontSize="sm">After clicking “Complete order”, you will be redirected to AfterPay </Text>
                                <Text fontSize="sm">to complete your purchase securely.</Text>
                            </Flex>
                           
                        </Box>
                    </AccordionPanel>
                </AccordionItem>
                </Accordion>
        </Box>
    )
}