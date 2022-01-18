import { Box, Checkbox, Flex, Stack, Text } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
import './sidebar.css';
const genreArr = ["Pop", "Teen", "Rock", "Latin", "Dance"];

export const SideBar = ({ handleGenre, handleSort }) => {
    const location = useLocation();
    // console.log(location)
    const history = useHistory();
    // console.log(history)

    const handleClick = (e) => {
        handleSort(e.target.value);
    }
    // zIndex={2}
    return (
        <Stack className="sidebar" h='100%' w='240px' pos='fixed' top="55" left="0"  borderRight='1px' borderColor='#E2E8F0' p='8'>
            <Box>
                <Text textAlign='left' fontSize='24'>Sort</Text>
                <select className="sort" onClick={handleClick}>
                    <option value={"Popular"}>Popular</option>
                    <option value={"newest"}>Newest</option>
                    <option value={"oldest"}>Oldest</option>
                </select>
            </Box>
            <Box>
            <Flex>
                <Text  textAlign='left' fontSize='24' flexGrow='1'>Filter</Text>
                <Text cursor='pointer' fontSize='12' mt='3.5' >Clear</Text>
            </Flex>
            <Text textAlign='left' mb='2' mt='4'>Genre</Text>
            <Stack spacing={[1, 5]} >
                {
                    genreArr.map((ele, i) => {
                        return (
                            <Checkbox size='md' colorScheme='green' key={i}>{ele}</Checkbox>
                        )
                    })
                }
            </Stack>
            </Box>
        </Stack>
    )
}