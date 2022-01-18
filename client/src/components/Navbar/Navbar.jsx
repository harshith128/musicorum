import { SearchIcon } from '@chakra-ui/icons';
import { Box, Stack, Input, Flex, Heading, } from "@chakra-ui/react";
import './navbar.css';

export const Navbar = () => {

    return (
            <Stack className='navbar' background="#171923" color='#E2E8F0' pos='fixed' top={0} h='9vh' w='100%'>
                <Flex>
                    <Box mt="4" mr="4" ml="10">
                        <Heading size='sm' as="i"  border='1px' borderColor='#ff0101' p='1' borderRadius='5' color='#ff0101'>MUSICORUM</Heading>
                    </Box>
                    <Box m={2} h="40px" w='40%' ml="10" border='1px' borderColor='#E2E8F0' borderRadius='5'>
                        <Input w='99%' pl='2' pt='2' placeholder='Search here' variant='unstyled' borderColor='#0F0E0E' />
                    </Box>
                    <Box mt="3.5" mr="4" ml="1">
                        <SearchIcon />
                    </Box>
                </Flex> 
            </Stack>
    )
}