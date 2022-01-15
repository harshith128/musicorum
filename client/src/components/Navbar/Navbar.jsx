import { HamburgerIcon, SearchIcon } from '@chakra-ui/icons';
import { Box, Stack, Input, Flex, Heading, } from "@chakra-ui/react";
import { useState } from 'react';
import { SideBar } from '../SideBar/Sidebar';
import './navbar.css';

export const Navbar = () => {
    const [showSideBar, setShowSideBar] = useState(false);

    const handleClick = () => {
        setShowSideBar(!showSideBar);
    } 
    return (
        <>
            {
                showSideBar ? <SideBar handleClick={handleClick} /> : <></>
            }
            <Stack className='navbar' background="#171923" color='#E2E8F0'>
                <Flex>
                    <Box className='hamburger' mt="3.5" mr="4" ml="10" onClick={handleClick} >
                        <HamburgerIcon />
                    </Box>
                    <Box mt="4" mr="4" ml="4">
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
        </>
    )
}