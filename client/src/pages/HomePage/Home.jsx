import { Flex, Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Display } from "../../components/Display/Display";
import { Navbar } from "../../components/Navbar/Navbar";
import { SideBar } from "../../components/SideBar/Sidebar";
import { Pagination } from "../../components/Pagination/Pagination";
import "./home.css";

const init = { pop: false, teen: false, rock: false, latin: false, dance: false };

export const Home = () => {
    const history = useHistory();
    const location = useLocation();
    const query = new URLSearchParams(location.search);

    const [data, setData] = useState([]);

    const [genre, setGenre] = useState(init);
    const [genreStr, setGenreStr] = useState('');

    const [tot, setTot] = useState(0);

    const [sort, setSort] = useState(query.get('sort') || 'popular');

    const [page, setPage] = useState(+query.get('page') || 1);


    const getData = async() => {
        // ${genre === undefined ? "" : `&genre=${genreStr}`}
        let response = await fetch(`http://localhost:2525/albums?page=${page}${ sort === undefined ? "" : `&sort=${sort}`}`);
        let { albums, total } = await response.json();
        // console.log(albums)
        setTot(total);
        setData(albums);
    }

    const handleSort = (e) => {
        setPage(1);
        setSort(e);
    }

    const handleClearGenre = () => {
        setGenre({ pop: false, teen: false, rock: false, latin: false, dance: false });
    }

    const getGenre = () => {
        const array = [];
        for(let key in genre) {
            if(genre[key]){
                array.push(key);
            }
        }
        setGenreStr(array.join("+"));
        return
    }

    const handleGenre = (key, val) => {
        setPage(1);
        setGenre({ ...genre, [key]: val });
    }

    useEffect(() => {
        getGenre();
    }, [genre])

    useEffect(() => {
        const temp = query.get('genre');
        if(temp !== null){
            const arr = temp.split(" ");
            arr.forEach((ele) => {
                if(init[ele] === false){
                    init[ele] = true;
                }
            })
            setGenreStr(arr.join("+"))
        }
    }, [])

    useEffect(() => {
        history.replace({
            pathname: '/',
            search: `?page=${page}&sort=${sort}${genreStr === '' ? '' : `&genre=${genreStr}`}`
        })
        getData();
    }, [page, sort, genreStr]);

    const handlePage = (e) => {
        setPage(page+e)
    }

    return (
        <div className="page">
          <Navbar />
          <Flex>
            <Box>
                <SideBar handleGenre={handleGenre} handleSort={handleSort} sorting={sort} genreSet={genre} handleClearGenre={handleClearGenre}/>
            </Box>
            <Box flexGrow={1} ml='240px' mt='100px'>
                <Display albumsData={data} />
                <Pagination page={page} handleChangePage={handlePage} totalPages={tot}/>
            </Box>
          </Flex>
        </div>
    )
}