import { Box, Checkbox, Flex, Stack, Text } from "@chakra-ui/react";
import './sidebar.css';

export const SideBar = ({ handleGenre, handleSort, sorting, genreSet, handleClearGenre}) => {
    // console.log(genreSet)
    const genreArr = Object.keys(genreSet);
    // console.log(genreArr)

    const handleSortClick = (e) => {
        handleSort(e.target.value);
    }

    const handleGenreChange = (e) => {
        handleGenre(e.target.name, e.target.checked);
    }
    // zIndex={2}
    return (
        <Stack className="sidebar" h='100%' w='240px' pos='fixed' top="58" left="0"  borderRight='1px' borderColor='#E2E8F0' p='8'>
            <Box>
                <Text textAlign='left' fontSize='24'>Sort</Text>
                <select className="sort" defaultValue={sorting} onClick={handleSortClick}>
                    <option value={"Popular"} >Popular</option>
                    <option value={"newest"} >Newest</option>
                    <option value={"oldest"} >Oldest</option>
                </select>
            </Box>
            <Box>
            <Flex>
                <Text  textAlign='left' fontSize='24' flexGrow='1'>Filter</Text>
                <Text cursor='pointer' fontSize='12' mt='3.5' onClick={handleClearGenre} >Clear</Text>
            </Flex>
            <Text textAlign='left' mb='2' mt='4'>Genre</Text>
            <Stack spacing={[1, 5]} >
                {
                    genreArr.map((ele, i) => {
                        return (
                            <Checkbox onChange={handleGenreChange} name={ele} size='md' colorScheme='green' key={i} isChecked={genreSet[ele]}>{ele}</Checkbox>
                        )
                    })
                }
            </Stack>
            </Box>
        </Stack>
    )
}