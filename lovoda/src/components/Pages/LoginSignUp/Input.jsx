import { Input } from "@chakra-ui/react"

export const Inputs = ({placholder}) => {
    return (
        <>
            <Input placeholder={placholder} borderRadius="none" size={"md"} borderColor={"black"} _hover={{
                border:"2px solid black",cursor:"pointer"
            } } />
        </>
    )
}