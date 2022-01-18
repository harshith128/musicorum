import { Box, Image, Stack, Text, Button, Table, Thead, Tr, Th, Tbody, Td } from "@chakra-ui/react";
import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom"
import { Navbar } from "../../components/Navbar/Navbar";

export const Album = () => {
    const history = useHistory();
    const { name } = useParams();
    const [albumData, setAlbumData] = useState();

    const getAlbum = async() => {
        // console.log(name)
        if(name === undefined){
            return
        }
        const response = await fetch(`http://localhost:2525/albums/${name}`);
        const { album } = await response.json();
        // console.log(album)
        setAlbumData(album);
    }

    const handleBack = () => {
        history.goBack();
    }

    useEffect(() => {
        getAlbum();
    }, [name])

    return (
        <Box>
            <Navbar />
            <Stack  pt='100px'>
            {
                !albumData ? <Text>Album Not Found</Text> : 
                <Box border='1px' borderColor='#E2E8F0' p='20px' w='50%' m='auto' bg='#171923' borderRadius='5px'>
                    <Image src={albumData.cover} alt={albumData.albumName} m='auto' boxSize='200px' objectFit='cover' />
                    <Text pt='25px'>Title: {albumData.albumName}</Text>
                    <Text>Artist: {albumData.artistName}</Text>
                    <Text>Year: {albumData.year}</Text>
                    <Text>Genre: {albumData.genre.join("  ")}</Text>
                    <Table>
                        <Thead color='#E2E8F0'>
                            <Tr>
                                <Th>Sl.No.</Th>
                                <Th>Song</Th>
                                <Th>Duration</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {
                                albumData.songs.map((ele, i) => {
                                    return (
                                        <Tr key={i}>
                                            <Td>{i+1}</Td>
                                            <Td>{ele.name}</Td>
                                            <Td>{ele.duration} min</Td>
                                        </Tr>
                                    )
                                })
                            }
                        </Tbody>
                    </Table>
                </Box>
            }
            <Box>
                <Button variant='unstyled'  cursor='pointer' _hover={{ background: '#2D3748' }}  borderColor='#E2E8F0' border='1px' p='5px' w='90px' m='auto' mt='50px' mb='30px' borderRadius='5px' onClick={handleBack}> 
                    Back
                </Button>
            </Box>
            </Stack>
        </Box>
    )
}