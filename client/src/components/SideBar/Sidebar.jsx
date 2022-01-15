import { Box, Stack } from "@chakra-ui/react";
import './sidebar.css';

export const SideBar = ({ handleClick }) => {
    return (
        <Stack className="sidebar" h='100vh' w='300px' background="#171923" color='#E2E8F0'>
            <Box onClick={ handleClick }>Hello</Box>
        </Stack>
    )
}