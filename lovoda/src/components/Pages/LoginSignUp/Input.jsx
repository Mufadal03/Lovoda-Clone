import { Input } from "@chakra-ui/react"

export const Inputs = ({placholder,name,type,handleChange}) => {
    return (
        <>
            <Input name={name} onChange={handleChange} type={type} placeholder={placholder} borderRadius="none" size={"md"} borderColor={"black"} _hover={{
                border:"2px solid black",cursor:"pointer"
            } } />
        </>
    )
}