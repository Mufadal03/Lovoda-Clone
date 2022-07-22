import { Box, Divider, Heading, Radio, RadioGroup, Text } from "@chakra-ui/react"

export const BillingAddress = () => {
    return (
        <Box mt="3rem">
            <Divider orientation="horizontal" />
            <Box>
                <Heading fontSize="2xl" my="0.5rem" fontWeight="sm">Billing Address</Heading>
                <Text>Select the address that matches your card or payment method.</Text>
                <Box mt="1rem">
                    <RadioGroup>
                        <Radio>
                            <Text p="2" fontWeight={"semibold"}>Same as shipping address</Text>
                        </Radio>
                    </RadioGroup>
                </Box>
            </Box>

        </Box>
    )
}