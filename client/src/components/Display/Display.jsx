import { Box, Grid, Image, Text  } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import "./display.css";

export const Display = ({albumsData}) => {
    const history = useHistory();

    const handleAlbumPage = (name) => {
        history.push({
            pathname: `/${name}`
        })
    }

    return (
        <Box w='95%' m='auto'>
            <Grid className="display" mb='50px'>
                {
                    albumsData.map((ele, i) => {
                        return (
                            <Box key={i} h='400' p='5' background="#2D3748" borderRadius='5px' cursor='pointer' _hover={{ bg: '#4A5568' }} onClick={() => { handleAlbumPage(ele.albumName) }}>
                                <Image src={ele.cover} alt={ele.albumName} m='auto' boxSize='200px' objectFit='cover'/>
                                <Text pt='25px'>Title: {ele.albumName}</Text>
                                <Text>Artist: {ele.artistName}</Text>
                                <Text>Year: {ele.year}</Text>
                                <Text>Genre: {ele.genre.join("  ")}</Text>
                                <Text>{ele.songs.length} Songs</Text>
                            </Box>
                        )
                    })
                }
            </Grid>
        </Box>
    )
}


// if(page <= 1) return ;