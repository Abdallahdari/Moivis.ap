import { useEffect, useState } from "react";
import Navbar from "./components/navbar";
import Main from "./components/main";
const tempMovieData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
  },
  {
    imdbID: "tt0133093",
    Title: "The Matrix",
    Year: "1999",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  },
  {
    imdbID: "tt6751668",
    Title: "Parasite",
    Year: "2019",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
  },
];

const tempWatchedData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    runtime: 148,
    imdbRating: 8.8,
    userRating: 10,
  },
  {
    imdbID: "tt0088763",
    Title: "Back to the Future",
    Year: "1985",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    runtime: 116,
    imdbRating: 8.5,
    userRating: 9,
  },
];
function App() {
  const [Movies, SetMovies] = useState([]);
  const [watched, Setwatcche] = useState([]);
  const [isloading, Setisloadin] = useState(false);
  const [search, SetSearch] = useState("");
  const [slecet, Setselcet] = useState("");
  function Handle(id) {
    Setselcet((preveius) => (preveius === id ? null : id));
  }
  const KEY = "44f546a";

  useEffect(() => {
    async function Fetching() {
      Setisloadin(true);
      try {
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&s=${search}`
        );
        const data = await res.json();
        SetMovies(data.Search || []);
        console.log(data.Search); // Safeguard in case data.Search is undefined
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        Setisloadin(false);
      }
    }

    Fetching();
  }, [search]);
  return (
    <>
      <Navbar Movies={Movies} search={search} SetSearch={SetSearch} />
      <Main
        slecet={slecet}
        Handle={Handle}
        Movies={Movies}
        tempWatchedData={tempWatchedData}
        isloading={isloading}
      />
    </>
  );
}

export default App;
