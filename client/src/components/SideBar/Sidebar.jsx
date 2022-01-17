import { Box, Heading, Stack, Text } from "@chakra-ui/react";
import './sidebar.css';

export const SideBar = ({ handleClick, handleGenre, handleSort }) => {
    return (
        <Stack className="sidebar" h='100%' w='300px' background="#171923" color='#E2E8F0'>
            <Box onClick={ handleClick }>Close</Box>
            <Heading>Genre</Heading>
            <Text onClick={() => {handleGenre("pop"); handleClick()}}>Pop</Text>
            <Text onClick={() => {handleGenre("Teen"); handleClick()}}>Teen</Text>
            <Text onClick={() => {handleGenre("latin"); handleClick()}}>Latin</Text>
            <Text onClick={() => {handleGenre("Rock"); handleClick()}}>Rock</Text>
            <Text onClick={() => {handleGenre("Dance"); handleClick()}}>Dance</Text>
            <Text onClick={() => {handleGenre(undefined); handleClick()}}>Clear filters</Text>
            <Heading>Sort</Heading>
            <Text onClick={() => {handleSort("newest"); handleClick()}}>Newest</Text>
            <Text onClick={() => {handleSort("oldest"); handleClick()}}>Oldest</Text>
            <Text onClick={() => {handleSort(undefined); handleClick()}}>Popular</Text>
        </Stack>
    )
}