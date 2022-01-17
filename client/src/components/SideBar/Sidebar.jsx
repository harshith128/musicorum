import { Flex, Select, Stack, Text } from "@chakra-ui/react";
import './sidebar.css';

export const SideBar = ({ handleGenre, handleSort }) => {
    const genreArr = ["Pop", "Teen", "Rock", "Latin", "Dance"];

    const handleClick = (e) => {
        handleSort(e.target.value);
    }
    
    return (
        <Stack className="sidebar" h='100%' w='180px' pos='fixed' top="55" left="0" zIndex={2}>
            <Flex>
                <Text>Filter</Text>
                <Text onClick={() => {handleGenre(undefined); }}>Clear</Text>
            </Flex>
            <Text>Genre</Text>
            <Select placeholder='Select option' >
                {
                    genreArr.map((ele, i) => {
                        return (
                            <option onClick={() => {handleGenre(ele); }} value={ele} key={i}>{ele}</option>
                        )
                    })
                }
            </Select>
            <Text>Sort</Text>
            <Select bg='#1A202C' color='#E2E8F0' onClick={handleClick} variant='outline'>
                <option value={"Popular"}>Popular</option>
                <option value={"newest"}>Newest</option>
                <option value={"oldest"}>Oldest</option>
            </Select>
        </Stack>
    )
}