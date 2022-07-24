import { ChevronRightIcon } from "@chakra-ui/icons"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react"

export const BreadCrum = () => {
    return (
        <Breadcrumb fontSize={"sm"} spacing='4px' separator={<ChevronRightIcon color='gray.500' />}>
                <BreadcrumbItem>
                    <BreadcrumbLink href='/cart'>Cart</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                    <BreadcrumbLink href='/checkout/info'>Information</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem isCurrentPage>
                    <BreadcrumbLink href='/checkout/shipping'>Shipping</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem >
                    <BreadcrumbLink href='/checkout/payment'>Payment</BreadcrumbLink>
                </BreadcrumbItem>
        </Breadcrumb>
    )
}