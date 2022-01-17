// import { Banner } from "../../components/Banner/Banner";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../../components/Navbar/Navbar";
import { SideBar } from "../../components/SideBar/Sidebar";
import "./home.css";

export const Home = () => {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [genre, setGenre] = useState();
    const [tot, setTot] = useState(0);
    const [sort, setSort] = useState();
    const getData = async() => {
        let response = await fetch(`http://localhost:2525/albums?page=${page}${genre === undefined ? "" : `&genre=${genre}`}${ sort === undefined ? "" : `&sort=${sort}`}`);
        let { albums, total } = await response.json();
        setTot(total);
        setData(albums);
    }

    const handleSort = (e) => {
        setPage(1);
        setSort(e);
    }

    const handleGenre = (e) => {
        setPage(1);
        setGenre(e);
    }
    useEffect(() => {
        getData();
    }, [page, genre, sort]);

    const handlePage = (e) => {
        // console.log(e)
        setPage(page+e)
    }
    return (
        <div className="page">
          <Navbar />
          <SideBar handleGenre={handleGenre} handleSort={handleSort}/>
          {/* <Banner /> */}
          <div className="album-cont">
          {
              data.map((ele, i) => {
                  return (
                    //   <Link key={i} to={`/album/${ele.albumName}`}>
                        <div className="album"  key={i}>
                          <img src={ele.cover} alt={ele.albumName} />
                          <p>{ele.albumName}</p>
                          <p>{ele.artistName}</p>
                          <p>{ele.genre}</p>
                          <p>{ele.year}</p>
                        </div>
                    //   </Link>
                  )
              })
          }
          </div>
          <div className="paginate">
              <button disabled={page <= 1} onClick={() => {handlePage(-1)}}>Previous</button>
              <p>{page}</p>
              <button disabled={page >= tot} onClick={() => {handlePage(1)}}>Next</button>
          </div>
        </div>
    )
}