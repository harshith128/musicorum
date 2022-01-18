import { Box, Flex, Text } from "@chakra-ui/react";

export const Pagination = ({page, handleChangePage, totalPages}) => {
    return (
        <Box pb='40px'>
            <Flex m='auto' w='fit-content'>
                <Text  variant='unstyled' cursor='pointer' _hover={{ background: '#2D3748' }}  borderColor='#E2E8F0' border='1px' p='5px' w='90px' borderRadius='5px'>
                    Previous
                </Text>
                <Text ml='16px' mr='16px' mt='2px' fontSize={'20px'}>{page}</Text>
                <Text variant='unstyled'  cursor='pointer' _hover={{ background: '#2D3748' }}  borderColor='#E2E8F0' border='1px' p='5px' w='90px' borderRadius='5px'>
                    Next
                </Text>
            </Flex>
            <Text mt='10px'>
                {
                    `Page ${page} of ${totalPages}`
                }
            </Text>
        </Box>
    )
}