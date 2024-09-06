import { useEffect, useState } from "react";

function Main({ Movies, tempWatchedData, isloading, Handle, slecet }) {
  return (
    <div className="container mx-auto xl:max-w-[1100px] mt-3">
      <div className="flex items-start gap-5">
        <Box>
          {isloading ? <Load /> : <MovieList Movies={Movies} Handle={Handle} />}
        </Box>
        <Box>
          {/* <WatcheList tempWatchedData={tempWatchedData} /> */}
          <MovieDetails slecet={slecet} />
        </Box>
      </div>
    </div>
  );
}
function Box({ children }) {
  const [show, Setshow] = useState(false);

  return (
    <>
      <div className=" relative items-start justify-between w-[32rem] h-[43rem]  overflow-scroll bg-slate-800 py-4 px-4 rounded-md">
        {show && <div> {children}</div>}
        <button
          className="absolute top-4 right-5 h-6 w-6 bg-gray-300 rounded-full"
          onClick={() => Setshow(!show)}
        >
          {show ? "-" : "+"}
        </button>
      </div>
    </>
  );
}

function MovieList({ Movies, Handle }) {
  return (
    <ul className="flex flex-col  divide-y-2">
      {Movies.map((movie) => (
        <ListMovie key={movie.imdbID} Handle={Handle} movie={movie} />
      ))}
    </ul>
  );
}
function ListMovie({ movie, Handle }) {
  return (
    <>
      <li
        className="px-3 py-4 flex items-center gap-4 hover:bg-gray-300 cursor-pointer transition duration-200"
        onClick={() => Handle(movie.imdbID)}
      >
        <img src={movie.Poster} alt="" className="w-16 "></img>
        <div className="">
          <p>{movie.Title}</p>
          <p>{movie.Year}</p>
        </div>
      </li>
    </>
  );
}
function WatcheList({ tempWatchedData }) {
  return (
    <>
      <ul className="flex flex-col gap-4 divide-y-2">
        {tempWatchedData.map((movie) => (
          <ListWatched movie={movie} />
        ))}
      </ul>
    </>
  );
}
function ListWatched({ movie }) {
  return (
    <>
      <li className=" flex py-4 gap-4 ">
        <img src={movie.Poster} alt="" className="w-16 "></img>
        <div className="">
          <p>{movie.Title}</p>
          <p>{movie.Year}</p>
        </div>
      </li>
    </>
  );
}

function Load() {
  return (
    <>
      <div className="h-screen flex items-center justify-center">
        <div class="loader">
          <div class="cell d-0"></div>
          <div class="cell d-1"></div>
          <div class="cell d-2"></div>

          <div class="cell d-1"></div>
          <div class="cell d-2"></div>

          <div class="cell d-2"></div>
          <div class="cell d-3"></div>

          <div class="cell d-3"></div>
          <div class="cell d-4"></div>
        </div>
      </div>
    </>
  );
}
function MovieDetails({ slecet }) {
  const KEY = "44f546a";
  const [item, Seti] = useState({});
  const {
    Year: year,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Released: released,
    Actors: actors,
    Director: director,
    Genre: genre,
  } = item;

  useEffect(
    function () {
      async function getDetails() {
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&i=${slecet}`
        );
        const data = await res.json();
        Seti(data);
      }
      getDetails();
    },
    [slecet]
  );
  return (
    <>
      <div className="flex flex-col gap-4">
        <img src={poster} className="w-48" />
        <h2>{}</h2>
        <p>{year}</p>
        <p>{runtime}</p>
        <p>{genre}</p>
        <p>{plot}</p>
        <p>{actors}</p>
        <p>{director}</p>
      </div>
    </>
  );
}
export default Main;
