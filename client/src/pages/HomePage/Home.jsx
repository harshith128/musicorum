// import { Banner } from "../../components/Banner/Banner";
import { Flex, Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Display } from "../../components/Display/Display";
import { Navbar } from "../../components/Navbar/Navbar";
import { SideBar } from "../../components/SideBar/Sidebar";
import "./home.css";

export const Home = () => {
    const history = useHistory();
    const location = useLocation();
    const query = new URLSearchParams(location.search);

    const [data, setData] = useState([]);
    const [genre, setGenre] = useState();
    const [tot, setTot] = useState(0);
    const [sort, setSort] = useState();

    const [page, setPage] = useState(+query.get('page') || 1);


    const getData = async() => {
        let response = await fetch(`http://localhost:2525/albums?page=${page}${genre === undefined ? "" : `&genre=${genre}`}${ sort === undefined ? "" : `&sort=${sort}`}`);
        let { albums, total } = await response.json();
        console.log(albums)
        setTot(total);
        setData(albums);
    }

    const handleSort = (e) => {
        setPage(1);
        setSort(e);
    }

    const handleGenre = (e) => {
        // console.log(e)
        setPage(1);
        setGenre(e);
    }
    useEffect(() => {
        history.replace({
            pathname: '/',
            search: `?page=${page}`
        })
        getData();
    }, [page, genre, sort]);

    const handlePage = (e) => {
        setPage(page+e)
    }

    return (
        <div className="page">
          <Navbar />
          <Flex>
            <Box>
                <SideBar handleGenre={handleGenre} handleSort={handleSort}/>
            </Box>
            <Box flexGrow={1} ml='240px' mt='100px'>
                <Display albumsData={data} />
            </Box>
          </Flex>
          {/* <Banner /> */}
          {/*
          <div className="paginate">
              <button disabled={page <= 1} onClick={() => {handlePage(-1)}}>Previous</button>
                <p>{page}</p>
              <button disabled={page >= tot} onClick={() => {handlePage(1)}}>Next</button>
          </div> */}
        </div>
    )
}