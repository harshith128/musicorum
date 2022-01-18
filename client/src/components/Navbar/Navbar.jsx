import { SearchIcon } from '@chakra-ui/icons';
import { Box, Stack, Input, Flex, Heading, } from "@chakra-ui/react";
import { useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import './navbar.css';

export const Navbar = () => {
    const history = useHistory();
    const [search, setSearch] = useState('');

    const handleGoHome = () => {
        history.push({
            pathname: '/'
        })
    }

    const handleChange = (e) => {
        setSearch(e.target.value);
    } 

    const handleSearch = () => {
        if(search === ""){
            return
        }
        history.push({
            pathname: `/${search}`
        })
    }

    return (
            <Stack className='navbar' background="#171923" color='#E2E8F0' pos='fixed' top={0} h='58px' w='100%'>
                <Flex>
                    <Box mt="4" mr="4" ml="10">
                        <Heading size='sm' as="i" cursor='pointer'  border='1px' borderColor='#ff0101' p='1' borderRadius='5' color='#ff0101' onClick={handleGoHome}>MUSICORUM</Heading>
                    </Box>
                    <Box m={2} h="40px" w='40%' ml="10" border='1px' borderColor='#E2E8F0' borderRadius='5'>
                        <Input w='99%' pl='2' pt='2' placeholder='Search here' variant='unstyled' borderColor='#0F0E0E' onChange={handleChange} />
                    </Box>
                    <Box mt="3.5" mr="4" ml="1">
                        <SearchIcon onClick={handleSearch} cursor='pointer' />
                    </Box>
                </Flex> 
            </Stack>
    )
}